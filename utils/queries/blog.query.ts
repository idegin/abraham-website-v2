import * as prismic from '@prismicio/client';
import { AllDocumentTypes, BlogPostsDocument } from '@/prismicio-types';
import moment from 'moment';


export const getBlogPosts = async (client: prismic.Client<AllDocumentTypes>, pageSize?: number, currentPage?: number) =>
{
    try {
        const blogPosts = await client.getByType('blog_posts', {
            fetchLinks: [ 'author.name', 'categories.title' ],
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
        const blogPost = await client.getByUID('blog_posts', slug, {
            fetchLinks: [ 'author.name', 'categories.title' ],
        });

        const allCategories = await client.getByType('categories');

        const relatedPosts = await client.getByType('blog_posts', {
            fetchLinks: [ 'author.name', 'categories.title' ],
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

        const dateBefore = moment(blogPost.first_publication_date).format("YYYY-MM-DD");
        const dateAfter = moment(blogPost.first_publication_date).format("YYYY-MM-DD");

        let previousPost;
        let nextPost;

        try {
            previousPost = await client.getByType('blog_posts', {
                fetchLinks: [ 'author.name', 'category.title' ],
                pageSize: 1,
                // @ts-ignore
                filters: [ prismic.filter.dateBefore("document.first_publication_date", blogPost.first_publication_date) ],
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
        } catch (error) {
            console.error('Error fetching previous post:', error);

        }
        try {
            nextPost = await client.getByType('blog_posts', {
                fetchLinks: [ 'author.name', 'category.title' ],
                pageSize: 1,
                // @ts-ignore
                filters: [ prismic.filter.dateAfter("document.first_publication_date", blogPost.first_publication_date) ],
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
        } catch (error) {
            console.error('Error fetching next post:', error);
        }




        return {
            blogPost,
            categories: allCategories.results,
            relatedPosts: relatedPosts.results,
            previousPost: previousPost?.results[ 0 ],
            nextPost: nextPost?.results[ 0 ],
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


export const getBlogCategories = async (client: prismic.Client<AllDocumentTypes>, pageSize?: number, currentPage?: number) =>
{
    const categories = await client.getByType('categories');
    return {
        categories: categories.results,
        totalPages: categories.total_pages,
        currentPage: categories.page,
    };
};


