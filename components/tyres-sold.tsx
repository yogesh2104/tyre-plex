"use client";
import { ChevronUp } from "lucide-react";
import { Filter } from "./filter";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FilterBy, MostPopular, VehicleType } from "@/@fakeDB/db";
import { Input } from "./ui/input";
import ProductItem from '@/components/product-card';

const TyresSoldDealer = () => {
  const [openAdvanced, setOpenAdvanced] = useState(false);

  const [visibleItems, setVisibleItems] = useState(8);

  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ,22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

  const handleViewMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8)
  };
  
  return (
    <main className="mt-4 rounded ">
      <p className="font-semibold mb-4 mt-3">Tyres Sold by this Dealer</p>
      <div className="grid gap-4">
        <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-3 md:gap-5">
          <div className="flex gap-3 md:gap-5">
            <Filter data={FilterBy} text="Filter By" />
            <Filter data={MostPopular} text="Most Popular" />
          </div>
          <div className="flex justify-end sm:mt-0">
            <Button
              variant="ghost"
              className="underline"
              onClick={() => setOpenAdvanced(!openAdvanced)}
            >
              Advanced
              <ChevronUp
                className={cn(
                  `h-4 w-4 ml-1 transition-transform`,
                  openAdvanced ? "rotate-180" : "rotate-0"
                )}
              />
            </Button>
          </div>
        </div>
        {openAdvanced && (
          <div className="flex flex-wrap justify-end items-center gap-3 md:gap-5 mt-4">
            <Input
              placeholder="For Ex: DL01AB1111"
              className="w-40 md:w-48"
            />
            <Filter data={VehicleType} text="Vehicle Type" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
        {products.slice(0, visibleItems).map((i) => (
          <ProductItem key={i} />
        ))}
      </div>
      {visibleItems < products.length && (
        <div className="text-center mt-5 mb-5">
          <Button variant="outline" onClick={handleViewMore}>View More</Button>
        </div>
      )}
    </main>
  );
};

export default TyresSoldDealer;
