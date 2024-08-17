"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { blockColumn } from "./BlockColumns";
import { useIdProjectStore } from "@/store/idProject/idProject.store";
import axios from "axios";
import { Block } from "../interfaces/block";
import { getSession, useSession } from "next-auth/react";

export default function BlockGrid() {
  const { data: session } = useSession();
  console.log(session);
  const idProject = useIdProjectStore((state) => state.idProject);
  const blockAdded = useIdProjectStore((state) => state.blockAdded);
  const setBlockAdded = useIdProjectStore((state) => state.setBlockAdded);
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

  useEffect(() => {
    if (blockAdded) {
      getBlock(idProject);
      setBlockAdded(false);
    }
  }, [blockAdded, idProject, setBlockAdded]);
  
  return (
    <>
      <DataTable columns={blockColumn} data={dataBlock} />
    </>
  );
}
