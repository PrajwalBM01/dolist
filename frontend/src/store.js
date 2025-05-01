import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
    persist((set) => ({
        isAuth: false,
        setAuth: (value) => set({ isAuth: value })
    })),
)

export { useStore }