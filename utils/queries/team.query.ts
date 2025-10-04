import * as prismic from '@prismicio/client';
import { AllDocumentTypes } from '@/prismicio-types';

export const getTeams = async (client: prismic.Client<AllDocumentTypes>) =>
{
    try {
        const teams = await client.getByType('team');
        return teams.results;
    } catch (error) {
        console.error('Error fetching teams:', error);
        return [];
    }
};

export const getTeamBySlug = async (client: prismic.Client<AllDocumentTypes>, slug: string) =>
{
    try {
        const team = await client.getByUID('team', slug);
        return team;
    } catch (error) {
        console.error('Error fetching team by slug:', error);
        return null;
    }
};
