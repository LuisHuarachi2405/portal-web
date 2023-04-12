import { createContext, Dispatch, SetStateAction } from 'react'

interface AuthContextProps {
  user: Record<string, unknown> | null
  setUser: Dispatch<SetStateAction<Record<string, unknown> | null>>
  login: (email: string, password: string) => Promise<Record<string, any>>
  logout: () => Promise<void>
  register: (email: string, password: string) => Promise<Record<string, any>>
  createUseByAdmin: (email: string) => Promise<Record<string, any>>
}

const AuthContext = createContext<AuthContextProps | null>(null)

export default AuthContext
