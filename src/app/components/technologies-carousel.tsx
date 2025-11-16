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
            className="flex overflow-x-auto gap-6 max-w-xs md:max-w-2xl justify-start items-center mb-6 scrollbar-hidden">
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
                    className="object-contain mt-4"
                />
                <span className="text-sm font-medium pt-6">DSPy</span>
            </div>
            {/* FastAPI */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://www.svgrepo.com/show/330413/fastapi.svg"
                    alt="FastAPI"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">FastAPI</span>
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
                <span className="mt-2 text-sm font-medium pt-2">Databricks</span>
            </div>
            {/* Next.js */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://www.svgrepo.com/show/306466/next-dot-js.svg"
                    alt="Next.js"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">Next.js</span>
            </div>
            {/* Flask */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://www.svgrepo.com/show/508915/flask.svg"
                    alt="Flask"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">Flask</span>
            </div>
            {/* Scikit-learn */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
                    alt="Scikit-learn"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain mt-4"
                />
                <span className="mt-2 text-sm font-medium pt-4">Scikit-learn</span>
            </div>
            {/* React.js */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://www.svgrepo.com/show/452092/react.svg"
                    alt="React.js"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">React.js</span>
            </div>
            {/* AWS */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png?20170912170050"
                    alt="AWS"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain mt-6"
                />
                <span className="mt-2 text-sm font-medium pt-1">AWS</span>
            </div>
            {/* .NET */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://www.svgrepo.com/show/473592/dotnet.svg"
                    alt=".NET"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">.NET</span>
            </div>
            {/* C# */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/512px-Logo_C_sharp.svg.png?20221121173824"
                    alt="C#"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">C#</span>
            </div>
            {/* MS Azure */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/374px-Microsoft_Azure_Logo.svg.png?20210815110837"
                    alt="MS Azure"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain mt-4"
                />
                <span className="mt-2 text-sm font-medium pt-7">MS Azure</span>
            </div>
            {/* Kubernetes */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1234px-Kubernetes_logo_without_workmark.svg.png?20190926210707"
                    alt="Kubernetes"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">Kubernetes</span>
            </div>
            {/* Docker */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg"
                    alt="Docker"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">Docker</span>
            </div>
            {/* Grafana */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/1175px-Grafana_logo.svg.png"
                    alt="Grafana"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">Grafana</span>
            </div>
            {/* Datadog */}
            <div className="flex flex-col shrink items-center min-w-[100px]">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Datadog_logo.svg/1200px-Datadog_logo.svg.png"
                    alt="Datadog"
                    width={64} // Specify width in pixels
                    height={64} // Specify height in pixels
                    className="object-contain"
                />
                <span className="mt-2 text-sm font-medium">Datadog</span>
            </div>
            <div className="pr-6"/>
        </div>
    );
}