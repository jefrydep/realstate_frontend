"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Block = {
  id: string;
  block: string;
  description: string;
  project: string;
};

export const blockColumn: ColumnDef<Block>[] = [
  {
    // accessorKey: "status",
    header: "Nro",
  },
  {
    accessorKey: "block",
    header: "Manzana",
  },
  {
    accessorKey: "project",
    header: "Proyecto",
  },
  {
    // accessorKey: "project",
    header: "Acciones",
  },
];
