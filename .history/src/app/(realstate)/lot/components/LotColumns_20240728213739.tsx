"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LotResponse } from "../interfaces/lot";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const lotColumn: ColumnDef<LotResponse>[] = [
  {
    // accessorKey: "status",
    header: "Nro",
    cell: ({ row }) => <div>{row.index + 1}</div>,
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
    cell: ({row}) => {
      const block = row.original;

    //   return <BlockItem block={block}/>
    }
  },
];
