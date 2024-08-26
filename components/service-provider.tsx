"use client"
import { Clock, MapPin, ShieldCheck, Star } from "lucide-react"
import { RateComponent } from "./rate"
import { Button } from "./ui/button"
import ReviewCarousel from "./review-carousel"
import ImageSlider from "./ImageSlider"

const ServicesProvider = ({TyreDealersName}:{TyreDealersName:string})=>{
    return(
        <div className="mt-3 border bg-white p-3 rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">

                <div>
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <h1 className="font-bold text-xl uppercase">{TyreDealersName}</h1>
                        <p className="flex text-[#4CA72C] text-xs items-center">
                            <ShieldCheck className="h-4 w-4 fill-[#4CA72C] text-white mr-1" />
                            Verified
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-xs mt-4">
                        <p className="bg-[#4CA72C] px-1 rounded text-white ">4.9</p>
                        <div className="flex items-center mt-1 md:mt-0">
                            <Star className="h-5 w-6 fill-yellow-400 text-yellow-400"/>
                            <Star className="h-5 w-6 fill-yellow-400 text-yellow-400"/>
                            <Star className="h-5 w-6 fill-yellow-400 text-yellow-400"/>
                            <Star className="h-5 w-6 fill-yellow-400 text-yellow-400"/>
                            <Star className="h-5 w-6 fill-yellow-400 text-yellow-400"/>
                        </div>
                        <div className="underline mt-1 md:mt-0">2278 Reviews</div>
                        <div className="mt-2 md:mt-0">
                            <RateComponent provider={TyreDealersName} imgUrl={"/dealers/1.jpg"}/>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p className="flex text-sm"><MapPin className="h-8 w-8 mr-4"/> 
                            <span>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014.</span>
                        </p>
                        <p className="flex text-sm text-muted-foreground mt-2"><Clock className="h-5 w-5 mr-4"/> 
                            <span>Open - Monday to Sunday - 10:00AM to 8:00PM.</span>
                        </p>
                    </div>
                    <Button variant="outline" size="lg" className="mt-5 text-destructive border-destructive hover:bg-destructive hover:text-white">
                        Get Directions
                    </Button>
                </div>

                <div className="mt-4 md:mt-0">
                    <ImageSlider/>
                </div>

            </div>

            <div className="mt-10 mb-4">
                <p className="font-semibold">2278 Google Reviews</p>
                <ReviewCarousel/>
            </div>
        </div>
    )
}

export default ServicesProvider