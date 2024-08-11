import styles from './index.module.scss';
import { Button } from "@mui/material";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { Link } from '@/navigation';

export default function SwitchLogin() {
    const t = useTranslations("Switch");

    return (
        <div className={styles.fullPageBackground}>
            <div className={styles.bgCenter}>
                <div className={styles.bgButton}>
                    <div className={styles.buttonContainer}>
                        <Link href="/login">
                            <Button variant="contained" className={styles.customButton}>
                                {t('job_seeder')}
                            </Button>
                        </Link>
                        <p className={styles.textContent}>{t('note_job_seeder')}</p>
                    </div>

                    <div className={styles.buttonContainer}>
                        <Link href="/login">
                            <Button variant="contained" className={styles.customButton}>
                                {t('recruiter')}
                            </Button>
                        </Link>
                        <p className={styles.textContent}>{t('note_recruiter')}</p>
                    </div>
                </div>
                <div className={styles.bgLang}>
                    <LanguageSwitcher/>
                </div>
            </div>
        </div>
    );
}
