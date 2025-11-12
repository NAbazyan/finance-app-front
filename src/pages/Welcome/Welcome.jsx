import { Link } from 'react-router';
import Container from '../../components/Container/Container';
import s from "./Welcome.module.sass";
import React from 'react';

const Welcome = () => {
    const company_name = import.meta.env.VITE_COMPANY_NAME
    return (
        <div className={s.main}>
            <Container>
                <div className={s.wrap}>
                    <div className={s.subtitle}>Welcome to the</div>
                    <div className={s.header}>
                        <h1 className={s.main_heading}>{company_name} - Financial Management Dashboard</h1>
                        <p className={s.main_description}>This file is totally free for personal project & education purpose, for commercial license please contact us</p>
                    </div>
                    <hr className={s.separator} />
                    <div className={s.footer}>
                        <p className={s.footer_description}>To download complete dashboard click below button. Don't worry, its <strong>totally free</strong></p>
                        <Link to="/login" className={s.footer_link}>{company_name} Dashboard</Link>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Welcome