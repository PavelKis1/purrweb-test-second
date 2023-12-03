import cl from './button.module.css'

function Button({ children, ...props }) {
    return (
        <button {...props} className={cl.button}>
            {children}
        </button>
    )
}

export default Button