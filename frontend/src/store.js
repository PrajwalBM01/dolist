import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1); 
tomorrow.setUTCHours(0, 0, 0, 0); 
const isoString = tomorrow.toISOString();

const useStore = create(
    persist((set) => ({
        isAuth: false,
        setAuth: (value) => set({ isAuth: value })
    })),
)

const globalStore = create((set)=>({
    priority:4,
    datetime:isoString,
    setPriority:(value)=> set({priority:value}),
    setDate:(value)=> set({datetime:value})
}))

export { useStore, globalStore }