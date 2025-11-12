import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import FormButton from '../../components/FormButton/FormButton';
import Container from '../../components/Container/Container';
import s from "./ForgotPassword.module.sass";
import Input from '../../components/Input/Input';
import Logo from "../../components/Logo/Logo";
import React from "react";
import z from 'zod';

const schema = z.object({
    name: z.string().max(10, "Maximum 10 symbols"),
    email: z.string().min(5, "Minimum 5 symbols").email(),
    password: z.string().min(8, "Minimum 8 symbol").max(36, "Maximum 36 symbols"),
})

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema)
    })
    const onSubmit = (e) => {
        console.log(123)
    }
  return (
    <div className={s.main}>
        <Container>
            <div className={s.wrap}>
                <Logo mode='light' />
                <h1>Forgot Password?</h1>
                <p className={s.title}>Enter your email address to get the password reset link.</p>
                <form className={s.inputs} onSubmit={handleSubmit(onSubmit)}>
                    <Input type="email" label='Email Address' config={{ ...register("email") }} errors={errors} />
                    <FormButton text="Password Reset"/>
                    <Link className={s.back} to="/login">Back to login</Link>
                </form>
            </div>
        </Container>
    </div>
  );
};

export default ForgotPassword;
