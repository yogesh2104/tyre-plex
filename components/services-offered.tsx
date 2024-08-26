import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button"


const ServicesOffered=()=>{
    return(
        <main className="mt-3 border bg-white rounded">
            <p className="font-semibold px-3 pt-3">Services offered by this dealer</p>
            <div className="p-3 flex flex-col gap-5 md:flex-row md:flex-wrap">
                <Card className="w-full md:w-72">
                    <CardHeader className="flex justify-center items-center">
                        <img height={150} width={150} src='/wheel-alignment-bal.webp' className="mt-3 rounded"/>
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                        <p className="mb-4 font-semibold">Wheel Balancing</p>
                        <Button variant="destructive" size="sm">Book Now</Button>
                    </CardContent>
                </Card>

                <Card className="w-full md:w-72">
                    <CardHeader className="flex justify-center items-center">
                        <img src='/wheel-alignment.webp' height={150} width={150} className="mt-3 rounded" />
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                        <p className="mb-4 font-semibold">Wheel Alignment</p>
                        <Button variant="destructive" size="sm">Book Now</Button>
                    </CardContent>
                </Card>
            </div>
        </main>

    )
}
export default ServicesOffered