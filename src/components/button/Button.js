import styles from './Button.module.css';

const Button = (props) => {
  const handleButtonClick = () => {
    const phoneNumber = "+972505999287";
    const message = "היי רוחמה ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };
  
  return (
    <div className={styles.center}>
      <button 
        className={styles.button}
        onClick={handleButtonClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;