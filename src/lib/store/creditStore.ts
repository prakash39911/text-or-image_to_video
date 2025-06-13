import { create } from "zustand";

type creditStoreType = {
  credits: number;
  setCredit: (credit: number) => void;
  addCredits: () => void;
  removeCredits: () => void;
  reset: () => void;
};

const initialState = {
  credits: 0,
};

export const creditStore = create<creditStoreType>()((set) => ({
  ...initialState,
  setCredit: (credit) => set({ credits: credit }),
  addCredits: () => set((state) => ({ credits: state.credits + 1 })),
  removeCredits: () => set((state) => ({ credits: state.credits - 1 })),
  reset: () => set(initialState),
}));
