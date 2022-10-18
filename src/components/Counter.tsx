import styles from '../styles/Wrapper.module.css';

type CounterProps = {
  startFrom: number
}

const Counter: React.FC<CounterProps> = ({startFrom}) => {
  return (
    <div className={styles["counter"]}>{startFrom}</div>
  )
}

export default Counter;
