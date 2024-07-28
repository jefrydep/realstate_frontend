"use client"
import React from 'react'
import { DataTable } from './data-table'
import { blockColumn } from './BlockColumns'
import { useIdProjectStore } from '@/store/idProject.store'
import axios from 'axios'

export default function BlockGrid() {
const idProject = useIdProjectStore((state)=>state.idProject)
console.log(idProject)
const getBlock =  async (idProject:string)=> {
 const api_url = `${process.env.NEXT_PUBLIC_API_URL}block/project/${idProject}`
const  res = await axios.get(api_url)
const {data}= res;
console.log(data)


}


  return (
    < >
          <DataTable columns={blockColumn} data={[]} />
    </ >
  )
}
