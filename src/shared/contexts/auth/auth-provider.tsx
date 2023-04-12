import { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { useKeepUserOnMemory } from '@/features/auth/utils/useKeepUserOnMemory'
import { api } from '@/shared/utils/authApi'

import AuthContext from './auth-context'

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { getUser, setUser: setUserOnMemory } = useKeepUserOnMemory()

  const { push } = useRouter()

  const [user, setUser] = useState<Record<string, unknown> | null>(getUser())

  const login = useCallback(async (email: string, password: string) => {
    const userInformation = await api
      .post(`${process.env.NEXT_PUBLIC_AUTH}auth/login`, {
        name: email,
        password,
      })
      .then((response) => response.data)

    return userInformation
  }, [])

  const register = useCallback(
    async (email: string, password: string) => {
      const newUser = await api
        .post(`${process.env.NEXT_PUBLIC_AUTH}auth/register`, {
          name: email,
          email,
          password,
        })
        .then((response) => response.data)

      return newUser
    },

    []
  )

  const createUseByAdmin = useCallback(async (email: string) => {
    const newUser = await api
      .post(`${process.env.NEXT_PUBLIC_AUTH}auth/register-user-by-admin`, {
        name: email,
        email,
      })
      .then((response) => response.data)
    return newUser
  }, [])

  const logout = useCallback(async () => {
    try {
      const logoutResponse = await api
        .post(`${process.env.NEXT_PUBLIC_AUTH}auth/logout`, {})
        .then((response) => response.data)

      if (logoutResponse === true || logoutResponse.statusCode === 500) {
        setUserOnMemory(null)
        setUser(null)
        document.cookie = `token=; path=/; expires=${new Date().toUTCString()}`
        push('/auth/signin')
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      setUserOnMemory(null)
      setUser(null)
      document.cookie = `token=; path=/; expires=${new Date().toUTCString()}`
      push('/auth/signin')
    }
  }, [push, setUserOnMemory])

  useEffect(() => {
    const currentUser = getUser()

    if (currentUser) {
      setUser(currentUser)
    }
  }, [getUser])

  const value = useMemo(
    () => ({ user, setUser, login, logout, register, createUseByAdmin }),
    [user, login, logout, register, createUseByAdmin]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined || context === null) {
    throw new Error('useUserContext must be used within a AuthProvider')
  }

  const { user, setUser, login, logout, register, createUseByAdmin } = context

  return { user, setUser, login, logout, register, createUseByAdmin }
}

export default AuthProvider
