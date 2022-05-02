import React, { useEffect, useRef, useState } from 'react';
import Counter from './Counter';
import styles from '../styles/Wrapper.module.css';

const Wrapper = () => {
    const inputCountRef = useRef('');
    const [startFrom , setStartFrom] = useState(0);
    const [timer , setTimer] = useState(null);
    const [showCounter , setShowCounter] = useState(true);
    const [startCounter , setStartCounter] = useState(false);
    const [showWelcome , setShowWelcome] = useState(true);

    useEffect(()=>{
        const timeout = setTimeout(() => {
            setShowWelcome(false)
        }, 3000);

        return () => clearTimeout(timeout)
    },[])


    useEffect(()=>{
        // if timer (setInterval is running) exists , using clearInterval , it will clear timer state
        if(timer) {
            clearInterval(timer)
        }

        // if startCounter is true i.e, clicked on start button ,  then only counter interval will start.
        if(startCounter) {
            setTimer(setInterval(() => {
                setStartFrom(prevStart => prevStart + 1)
            }, 1000))
        }

        // if component gets unmounted then after timer interval will be cleared,
        return () => clearInterval(timer)
    },[startCounter])

    // start counter click handler function
    const handleStartCounter = () => {
        const value = Number(inputCountRef.current.value);
        setStartFrom(value);
        inputCountRef.current.value = '';
        setStartCounter(true);
        setShowCounter(true);
    }

    // stop counter click handler function
    const handleStopCounter = () => {
        setStartCounter(false)
    }

    // remove Counter component from DOM handler function
    const handleRemoveCounter = () => {
        inputCountRef.current.value = '';
        setShowCounter(false);
        setStartFrom(0);
        setStartCounter(false);
    }


    return (
        <div className={styles["container"]}>
            <div className={styles["card"]}>
                {showWelcome && <h1 className={styles["heading"]}>Welcome To</h1>}
                <h1 className={styles["heading"]}>Counter</h1>
                {showCounter && <Counter startFrom={startFrom} />}
                <input type="number" placeholder="Enter..." ref={inputCountRef} />
                <div className={styles["btn-group"]}>
                    <button className={styles["btn"]} onClick={handleStartCounter}>Start</button>
                    <button disabled={!startCounter} className={`${styles["btn"]} ${styles["btn-2"]}`} onClick={handleStopCounter}>Stop</button>
                    <button className={styles["btn"]} onClick={handleRemoveCounter}>Delete</button>
                </div>
            </div>
      </div>
    )
}

export default Wrapper;
