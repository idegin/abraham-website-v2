import BlogPostDetails from "@/components/blog/blog-detail";
import BlogSidebar from "@/components/blog/sidebar";
import PageHero from "@/components/PageHero";
import { createClient } from "@/prismicio";
import {
    BlogPostsDocument,
    CategoriesDocument,
    CategoriesDocumentData,
} from "@/prismicio-types";
import { getBlogPostBySlug } from "@/utils/queries/blog.query";
import moment from "moment";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { id } = await params;
    const client = createClient();
    const blogDetails = await getBlogPostBySlug(client, id);
    const blogPost = blogDetails?.blogPost;

    if (!blogPost) {
        return {
            title: "Blog Post Not Found",
            description: "The requested blog post could not be found.",
        };
    }

    const title = blogPost.data.title || "Blog Post";
    const description =
        blogPost.data.excerpt ||
        blogPost.data.title ||
        "Read our latest blog post";
    const featuredImage = blogPost.data.featured_image?.url;
    const publishedDate = blogPost.first_publication_date;
    const modifiedDate = blogPost.last_publication_date;
    // @ts-ignore
    const author = blogPost.data.author?.data?.name || "Admin";
    // @ts-ignore
    const category = blogPost.data.category?.data?.title || "";

    return {
        title: `${title} | Briie Blog`,
        description,
        keywords: [category, "blog", "business", "insights"].filter(Boolean),
        authors: [{ name: author }],
        openGraph: {
            title: `${title} | Briie Blog`,
            description,
            type: "article",
            publishedTime: publishedDate,
            modifiedTime: modifiedDate,
            authors: [author],
            section: category,
            tags: [category].filter(Boolean),
            images: featuredImage
                ? [
                      {
                          url: featuredImage,
                          width: 1200,
                          height: 630,
                          alt: blogPost.data.featured_image?.alt || title,
                      },
                  ]
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | Briie Blog`,
            description,
            images: featuredImage ? [featuredImage] : undefined,
        },
        alternates: {
            canonical: `/blog/${id}`,
        },
    };
}
interface PageProps {
    params: Promise<{
        id: string;
    }>;
}
export default async function Page({ params }: PageProps) {
    const { id } = await params;
    const client = createClient();
    const blogDetails = await getBlogPostBySlug(client, id);
    const category = blogDetails?.blogPost?.data
        ?.category as unknown as CategoriesDocumentData;

    if (!blogDetails?.blogPost) {
        return notFound();
    }

    return (
        <>
            <PageHero
                title={blogDetails?.blogPost?.data?.title || ""}
                imageURL={blogDetails?.blogPost.data.featured_image.url || ""}
                breadcrumb={[
                    {
                        label: "Blog",
                        href: "/blog",
                    },
                    {
                        // @ts-ignore
                        label: category?.data?.title || "",
                        // @ts-ignore
                        href: `/blog?category=${category.uid}`,
                    },
                    {
                        label: blogDetails?.blogPost?.data?.title || "",
                        href: `/blog/${blogDetails?.blogPost?.uid}`,
                    },
                ]}
            />
            <section className='blog-details pt-120 pb-120'>
                <div className='container-lg'>
                    <div className='row'>
                        <BlogPostDetails
                            previousPost={
                                blogDetails?.previousPost as BlogPostsDocument
                            }
                            nextPost={
                                blogDetails?.nextPost as BlogPostsDocument
                            }
                            blogDetails={
                                blogDetails?.blogPost as BlogPostsDocument
                            }
                        />
                        <BlogSidebar
                            // @ts-ignore
                            activeCategory={category?.uid || ""}
                            relatedPosts={
                                blogDetails?.relatedPosts as BlogPostsDocument[]
                            }
                            categories={
                                blogDetails?.categories as CategoriesDocument[]
                            }
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
