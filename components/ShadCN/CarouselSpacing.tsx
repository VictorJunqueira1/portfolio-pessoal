"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Project } from "@/app/utils/projects"
import Autoplay from "embla-carousel-autoplay"


type Props = {
    projects: Project[]
}

export function CarouselSpacing({ projects }: Props) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel className="w-full max-w-xl">
            <CarouselContent className="-ml-1">
                {projects.map((project, index) => (
                    <CarouselItem key={index} className="pl-1">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                                    <span className="text-4xl font-semibold">{project.name}</span>
                                    <img className="inset-0 absolute w-full h-full rounded-md object-cover" src={project.image} alt="" width={500} height={500}/>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}