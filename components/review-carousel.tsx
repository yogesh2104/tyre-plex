
import { GoogleReview } from "@/@fakeDB/db"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card,CardContent,CardHeader } from "@/components/ui/card"
import { getAvatarInitials } from "@/lib/utils"

const ReviewCarousel=()=>{
    return(
        <main className="flex bg-white mt-2">
        <div className="flex overflow-x-auto hide-scrollbar gap-4">
          {GoogleReview.map((review, index) => (
            <Card key={index} className="min-w-[400px]">
                <CardHeader>
                    <div className="flex gap-3 items-center mt-2">
                        <Avatar>
                            <AvatarFallback>{getAvatarInitials(review.name)}</AvatarFallback>
                        </Avatar>
                        <p>{review.name}</p>
                    </div> 
                </CardHeader>
                <CardContent>
                    <p title={review.message} className="mb-3 overflow-hidden text-ellipsis line-clamp-3 min-h-[63px] text-sm">{review.message}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </main>
    )
}

export default ReviewCarousel