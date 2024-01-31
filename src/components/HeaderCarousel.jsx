import React from 'react'
import CarouselCard from './CarouselCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const HeaderCarousel = () => {
  const data = [
    {
      title: [
        "DOG",
        "WALKING"
      ],
      imgsrc: "dogwalking.avif"
    },
    {
      title: [
        "DOG",
        "BOARDING"
      ],
      imgsrc: "dogboarding.avif"
    },
    {
      title: [
        "DOG",
        "ACTIVITY1"
      ],
      imgsrc: "/dogjumping.avif"
    },
    {
      title: [
        "DOG",
        "ACTIVITY2"
      ],
      imgsrc: "/dogfood.avif"
    }
  ]

  return (
    <>

      <div className="relative -top-4 lg:-top-12 mx-auto w-auto md:-top-12  h-auto grid place-content-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-1/3 mx-auto lg:w-1/2"
          >
            <CarouselPrevious />
            <CarouselContent>
              {data.map((element) => (
                <CarouselItem key={element.title} className="lg:basis-1/2 mx-auto">
                  <div className="w-auto mx-auto grid place-content-center">
                    <CarouselCard title={element.title} imgsrc={element.imgsrc}></CarouselCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
    </>
  )
}

export default HeaderCarousel
