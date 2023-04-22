import { create } from "zustand";

interface State {
  customerChoicesCount: number;
  increaseChoicesCount: (by: number) => void;
  resetChoicesCount: () => void;
}

// Samle code for using a store with Zustand
export const useStore = create<State>()((set) => ({
  customerChoicesCount: 0,
  increaseChoicesCount: (by) =>
    set((state) => ({ customerChoicesCount: state.customerChoicesCount + by })),
  resetChoicesCount: () =>
    set(() => ({
      customerChoicesCount: 0,
    })),
}));
