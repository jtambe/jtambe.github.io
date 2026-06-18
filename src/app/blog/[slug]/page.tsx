"use client"

import { notFound } from "next/navigation";

export default function BlogPostPage() {
    // Blog posts are hosted on Medium - redirects happen via blog list page
    return notFound();
}
