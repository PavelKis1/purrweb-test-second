import cl from './input.module.css'

function Input(props) {
    return (
        <input className={cl.input} {...props}/>
    )
}

export default Input