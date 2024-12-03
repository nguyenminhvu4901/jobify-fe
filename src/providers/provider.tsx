'use client';

import { store } from '@/stores/store';
import { Provider as ReduxProvider } from 'react-redux';
import { NextIntlClientProvider } from 'next-intl';

export default function Providers({ children, messages, locale }) {
    return (
        <ReduxProvider store={store}>
            <NextIntlClientProvider messages={messages} locale={locale}>
                {children}
            </NextIntlClientProvider>
        </ReduxProvider>
    );
}
