import React from "react";
import { BlogPostsDocument } from "@/prismicio-types";
import BlogItem from "./BlogItem";
interface HomeBlogSectionProps {
    blogPosts: BlogPostsDocument[];
}

export default function HomeBlogSection({ blogPosts }: HomeBlogSectionProps) {
    return (
        <section className='blog-five-area pt-130 pb-130'>
            <div className='container'>
                <div className='section-header text-center mb-50'>
                    <h6>Our Blog</h6>
                    <h2 className='wow splt-txt' data-splitting>
                        Check Latest Blog Post <br /> from Blog List
                    </h2>
                </div>
                <div className='row g-4'>
                    {blogPosts.map((blog, index) => (
                        <BlogItem
                            key={blog.id}
                            blog={blog}
                            delay={`${index * 100}ms`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
