import { Button } from "@/components/ui/button";

import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
interface Props {
  title: string;
  description: string;
  totalLots: number;
  availableLots: number;
  soldLots: number;
}
const CustomCard = ({
  title,
  description,
  totalLots,
  availableLots,
  soldLots,
}: Props) => {
  // const [progress, setProgress] = React.useState(100)

  // React.useEffect(() => {
  //   const timer = setTimeout(() => setProgress(66), 500)
  //   return () => clearTimeout(timer)
  // }, [])
  return (
    <Card className="w-full sm:w-[500px] m-2">
      <CardHeader>
        <CardTitle className="text-primary 	 uppercase ">{title}</CardTitle>
        <CardDescription className="">{description}</CardDescription>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <span className="mr-7">Total de Lotes:</span>
          <b>{totalLots}</b>
        </div>
        <div className="flex justify-between">
          <span className="mr-7"> Lotes Disponibles:</span>
          <b>{availableLots}</b>
        </div>
        <div className="flex justify-between">
          <span className="mr-7"> Lotes Vendidos:</span>
          <b>{soldLots} </b>
        </div>
        <div className="mt-6">
          <Progress value={soldLots} className="w-[100%]" />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between">
        <Button className="mt-4 w-full">Seleccionar</Button>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
