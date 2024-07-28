"use client"
import { ContentLayout } from "@/components/admin-panel/content-layout";
import React from "react";
import { DataTable } from "./components/data-table";
import { blockColumn } from "./components/BlockColumns";
import { Button } from "@/components/ui/button";
 

// async function getBlock(idProject:string) {



//   const api_url = `${process.env.NEXT_PUBLIC_API_URL}block/project/${idProject}`
//   const res = await fetch(api_url,{
//     cache:"no-cache"
//   })
//   if(!res.ok){
//     throw new Error ("Failed to fech data")
//   }
//   return res.json();
  
// }
 
 
export default function BlockPage(  ) {
   
  return (
    <ContentLayout title="Manzanas">
      <div className="flex mb-3  after:justify-between items-center justify-items-center  content-center ">
        <h4 className="  font-bold">Listado de manzanas</h4>
        <Button>+</Button>
      </div>
  
    </ContentLayout>
  );
}
