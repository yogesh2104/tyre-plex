import { DealsInData } from "@/@fakeDB/db"

const DealsIn=()=>{
    return(
        <main className="mt-3 border bg-white rounded">
            <p className="font-semibold px-3 pt-3">Deals in</p>
            
            <div className="flex flex-col">
                <ul className="flex overflow-x-auto hide-scrollbar gap-4 p-4">
                    {DealsInData.map((deal,ix)=>{
                        return(
                            <li key={ix} className="border rounded p-3 item relative my-0 flex-shrink-0 w-[16.66%]">
                                <div className="brand-img flex justify-center">
                                    <span className={`logo ${deal.cssClass}`}/>
                                </div>
                                <div className="text-center text-xs">{deal.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}

export default DealsIn