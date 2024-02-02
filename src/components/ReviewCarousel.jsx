import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ReviewCard from './ReviewCard'

const ReviewCarousel = () => {
    const data = [
        {
            initial: "A",
            review: "Lorem ipsum dolor sit amet."
        },
        {
            initial: "B",
            review: "abcdefghijklmnopqrstuvwxyz"
        },
        {
            initial: "C",
            review: "qwewrqwelnnnrnnr"
        },
        {
            initial: "D",
            review: "randomttext"
        }
    ]

    return (
        <div className='w-36 mb-auto md:w-96 lg:w-1/2 lg:mx-96 lg:h-1/2'> 
            <Carousel>
                <CarouselPrevious />
                <CarouselContent>
                    {data.map((element) => (
                        <CarouselItem key={element.review}>
                            <ReviewCard initial={element.initial} review={element.review}/>       
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default ReviewCarousel;