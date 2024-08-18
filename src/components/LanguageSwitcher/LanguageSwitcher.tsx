'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import {useTranslations} from "next-intl";
import Cookies from 'js-cookie';

export default function LanguageSwitcher() {
    const t = useTranslations("SwitchLang");
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale() || 'vi';

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;

        Cookies.set('locale', nextLocale, { expires: 365 });

        const currentPath = window.location.pathname;
        const pathWithoutLocale = currentPath.startsWith(`/${localActive}`)
            ? currentPath.slice(localActive.length + 1)
            : currentPath;
        const newPath = `/${nextLocale}${pathWithoutLocale}`;

        startTransition(() => {
            router.replace(newPath);
        });
    };

    return (
        <FormControl sx={{ m: 1, width: 150, padding: 0, margin: 0 }} size="small">
            <InputLabel id="demo-select-small-label">{t('choose')}</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                defaultValue={localActive}
                className='bg-transparent py-2'
                onChange={onSelectChange}
                disabled={isPending}
                label="Choose Language"
            >
                <MenuItem value="vi">{t('vietnamese')}</MenuItem>
                <MenuItem value="en">{t('english')}</MenuItem>
            </Select>
        </FormControl>
    );
}
