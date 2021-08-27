import errorStyle from './error.module.css'
import errorImg from './error.png'

const Error = () => {
    return (
        <div className={errorStyle.Error}>
            <img className={errorStyle.img} src={errorImg} alt="Error" />
            <h3>Please try again later</h3>
        </div>
    )
}

export default Error
