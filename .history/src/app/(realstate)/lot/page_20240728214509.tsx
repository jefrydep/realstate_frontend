import { ContentLayout } from "@/components/admin-panel/content-layout";
import React from "react";
import LotGrid from "./components/LotGrid";

export default function LotPage() {
  return (
    <ContentLayout>
      <div className="flex mb-3  justify-between items-center justify-items-center  content-center ">
        <h4 className="  font-bold ">Listado de manzanas</h4>
        {/* <CreateBlockForm /> */}
      </div>
      <LotGrid/>
    </ContentLayout>
  );
}
