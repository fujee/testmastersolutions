export function getMediaPathname(image: string) {
    return `/${image}`;
}

export function isValidPath(path: string) {
    if (path !== "/" && path !== "/home" && path !== "about" && path !== "/results" && path !== "/contact")
        return false;

    return true;
}