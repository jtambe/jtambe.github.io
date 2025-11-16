import TechnologiesCarousel from "./components/technologies-carousel";

export default function Home() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 max-w-4xl">
                    {/* Face image */}
                    <img
                        src="/path-to-your-image.jpg"
                        alt="Jayesh Tambe"
                        className="w-32 h-32 rounded-full object-cover shadow-lg"
                    />
                    {/* Text content */}
                    <div className="flex flex-col gap-4 self-center text-center sm:text-left">
                        <h1 className="text-4xl font-bold">Jayesh Tambe</h1>
                    </div>
                </div>
                <div className="text-lg text-center sm:text-left max-w-2xl">
                    <p>
                        I'm a seasoned Senior Software Engineer with 15 years of deep expertise across diverse sectors, including HealthTech, Banking, Logistics, and Education. My focus is on architecting and delivering high-performance, cloud-native microservices on platforms like AWS and Kubernetes.
                    </p>
                    <p className="mt-4">
                        I specialize in leading technical initiatives to drive performant code, enhance system scalability, and implement modern AI/ML solutions. I bring a track record of translating complex business requirements into robust, automated, and high-impact software that directly influences organizational performance.
                    </p>
                </div>
                <TechnologiesCarousel />
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark   :hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                        href="/projects"
                    >
                        View Projects
                    </a>
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                        href="/contact"
                    >
                        Contact Me
                    </a>
                </div>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                {/* LinkedIn Link */}
                <a
                    href="https://www.linkedin.com/in/jayeshtambe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                    {/* LinkedIn Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.57c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.64 0 4.31 2.4 4.31 5.52v6.24z" />
                    </svg>
                    <span>LinkedIn</span>
                </a>

                {/* GitHub Link */}
                <a
                    href="https://github.com/jtambe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-800 hover:text-gray-600"
                >
                    {/* GitHub Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.06 1.84 2.8 1.3 3.48.98.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.46-2.4 1.22-3.24-.12-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.64 1.66.22 2.88.1 3.18.76.84 1.22 1.92 1.22 3.24 0 4.64-2.8 5.68-5.48 5.98.44.38.82 1.12.82 2.26v3.36c0 .32.22.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                </a>
            </footer>
        </div>
    );
}