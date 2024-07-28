import React from 'react'
import { DataTable } from './data-table'
import { blockColumn } from './BlockColumns'

export default function BlockGrid() {
  return (
    < >
          <DataTable columns={blockColumn} data={[]} />
    </ >
  )
}
