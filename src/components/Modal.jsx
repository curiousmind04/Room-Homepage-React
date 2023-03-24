import classes from "./Modal.module.css";

function Modal(props) {
  const closeModalHandler = () => {
    props.modalHandler();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={closeModalHandler}></div>
      <div className={classes.container}>
        <img
          src="/images/icon-close.svg"
          alt="close icon"
          onClick={closeModalHandler}
        />
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Modal;
