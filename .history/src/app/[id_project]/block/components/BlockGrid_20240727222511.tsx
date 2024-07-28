import React from 'react'
import { DataTable } from './data-table'
import { blockColumn } from './BlockColumns'
import { useIdProjectStore } from '@/store/idProject.store'

export default function BlockGrid() {
const idProject = useIdProjectStore((state)=>state.idProject)
console.log(idProject)


  return (
    < >
          <DataTable columns={blockColumn} data={[]} />
    </ >
  )
}
