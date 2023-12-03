import { useState } from "react";
import Button from "../../UI/button/Button"
import Input from "../../UI/input/Input"
import cl from './loginForm.module.css'

function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form className={cl.loginForm} onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit(email, password);
        }}>
            <h1>Авторизация</h1>
            <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='email'
                placeholder='example@mail.ru'
                autocomlete='on'
            />
            <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type='password'
                placeholder='Введите 8 значный пароль'
                minLength='8'
            />
            <Button>Продолжить</Button>
        </form>
    )
}

export default LoginForm