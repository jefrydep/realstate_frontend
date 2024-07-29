import { create } from "zustand";
import { persist } from "zustand/middleware";
interface idProjectStore {
  idProject: string;
  nameProject: string;
  setIdProject: (idProject: string) => void;
  setNameProject: (nameProject: string) => void;
  blockAdded: boolean;
  setBlockAdded: (blockAdded: boolean) => void;
}
export const useIdProjectStore = create<idProjectStore>()(
  persist(
    (set) => ({
      nameProject: "",
      idProject: "",
      setIdProject: (idProject) => set({ idProject }),
      setNameProject: (nameProject) => set({ nameProject }),

      blockAdded: false,
      setBlockAdded: (blockAdded) => ({ blockAdded }),
    }),
    { name: "ide_eje-storage" }
  )
);
