"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { blockColumn } from "./BlockColumns";
import { useIdProjectStore } from "@/store/idProject/idProject.store";
import axios from "axios";
import { Block } from "../interfaces/block";

export default function BlockGrid() {
  const idProject = useIdProjectStore((state) => state.idProject);
  const isBlockAdded = useIdProjectStore((state)=> state.blockAdded)
  const [dataBlock, setDataBlock] = useState<Block[]>([]);
   
  const getBlock = async (idProject: string) => {
    const api_url = `${process.env.NEXT_PUBLIC_API_URL}block/project/${idProject}`;
    const res = await axios.get<Block[]>(api_url);
    const { data } = res;
    setDataBlock(data);
  
  };
  useEffect(() => {
 
    getBlock(idProject);
  }, [idProject]);

  return (
    <>
      <DataTable columns={blockColumn} data={dataBlock} />
    </>
  );
}
