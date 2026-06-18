import { notFound } from "next/navigation";

export async function generateStaticParams() {
    // No static params needed - all blog posts redirect to Medium via blog list
    return [];
}

export default function BlogPostPage() {
    // Blog posts are hosted on Medium - redirects happen via blog list page
    return notFound();
}
