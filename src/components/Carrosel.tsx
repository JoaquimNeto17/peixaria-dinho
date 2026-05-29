"use client"

import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carrosselImagens = [
    {src:"/carrossel/1.png",alt:"Banner 1"},
    {src:"/carrossel/2.png",alt:"Banner 2"},
    {src:"/carrossel/3.png",alt:"Banner 3"},
]

export default function Carrossel() {
  return (
    <section className="w-full flex justify-center">
        <Carousel className="w-full relative">
            <CarouselContent>
                {carrosselImagens.map((imagem,index)=>(
                    <CarouselItem key={index}>
                        <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
                            <Image
                            src={imagem.src}
                            alt={imagem.alt}
                            fill
                            className="object-cover"
                            priority={index===0}

                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200"/>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200"/>
        </Carousel>
    </section>
  )
}
