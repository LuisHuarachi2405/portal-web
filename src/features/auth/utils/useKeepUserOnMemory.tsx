import create from 'zustand'
import { persist } from 'zustand/middleware'

export type UseKeepUserOnMemory = {
  user: Record<string, unknown> | null
  setUser: (user: Record<string, unknown> | null) => void
  getUser: () => Record<string, unknown> | null
}

export const useKeepUserOnMemory = create(
  persist<UseKeepUserOnMemory>(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
      getUser: () => get().user,
    }),
    {
      name: 'user-data-storage',
    }
  )
)
