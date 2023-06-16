import { create } from 'zustand'

interface TestState {
    bears: number
}
const useBearStore = create<TestState>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))
