import { create } from "zustand";
import { persist } from "zustand/middleware";
interface idProjectStore {
  idProject: string;
  setIdProject: (idProject: string) => void;
}
export const useIdProjectStore = create<idProjectStore>()(
  persist(
    (set) => ({
      idProject: "",
      setIdProject: (idProject) => set({ idProject }),
    }),
    { name: "ide_eje-storage" }
  )
);