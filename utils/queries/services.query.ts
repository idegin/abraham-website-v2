import * as prismic from '@prismicio/client';
import { AllDocumentTypes } from '@/prismicio-types';

export const getServices = async (client: prismic.Client<AllDocumentTypes>, pageSize?: number, currentPage?: number) =>
{
    try {
        const services = await client.getByType('services', {
            pageSize,
            page: currentPage,
            graphQuery: `{
                services {
                    title
                    featured_image
                    featured_descriptioin
                    sub_services
                }
            }`
        });
        return {
            services: services.results,
            totalPages: services.total_pages,
            currentPage: services.page,
        };
    } catch (error) {
        console.error('Error fetching services:', error);
        return {
            services: [],
            totalPages: 0,
            currentPage: 0,
        };
    }
};

export const getServiceBySlug = async (client: prismic.Client<AllDocumentTypes>, slug: string) =>
{
    try {
        const service = await client.getByUID('services', slug);
        return service;
    } catch (error) {
        console.error('Error fetching service by slug:', error);
        return null;
    }
};
