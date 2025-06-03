import { create } from "zustand";

type storeType = {
  videosArray: EachVideo[];
  setVideoArray: (newVideoArray: EachVideo[]) => void;
  reset: () => void;
};

const initialState = {
  videosArray: [],
};

export const videoStore = create<storeType>()((set) => ({
  ...initialState,
  setVideoArray: (newVideosArray) => set({ videosArray: newVideosArray }),
  reset: () => set(initialState),
}));
