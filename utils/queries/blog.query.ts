import * as prismic from '@prismicio/client';
import { AllDocumentTypes } from '@/prismicio-types';


export const getBlogPosts = async (client: prismic.Client<AllDocumentTypes>, pageSize?: number, currentPage?: number) =>
{
    try {
        const blogPosts = await client.getByType('blog_posts', {
            pageSize,
            page: currentPage,
            graphQuery: `{
                blog_posts {
                    title
                    featured_image
                    excerpt
                    author
                    category
                }
            }`
        });
        return {
            blogPosts: blogPosts.results,
            totalPages: blogPosts.total_pages,
            currentPage: blogPosts.page,

        };
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return {
            blogPosts: [],
            totalPages: 0,
            currentPage: 0,
        };

    }
};

export const getBlogPostBySlug = async (client: prismic.Client<AllDocumentTypes>, slug: string) =>
{
    try {
        const blogPost = await client.getByUID('blog_posts', slug);

        const allCategories = await client.getByType('categories');

        const relatedPosts = await client.getByType('blog_posts', {
            fetchLinks: [ 'author.name', 'category.title' ],
            pageSize: 3,
            // @ts-ignore
            filters: [ prismic.filter.at("my.blog_posts.category", blogPost.data.category.uid) ],
            graphQuery: `{
                blog_posts {
                    title
                    featured_image
                    excerpt
                    author
                    category
                }
            }`
        });

        return {
            blogPost,
            categories: allCategories.results,
            relatedPosts: relatedPosts.results,
        };
    } catch (error) {
        console.error('Error fetching blog post by slug:', error);
        return null;
    }
};


export const getBlogByCategory = async (client: prismic.Client<AllDocumentTypes>, category: string, pageSize?: number, currentPage?: number) =>
{
    try {
        const blogPosts = await client.getByType('blog_posts', {
            fetchLinks: [ 'author.name', 'category.title' ],
            graphQuery: `{
                blog_posts(filter: {category: {title: "${category}"}}) {
                    title
                    featured_image
                    excerpt
                    author
                    category
                }
            }`
        });
        return {
            blogPosts: blogPosts.results,
            totalPages: blogPosts.total_pages,
            currentPage: blogPosts.page,
        };
    } catch (error) {
        console.error('Error fetching blog posts by category:', error);
        return {
            blogPosts: [],
            totalPages: 0,
            currentPage: 0,
        };
    }
};
