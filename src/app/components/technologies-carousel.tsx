"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function TechnologiesCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let scrollAmount = 0;
        const scrollStep = 1; // Pixels to scroll per frame
        const scrollInterval = 20; // Time between frames in ms

        const interval = setInterval(() => {
            scrollAmount += scrollStep;
            carousel.scrollLeft += scrollStep;

            // Reset scroll when reaching the end
            if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
                carousel.scrollLeft = 0;
                scrollAmount = 0;
            }
        }, scrollInterval);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div 
            id="technologies" 
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 max-w-2xl justify-start items-center py-4 scrollbar-hidden">
            <div className="pl-8"/>
            {/* Python */}
            <div className="flex flex-col items-center min-w-[100px]">
                <Image
                    src="https://www.svgrepo.com/show/452091/python.svg"
                    alt="Python"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">Python</span>
            </div>
            {/* PostgreSQL */}
            <div className="flex flex-col items-center min-w-[100px]">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                    alt="PostgreSQL"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">PostgreSQL</span>
            </div>
            {/* DSPy */}
            <div className="flex flex-col items-center min-w-[100px]">
                <Image
                    src="https://dspy.ai/static/img/dspy_logo.png"
                    alt="DSPy"
                    width={120} // Specify width in pixels
                    height={120} // Specify height in pixels
                    className="object-contain"
                />
                <span className="text-sm font-medium pt-6 ">DSPy</span>
            </div>
            {/* Databricks */}
            <div className="flex flex-col items-center min-w-[100px]">
                <Image
                    src="https://1000logos.net/wp-content/uploads/2025/01/Databricks-Emblem.png"
                    alt="Databricks"
                    width={120} // Specify width in pixels
                    height={120} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">Databricks</span>
            </div>
            {/* FastAPI */}
            <div className="flex flex-col items-center min-w-[100px]">
                <Image
                    src="https://www.svgrepo.com/show/330413/fastapi.svg"
                    alt="FastAPI"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">FastAPI</span>
            </div>
            {/* Flask */}
            <div className="flex flex-col items-center min-w-[100px]">
                <Image
                    src="https://www.svgrepo.com/show/508915/flask.svg"
                    alt="Flask"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">Flask</span>
            </div>
            {/* Next.js */}
            <div className="flex flex-col items-center min-w-[100px]">
                <Image
                    src="https://www.svgrepo.com/show/306466/next-dot-js.svg"
                    alt="Next.js"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">Next.js</span>
            </div>
            <div className="pr-6"/>
        </div>
    );
}