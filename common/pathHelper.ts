const isProd = process.env.NODE_ENV === 'production';

export function getMediaPathname(image: string) {
    return isProd ? `/testmastersolutions/${image}` : `/${image}`;
}

export function isValidPath(path: string) {
    if (path !== "/" && path !== "/home" && path !== "about" && path !== "/results" && path !== "/contact")
        return false;

    return true;
}