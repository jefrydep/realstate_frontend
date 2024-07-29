"use client";
import { Block } from "../interfaces/block";

interface BlockItemProps {
  block: Block;
}
export default function BlockItem({ block }: BlockItemProps) {
  console.log(block);
  return <div>BlockItem</div>;
}
