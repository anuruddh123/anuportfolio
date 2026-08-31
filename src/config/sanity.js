import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

let client = null;
let builder = null;

try {
    client = createClient({
        projectId: 'anuruddh-portfolio',
        dataset: 'production',
        useCdn: true,
        apiVersion: '2024-03-01',
    });
    builder = createImageUrlBuilder(client);
} catch (e) {
    client = {
        config: () => ({ projectId: 'anuruddh-portfolio' }),
        fetch: () => Promise.resolve([])
    };
}

export const sanityClient = client;

// Funkcja pomocnicza do generowania adresów URL obrazków z Sanity
export const urlFor = (source) => {
    if (builder && source) {
        try {
            return builder.image(source);
        } catch {
            return { url: () => '' };
        }
    }
    return { url: () => '' };
};

// Funkcja pomocnicza do zamiany domeny Sanity na proxy w Cloudflare
export const getProxyUrl = (imageBuilder) => {
    if (!imageBuilder) return null;
    try {
        const url = typeof imageBuilder === 'string' ? imageBuilder : imageBuilder.url?.();
        if (url && typeof window !== 'undefined') {
            return url.replace('https://cdn.sanity.io', '/sanity-cdn');
        }
        return url || null;
    } catch {
        return null;
    }
};
