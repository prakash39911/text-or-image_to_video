import { create } from "zustand";

type storeType = {
  videosArray: EachVideo[];
  setVideoArray: (videoArray: EachVideo[]) => void;
  updateVideoArray: (newVideo: EachVideo) => void;
  removeVideo: (id: string) => void;
  reset: () => void;
};

const initialState = {
  videosArray: [],
};

export const videoStore = create<storeType>()((set) => ({
  ...initialState,
  setVideoArray: (videoArray) => set({ videosArray: videoArray }),
  updateVideoArray: (newVideo) =>
    set((state) => ({
      videosArray: [newVideo, ...state.videosArray],
    })),
  removeVideo: (id) =>
    set((state) => ({
      videosArray: state.videosArray.filter((eachObj) => {
        if (eachObj.id !== id) {
          return eachObj;
        }
      }),
    })),
  reset: () => set(initialState),
}));
