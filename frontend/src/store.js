import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
    persist((set) => ({
        isAuth: false,
        setAuth: (value) => set({ isAuth: value })
    })),
)

const globalStore = create((set)=>({
    splitscreen:false,
    Showcomponent:null,
    setShowcomponent:(value)=>set({Showcomponent:value}),
    setSplitscreen:(value)=> set({splitscreen:value})
}))

export { useStore,globalStore }