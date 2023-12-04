import './Button.scss'

const Button = (props) => {

    const { type, size, children } = props

    let classSize = ''

     switch (size) {
        case 'small':
            classSize = '--small'
            break
        case 'medium':
            classSize = '--medium'
            break
        case 'big':
            classSize = '--big'
            break
        default:
            classSize = '--medium'
     }

    return (
        <button type={type} className={`btn${classSize}`}>
            { children }
        </button>
    )
}

export default Button