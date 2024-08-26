import type { Metadata } from 'next'
import { BreadcurmbData } from "@/@fakeDB/db";
import BreadcurmbComponent from "@/components/breadcrumb-component";
import DealsIn from "@/components/DealsIn";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import PaymentMode from "@/components/payment-mode";
import ServicesProvider from "@/components/service-provider";
import ServicesOffered from "@/components/services-offered";
import TyresSoldDealer from "@/components/tyres-sold";


type PageProps = {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}

export const metadata: Metadata = {
    title: "Tyre-Plex",
    description: 'Tyre-Plex Assignment'
  }



const TyreDealers=({params}:PageProps)=>{
    const removeDash = params.slug?.replace(/-/g, " ");
    return(
        <main className="bg-[#f5f6f9]">
        <Header/>
        <div className="container">
            <ServicesProvider TyreDealersName={removeDash}/>

            {/* Deals in */}
            <DealsIn/>

            {/* Services offered by this dealer */}
            <ServicesOffered/>

            {/* Tyres Sold by this Dealer */}
            <TyresSoldDealer/>

            <BreadcurmbComponent data={BreadcurmbData}/>

            {/* Payment Mode */}
            <PaymentMode/>

            {/* Footer section */}
            <Footer/>
        </div>
        </main>
    )
}
export default TyreDealers
