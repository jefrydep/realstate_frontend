import { ContentLayout } from "@/components/admin-panel/content-layout";
import React from "react";
import { DataTable } from "./components/data-table";
import { blockColumn } from "./components/BlockColumns";
import { Button } from "@/components/ui/button";

async function getBlock() {
  const api_url = `${process.env.NEXT_PUBLIC_API_URL}block/project/${id_project}`
  const res = await fetch(api_url,{
    cache:"no-cache"
  })
  if(!res.ok){
    throw new Error ("Failed to fech data")
  }
  return res.json();
  
}
type ProjectPageProps = {
  params: { projectId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export default function BlockPage({ params, searchParams }: ProjectPageProps) {
  
const {projectId}= params
console.log(projectId)
  
  const data: any = [];
  return (
    <ContentLayout title="Manzanas">
      <div className="flex mb-3  after:justify-between items-center justify-items-center  content-center ">
        <h4 className="  font-bold">Listado de manzanas</h4>
        <Button>+</Button>
      </div>
      <DataTable columns={blockColumn} data={data} />
    </ContentLayout>
  );
}
