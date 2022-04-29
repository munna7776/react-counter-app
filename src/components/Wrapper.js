import React, { useEffect, useState } from 'react';
import Counter from './Counter';

const Wrapper = () => {
    const [count , setCount] = useState('');
    const [startFrom , setStarFrom] = useState(0);
    const [timer , setTimer] = useState(null);
    const [showCounter , setShowCounter] = useState(true);

    useEffect(()=>{
        handleStartCounter();

        return () => clearInterval(timer)
    },[handleStartCounter])

    const handleChange = (e) => {
        setCount(e.target.value)
    }

    const handleResetCounter = () => {
        setStarFrom(Number(count));
        setShowCounter(true)
        if(timer) {
            clearInterval(timer)
        }
    }

    const handleStartCounter = () => {
        handleResetCounter();
        setTimer(setInterval(() => {
            setStarFrom(prevStart => prevStart + 1)
        }, 1000));
    }

    const handleStopCounter = () => {
        clearInterval(timer)
    }

    const handleRemoveCounter = () => {
        setCount('');
        setStarFrom(0);
        clearInterval(timer);
        setShowCounter(false)
    }

    return (
        <div className="container">
            <div className="card">
                {showCounter && <Counter startFrom={startFrom} />}
                <input type="number" placeholder="Enter..." value={count} onChange={handleChange} />
                <div className="btn-group">
                    <button className="btn" onClick={handleStartCounter}>Start</button>
                    <button className="btn" onClick={handleStopCounter}>Stop</button>
                    <button className="btn" onClick={handleRemoveCounter}>Delete</button>
                </div>
            </div>
      </div>
    )
}

export default Wrapper;
