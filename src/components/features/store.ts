import { create } from "zustand";

type FeaturesStore = {
  inViewFeature: string | null;
  setInViewFeature: (feature: string | null) => void;
};

export const useFeatureStore = create<FeaturesStore>((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature: string | null) => set({ inViewFeature: feature }),
}));
