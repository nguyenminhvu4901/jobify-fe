'use client';

import { useEffect, useState } from 'react';
import styles from './login.module.scss';
import {useTranslations} from "next-intl";
import {
    TextField,
    FormGroup,
    Typography,
    Divider,
} from "@mui/material";
import PasswordInput from "@/components/Input/PasswordInput/PasswordInput";
import ButtonLogin from "@/components/Button/Login/ButtonLogin";
import RememberCheckbox from "@/components/Checkbox/Remember/Remember";
import GoogleLoginButton from "@/components/Button/Google/GoogleLoginButton";
import { Link } from '@/navigation';

export default function LoginPage({title}) {
    const t = useTranslations("Login");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={styles.container}>
            <div className={`${styles.formContainer} ${isVisible ? styles.active : ''}`}>
                <div className={styles.leftHalf}>
                    <h1 className={styles.title}>
                        {t('title')}
                    </h1>
                    <form className={styles.formCustom}>
                        <FormGroup style={{gap: '10px'}}>
                            <label className={styles.label}>
                                {t('username')}
                                <span style={{color: 'red'}}> *</span>
                            </label>
                            <TextField
                                placeholder={t('enter_username')}
                                className={styles.customTextField}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                    }
                                }}
                            />
                        </FormGroup>
                        <br/>
                        <FormGroup style={{gap: '10px'}}>
                            <label className={styles.label}>
                                {t('password')}
                                <span style={{color: 'red'}}> *</span>
                            </label>
                            <PasswordInput
                                placeholder={t('enter_password')}
                                style={styles.customTextField}
                            />
                        </FormGroup>
                        <div className={styles.formForgot}>
                            <FormGroup style={{gap: '10px'}}>
                                <RememberCheckbox label={t('remember')}/>
                            </FormGroup>
                            <div className={styles.forgotPassword}>
                                <Typography variant="body2" color="textPrimary">
                                    {t('forgot')}
                                </Typography>
                            </div>
                        </div>
                        <ButtonLogin
                            title={t('login')}
                        />
                    </form>
                    <Divider className={styles.divider}>{t('other')}</Divider>
                    <GoogleLoginButton
                        title={t('login_with_google')}
                    />
                    <div className={styles.divider}>
                        <Typography variant="body2" color="textPrimary">
                            {t('register_question')}
                            <Link href="#">
                                {t('register_now')}
                            </Link>
                        </Typography>
                    </div>
                </div>
                <div className={styles.rightHalf}>
                    <img className={styles.imgLogin}
                         src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                    />
                </div>
            </div>
        </div>
    );
}
