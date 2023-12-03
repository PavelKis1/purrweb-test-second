
function Register() {
    return (
        <div>
            <h1>
                Register
            </h1>
            <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <input type="text" placeholder="name" />
                <input type="text" placeholder="surname" />
                <input type="text" placeholder="email" />
                <input type="text" placeholder="tel" />
                <input type="password" placeholder="password" />
                <button type="submit">register</button>
            </form>
        </div>
    )
}

export default Register