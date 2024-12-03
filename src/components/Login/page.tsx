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
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import Image from 'next/image';
import Cookies from 'js-cookie';
import { post } from '@/services/types';
import apiEndpoints from "@/services/apiEndpoints";

interface LoginData {
    username: string;
    password: string;
    remember: boolean;
}

interface LoginResponse {
    data: {
        token: string;
        expires_in_token: number;
    };
    message?: string;
}


export default function LoginPage({title}) {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [remember, setRemember] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ username?: string; password?: string; general?: string }>({});
    const t = useTranslations("Login");
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = {
                'username': username,
                'password': password,
                'remember': remember
            }
            const response = await post<LoginData, LoginResponse>(apiEndpoints.LOGIN, data);
            if(response?.data?.data)
            {
                const { token, expires_in_token } = response?.data?.data;
                console.log(expires_in_token)
                Cookies.set('token', token, { expires: expires_in_token / 1440 });
            }else{
                setErrors(
                    {
                        general: response?.data?.message,
                        password: Array.isArray(response.data.message?.password) ? response.data.message.password[0] : '',
                        username: Array.isArray(response.data.message?.username) ? response.data.message.username[0] : ''
                    }
                );
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, field: keyof typeof errors) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
        setErrors(prevErrors => ({
            ...prevErrors,
            [field]: ''
        }));
    };

    const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRemember(e.target.checked);
    };

    return (
        <div>
            <div className={styles.bgLang}>
                <LanguageSwitcher/>
            </div>
            <div className={styles.container}>
                <div className={`${styles.formContainer} ${isVisible ? styles.active : ''}`}>
                    <div className={styles.leftHalf}>
                        <h1 className={styles.title}>
                            {t('title')}
                        </h1>
                        <form className={styles.formCustom} onSubmit={handleLogin}>
                            <FormGroup style={{gap: '10px'}}>
                                <label className={styles.label}>
                                    {t('username')}
                                    <span style={{color: 'red'}}> *</span>
                                </label>
                                <TextField
                                    placeholder={t('enter_username')}
                                    className={styles.customTextField}
                                    value={username}
                                    name={username}
                                    onChange={handleInputChange(setUsername, 'username')}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '12px',
                                        }
                                    }}
                                />
                                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                            </FormGroup>
                            <br/>
                            <FormGroup style={{gap: '10px'}}>
                                <label className={styles.label}>
                                    {t('password')}
                                    <span style={{color: 'red'}}> *</span>
                                </label>
                                <PasswordInput
                                    value={password}
                                    name={password}
                                    placeholder={t('enter_password')}
                                    style={styles.customTextField}
                                    onChange={handleInputChange(setPassword, 'password')}
                                />
                                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                            </FormGroup>
                            <div className={styles.formForgot}>
                                <FormGroup style={{gap: '10px'}}>
                                    <RememberCheckbox
                                        label={t('remember')}
                                        checked={remember}
                                        onChange={handleRememberChange}
                                    />
                                </FormGroup>
                                <div className={styles.forgotPassword}>
                                    <Typography variant="body2" color="textPrimary">
                                        {t('forgot')}
                                    </Typography>
                                </div>
                            </div>
                            <ButtonLogin
                                type="submit"
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
                        <Image
                            src="/images/switch-bg/cat.webp"
                            alt="Cat"
                            className={styles.imgLogin}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
