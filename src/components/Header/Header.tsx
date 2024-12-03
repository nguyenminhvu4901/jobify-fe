import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

export default function Header() {
    const t = useTranslations('Header');

    return (
        <header className='p-4'>
            <nav className='flex items-center justify-between'>
                <Link href='/'>{t('home')}</Link>
                <LanguageSwitcher/>
            </nav>
        </header>
    );
}
