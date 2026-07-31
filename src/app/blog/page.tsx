import { getBlogPostsSortedByDate } from "@/data/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Jayesh Tambe | Technical Articles on Software Engineering",
    description: "Read technical articles on microservices, cloud architecture, .NET Core, gRPC, and software engineering best practices.",
    keywords: [
        "Blog",
        "Technical Articles",
        "Software Engineering",
        "Cloud Architecture",
        "Microservices",
        ".NET Core",
        "gRPC",
        "C#",
        "Python",
        "AWS",
    ],
    openGraph: {
        title: "Blog - Jayesh Tambe | Technical Articles",
        description: "Read technical articles on microservices, cloud architecture, and software engineering.",
        type: "website",
        url: "https://jtambe.github.io/blog",
    },
};

export default function BlogPage() {
    const posts = getBlogPostsSortedByDate();

    return (
        <main className="mt-24 px-6 py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">Blog</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-12">
                Technical articles and insights on software engineering, cloud architecture, and more.
            </p>

            <div className="space-y-6">
                {posts.length === 0 ? (
                    <p className="text-gray-600 dark:text-gray-400">No blog posts yet. Check back soon!</p>
                ) : (
                    posts.map((post) => (
                        <article
                            key={post.id}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
                        >
                            <a 
                                href={post.source?.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:opacity-75 transition"
                            >
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                    {post.title}
                                </h2>
                            </a>
                            <a 
                                href={post.source?.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:opacity-75 transition"
                            >
                                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                                    <time dateTime={post.date.toISOString()}>
                                        {post.date.toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </time>
                                    {post.source && (
                                        <>
                                            <span>•</span>
                                            <span className="text-blue-600 dark:text-blue-400">
                                                {post.source.name}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </a>
                            <a 
                                href={post.source?.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:opacity-75 transition"
                            >
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</p>
                                <div className="flex gap-2 flex-wrap">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        </article>
                    ))
                )}
            </div>
        </main>
    );
}