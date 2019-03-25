
export interface CacheControlDirectives {
	noStore?: boolean,
	noCache?: boolean,
	mustRevalidate?: boolean,
	proxyRevalidate?: boolean,
	isPrivate?: boolean,
	maxAge?: number
}

export const buildCacheControl = (options: CacheControlDirectives | string) : string => {
	if (typeof options === 'string') {
		return options;
	}

	const maxAge = options.maxAge || 0;

	if (options.noStore) {
		return 'no-store';
	}

	if (options.noCache) {
		return 'no-cache';
	}

	if (options.mustRevalidate) {
		return `must-revalidate, max-age=${maxAge}`;
	}

	if (options.proxyRevalidate) {
		return `proxy-revalidate, max-age=${maxAge}`;
	}

	if (options.isPrivate) {
		return `private, max-age=${maxAge}`;
	}

	return `public, max-age=${maxAge}`;
};
