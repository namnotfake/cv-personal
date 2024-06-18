import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

type keepAlignSateType = {
  isKeepAlign: boolean,
  setIsKeepAlign: (_isKeepAlign: boolean) => void;
};

const keepAlign = create<keepAlignSateType>()(
    persist(
      (set) => ({
        isKeepAlign: false,
        setIsKeepAlign: (_isKeepAlign: boolean) => {
            set((state) => ({...state, isKeepAlign: _isKeepAlign}))
        },
      }),
      {
        name: "keep_align",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );

export default keepAlign;