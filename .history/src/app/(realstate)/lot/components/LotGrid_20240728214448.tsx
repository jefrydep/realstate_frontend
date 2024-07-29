import React, { useEffect, useState } from 'react'
import { DataTable } from '../../block/components/data-table'
import { lotColumn } from './LotColumns'
import { useIdProjectStore } from '@/store/idProject/idProject.store';
import { LotResponse } from '../interfaces/lot';
import axios from 'axios';

export default function LotGrid() {
    const idProject = useIdProjectStore((state) => state.idProject);
    const blockAdded = useIdProjectStore((state) => state.blockAdded);
    const setBlockAdded = useIdProjectStore((state) => state.setBlockAdded);
    const [dataLot, setDataLot] = useState<LotResponse[]>([])
    


    const getLot = async (idProject:string)=>{
        const api_url = `${process.env.NEXT_PUBLIC_API_URL}lot/project/${idProject}`; 
        const res = await axios.get(api_url)
        const{data}=res;
        setDataLot(data)
    }
useEffect(() => {
   getLot(idProject)
}, [idProject])

useEffect(() => {
  if(blockAdded){
    getLot(idProject);
    setBlockAdded(false)
  }
}, [blockAdded,idProject,setBlockAdded])



  return (
    < > 
    <DataTable columns={lotColumn} data={dataLot}/>
    </ >
  )
}
