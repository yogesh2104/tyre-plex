import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react";
import React from "react";

interface PropsType{
    data:{
        name:string,
        url:string
    }[]
}

const BreadcurmbComponent=({data}:PropsType)=>{
    return(
        <Breadcrumb>
            <BreadcrumbList>
                {data.map((d, i) => {
                    const isLast = i === data.length - 1;
                    return (
                        <React.Fragment key={d.name}>
                        <BreadcrumbItem className="text-sm">
                            <BreadcrumbLink href={d.url}>{d.name}</BreadcrumbLink>
                        </BreadcrumbItem>
                        {!isLast && <SlashIcon className="h-3 w-3 rotate-[-9deg]" />}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadcurmbComponent