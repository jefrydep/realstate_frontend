"use client";
import { cn } from "@/lib/utils";

import { useIdProjectStore } from "@/store/idProject.store";
 
 
import   { useEffect } from "react";

export default function SelectProjectItem() {
  const nameProject = useIdProjectStore((state) => state.nameProject);

//   useEffect(() => {}, [nameProject]);

  return nameProject;
}
