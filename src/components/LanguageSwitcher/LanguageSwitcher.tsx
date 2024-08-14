'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale() || 'vi';

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;

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
            <InputLabel id="demo-select-small-label">Choose Language</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                defaultValue={localActive}
                className='bg-transparent py-2'
                onChange={onSelectChange}
                disabled={isPending}
                label="Choose Language"
            >
                <MenuItem value="vi">Vietnamese</MenuItem>
                <MenuItem value="en">English</MenuItem>
            </Select>
        </FormControl>

    );
}
