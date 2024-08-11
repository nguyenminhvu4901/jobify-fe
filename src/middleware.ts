import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
    locales,
    defaultLocale: 'vi'
});

export const config = {
    matcher: ['/', '/(vi|en)/:path*']
};