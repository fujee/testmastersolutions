const isProd = process.env.NODE_ENV === 'production';

export function getMediaPathname(image: string) {
    return isProd ? `/test/${image}` : `/${image}`;
}