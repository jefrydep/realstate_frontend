"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Block } from "../interfaces/block";
import BlockItem from "./BlockItem";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const blockColumn: ColumnDef<Block>[] = [
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
      const block = row.original.block;

      return <BlockItem block={block}/>
    }
  },
];
