import errorStyle from './error.module.css'


const Error = () => {
    return (
        <div className={errorStyle.Error}>
            <img className={process.env.PUBLIC_URL + '/img/error.png'} src={errorImg} alt="Error" />
            <h3>Please try again later</h3>
        </div>
    )
}

export default Error
