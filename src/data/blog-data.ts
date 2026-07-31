export interface BlogPost {
    id: string;
    title: string;
    date: Date;
    description: string;
    tags: string[];
    source: {
        name: string;
        url: string;
    };
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Lazy<T> in Dependency Injection with C# .NET Core",
        date: new Date("2023-10-22"),
        description: "Explore how to use Lazy<T> in dependency injection to defer instantiation of dependencies in C# .NET Core applications.",
        tags: ["C#", ".NET Core", "Dependency Injection", "Lazy Initialization"],
        source: {
            name: "Medium",
            url: "https://medium.com/@jayeshtambe/lazy-t-in-dependency-injection-with-c-net-core-c418cc80cd13",
        },
    },
    {
        id: "2",
        title: "Rate Limiter on gRPC in .NET Core",
        date: new Date("2024-06-19"),
        description: "Implement rate limiting for gRPC services in .NET Core to protect your services from being overwhelmed.",
        tags: ["gRPC", ".NET Core", "Rate Limiting", "Microservices"],
        source: {
            name: "Medium",
            url: "https://medium.com/@jayeshtambe/rate-limiter-on-grpc-in-net-core-c16aa877ea79",
        },
    },
];

// Helper function to get posts sorted by date in descending order
export function getBlogPostsSortedByDate(): BlogPost[] {
    return [...blogPosts].sort((a, b) => b.date.getTime() - a.date.getTime());
}
