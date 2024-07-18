import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import CustomCard from "../components/CustomCard";
  
  const projects = [
    {
      title: "Tariachi",
      description: "Tariachi , Proyecto ubicado en la salida el Cusco",
    },
    {
      title: "Tariachi",
      description: "Tariachi , Proyecto ubicado en la salida el Cusco",
    },
    {
      title: "Tariachi",
      description: "Tariachi , Proyecto ubicado en la salida el Cusco",
    },
    {
      title: "Tariachi",
      description: "Tariachi , Proyecto ubicado en la salida el Cusco",
    },
    {
      title: "Tariachi",
      description: "Tariachi , Proyecto ubicado en la salida el Cusco",
    },
    {
      title: "Tariachi",
      description: "Tariachi , Proyecto ubicado en la salida el Cusco",
    },
    {
      title: "Tariachi",
      description: "Tariachi , Proyecto ubicado en la salida el Cusco",
    },
  ];
  
  async function getData() {
    const res = await fetch('http://localhost:3000/api/project/findAll')
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  export default  async function ProjectPage() {
  const data = await getData()
  console.log(data)
  
    return (
      <div className="flex flex-col  sm:grid  sm:grid-cols-2 lg:grid-cols-3 ">
        {data.map((data:any,index:number) => (
          <div className="flex justify-center  " key={index}>
            <CustomCard  description={data.description} title={data.nameProject} availableLots={data.availableLots} soldLots={data.soldLots} totalLots={data.totalLots} />
          </div>
        ))}
   
      
      </div>
    );
  }
  