"use client";
import { Button } from "@/components/ui/button";
import { Block } from "../interfaces/block";
import { Pencil } from "lucide-react";

interface BlockItemProps {
  block: Block;
}
export default function BlockItem({ block }: BlockItemProps) {
  console.log(block);
  return (
    <Button className="ml-4 p-2">
      <Pencil size={18} />
    </Button>
  );
}
