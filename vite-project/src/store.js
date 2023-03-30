import { create } from "zustand";

export const useStore = create((set) => ({
  orange: 0,
  violet: 0,
  increaseOrange: () => set(({ orange }) => ({ orange: orange + 1 })),
  decreaseOrange: () => set(({ orange }) => ({ orange: orange - 1 })),
  increaseViolet: () => set(({ violet }) => ({ violet: violet + 1 })),
  decreaseViolet: () => set(({ violet }) => ({ violet: violet - 1 })),
  removeAll: () => set({ orange: 0, violet: 0 }),
  removeOrange: () => set({ orange: 0 }),
  removeViolet: () => set({ violet: 0 }),
}));
