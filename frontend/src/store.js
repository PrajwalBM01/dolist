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

const taskStore = create((set)=>({
    list:[],
    setList:(value)=> set({list:value}),
    addToList:(newtask)=> set((state) => ({ list: [...state.list, newtask] })),
    deleteOneTask:(value)=>set((state)=>({
        list: state.list.filter(item => item._id != value)
    })),
    updateTask:(value)=>set((state)=>({
        list: state.list.map(item=>
             item._id === value._id ? value : item
        )
    }))
}))

export { useStore, globalStore, taskStore }