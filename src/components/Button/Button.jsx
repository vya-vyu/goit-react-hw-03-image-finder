import s from './Button.module.css';
const Button = ({ changePage }) => {
  return (
    <button type="button" className={s.Button} onClick={changePage}>
      Load more
    </button>
  );
};

export default Button;
