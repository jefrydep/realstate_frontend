"use client";
import { cn } from "@/lib/utils";

import { useIdProjectStore } from "@/store/idProject.store";
import { PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

export default function SelectProjectItem() {
  const nameProject = useIdProjectStore((state) => state.nameProject);

  useEffect(() => {}, [nameProject]);

  return nameProject;
}
