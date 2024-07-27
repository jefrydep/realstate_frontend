import { ContentLayout } from "@/components/admin-panel/content-layout";
import React from "react";
import { DataTable } from "./components/data-table";
import { blockColumn } from "./components/BlockColumns";
import { Button } from "@/components/ui/button";

export default function BlockPage() {
  const data: any = [];
  return (
    <ContentLayout title="Manzanas">
      <div className="flex mb-3  justify-between items-center justify-items-center  content-center ">
        <h4 className="  font-bold">Listado de manzanas</h4>
        <Button>+</Button>
      </div>
      <DataTable columns={blockColumn} data={data} />
    </ContentLayout>
  );
}
