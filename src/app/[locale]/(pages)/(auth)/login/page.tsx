// src/app/login/page.tsx
import styles from './login.module.scss';

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Login</h1>
                <form className={styles.form}>
                    <label htmlFor="email" className={styles.label}>Email:</label>
                    <input type="email" id="email" className={styles.input} placeholder="Enter your email" />

                    <label htmlFor="password" className={styles.label}>Password:</label>
                    <input type="password" id="password" className={styles.input} placeholder="Enter your password" />

                    <button type="submit" className={styles.submitButton}>Login</button>
                </form>
            </div>
        </div>
    );
}
