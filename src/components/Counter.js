import styles from '../styles/Wrapper.module.css';

const Counter = ({startFrom}) => {
  return (
    <div className={styles["counter"]}>{startFrom}</div>
  )
}

export default Counter;
