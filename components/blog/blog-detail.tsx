"use client";
import { AuthorDocumentData, BlogPostsDocument } from "@/prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import moment from "moment";
import Link from "next/link";

interface Props {
    blogDetails: BlogPostsDocument;
    previousPost: BlogPostsDocument;
    nextPost: BlogPostsDocument;
}

function BlogContent({ blogDetails }: { blogDetails: BlogPostsDocument }) {
    const author = blogDetails?.data?.author as unknown as AuthorDocumentData;
    return (
        <div className='blog-details__content'>
            <ul className='list-unstyled blog-details__meta'>
                <li>
                    <a href='#0'>
                        <i className='fas fa-user-circle'></i> {author?.name}
                    </a>
                </li>
                {/* <li>
                    <a href='news-details.html'>
                        <i className='fas fa-comments'></i> {blogDetails?.data?.comments?.length} Comments
                    </a>
                </li> */}
            </ul>
            <h3 className='blog-details__title'>{blogDetails?.data?.title}</h3>
            <div className='blog-details__text-2'>
                <PrismicRichText field={blogDetails?.data?.content} />
            </div>
        </div>
    );
}

function BlogTagsAndSocials({
    blogDetails,
}: {
    blogDetails: BlogPostsDocument;
}) {
    const title = blogDetails.data.title || "";
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://briie.com";
    const url = `${baseUrl}/blog/${blogDetails.uid}`;
    const description = blogDetails.data.excerpt || "";
    const image = blogDetails.data.featured_image?.url || "";

    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    const handleShare = (platform: keyof typeof shareUrls) => {
        window.open(shareUrls[platform], "_blank", "width=600,height=400");
    };

    return (
        <div className='blog-details__bottom'>
            <p className='blog-details__tags'>
                <span>Share this post:</span>
            </p>
            <div className='blog-details__social-list'>
                <a
                    href={shareUrls.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Share on Twitter'
                    onClick={(e) => {
                        e.preventDefault();
                        handleShare("twitter");
                    }}
                >
                    <i className='fab fa-twitter'></i>
                </a>
                <a
                    href={shareUrls.facebook}
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Share on Facebook'
                    onClick={(e) => {
                        e.preventDefault();
                        handleShare("facebook");
                    }}
                >
                    <i className='fab fa-facebook'></i>
                </a>
                <a
                    href={shareUrls.pinterest}
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Share on Pinterest'
                    onClick={(e) => {
                        e.preventDefault();
                        handleShare("pinterest");
                    }}
                >
                    <i className='fab fa-pinterest-p'></i>
                </a>
                <a
                    href={shareUrls.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Share on LinkedIn'
                    onClick={(e) => {
                        e.preventDefault();
                        handleShare("linkedin");
                    }}
                >
                    <i className='fab fa-linkedin'></i>
                </a>
            </div>
        </div>
    );
}

interface BlogNavigationProps {
    previousPost: BlogPostsDocument;
    nextPost: BlogPostsDocument;
}
function BlogNavigation({ previousPost, nextPost }: BlogNavigationProps) {
    return (
        <div className='nav-links'>
            {previousPost && (
                <div className='prev'>
                    <Link href={`/blog/${previousPost?.uid}`} rel='prev'>
                        Bring to the table win-win survival strategies
                    </Link>
                </div>
            )}
            {nextPost && (
                <div className='next'>
                    <Link href={`/blog/${nextPost?.uid}`} rel='next'>
                        How to lead a healthy &amp; well-balanced life
                    </Link>
                </div>
            )}
        </div>
    );
}
function BlogPostDetails({ blogDetails, previousPost, nextPost }: Props) {
    return (
        <div className='col-xl-8 col-lg-7'>
            <div className='blog-details__left'>
                {/* Blog Image */}
                <div className='blog-details__img'>
                    <img
                        src={blogDetails?.data?.featured_image?.url || ""}
                        alt={blogDetails?.data?.featured_image?.alt || ""}
                    />
                    <div className='blog-details__date'>
                        <span className='day'>
                            {moment(blogDetails?.first_publication_date).format(
                                "DD"
                            )}
                        </span>
                        <span className='month'>
                            {moment(blogDetails?.first_publication_date).format(
                                "MMM"
                            )}
                        </span>
                    </div>
                </div>
                <BlogContent blogDetails={blogDetails} />

                <BlogTagsAndSocials blogDetails={blogDetails} />

                <BlogNavigation
                    previousPost={previousPost}
                    nextPost={nextPost}
                />

                {/* <CommentSection /> */}
            </div>
        </div>
    );
}

export default BlogPostDetails;
