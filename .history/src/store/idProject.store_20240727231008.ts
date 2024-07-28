import { create } from "zustand";
import { persist } from "zustand/middleware";
interface idProjectStore {
  idProject: string;
  nameProject:string;
  setIdProject: (idProject: string) => void;
  setNameProject:(nameProject:string)=> void;
}
export const useIdProjectStore = create<idProjectStore>()(
  persist(
    (set) => ({
    nameProject:"",
      idProject: "",
      setIdProject: (idProject) => set({ idProject }),
      setNameProject: (nameProject) => set({ nameProject }),
    }),
    { name: "ide_eje-storage" }
  )
);