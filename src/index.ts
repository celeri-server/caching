
import { buildCacheControl, CacheControlDirectives } from './cache-control';
import { MiddlewareFunction } from '@celeri/middleware-pipeline';
import { MiddlewareInput } from '@celeri/http-server';

export { CacheControlDirectives } from './cache-control';

/**
 * Returns a middleware that applies a specific Cache-Control header on all
 * responses passing through it.
 *
 * @param options Options controlling how the Cache-Control header is formed, or a valid header value
 */
export const cacheControl = (options: CacheControlDirectives | string) : MiddlewareFunction<MiddlewareInput> => {
	const value = buildCacheControl(options);

	return ({ req, res }): void => {
		res.setHeader('cache-control', value);
	};
};
