import { create } from "zustand";

type utilStateType = {
  isMobile: boolean;
  setIsMobile: (_isMobile: boolean) => void;
};

const utilState = create<utilStateType>((set) => ({
  isMobile: false,
  setIsMobile: (_isMobile: boolean) =>
    set((state: utilStateType) => ({ ...state, isMobile: _isMobile })),
}));

export default utilState;