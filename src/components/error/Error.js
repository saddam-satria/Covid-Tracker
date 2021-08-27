import errorStyle from './error.module.css';

const Error = () => {
  return (
    <div className={errorStyle.Error}>
      <img className={errorStyle.img} src={process.env.PUBLIC_URL + '/img/error.png'} alt="Error" />
      <h3>Please try again later</h3>
    </div>
  );
};

export default Error;
