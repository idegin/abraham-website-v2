import BlogItem from "@/components/BlogItem";
import PageHero from "@/components/PageHero";
import Pagination from "@/components/Pagination";
import { createClient } from "@/prismicio";
import { getBlogByCategory, getBlogPosts } from "@/utils/queries/blog.query";
import React from "react";

interface PageProps {
    searchParams: Promise<{
        page?: string;
        category?: string;
    }>;
}
export default async function Page({ searchParams }: PageProps) {
    const client = createClient();
    const { page, category } = await searchParams;
    const currentPage = Number(page || 1);

    let result;
    if (category) {
        result = await getBlogByCategory(client, category, 4, currentPage);
    } else {
        result = await getBlogPosts(client, 4, currentPage);
    }

    const { blogPosts, totalPages } = result;
    return (
        <>
            <PageHero
                title='Blog'
                imageURL={'/ai/blog.jpg'}
                breadcrumb={[{ label: "Blog", href: "/blog" }]}
            />
            <section className='blog-area pt-130 pb-20'>
                <div className='container-lg'>
                    <div className='row g-5'>
                        {blogPosts.map((blog, index) => (
                            <BlogItem
                                key={blog.id}
                                blog={blog}
                                delay={`${index * 100}ms`}
                            />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className='mt-5'>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                baseUrl='/blog'
                                searchParams={category ? { category } : {}}
                            />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
