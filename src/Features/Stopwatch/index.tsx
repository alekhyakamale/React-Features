import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function Stopwatch():React.ReactElement{
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [timerFlag, setTimerFlag] = useState(false);
    const minutes = Math.floor(elapsedSeconds / 60)
    const seconds = elapsedSeconds % 60

    useEffect(() => {
        if(!timerFlag) return;
        const timer = setInterval(() => {
            setElapsedSeconds(prev => prev+1)
        }, 1000)
        return () => clearInterval(timer)
    }, [timerFlag]);


    return (
        <>
            <Button variant="contained" color="primary" sx={{ mr: 1 }} onClick={() => setTimerFlag(true)}>
                Start
            </Button>
            <Button variant="outlined" color="primary" onClick={() => setTimerFlag(false)}>
                Stop
            </Button>
            <Button variant="outlined" color="primary" onClick={() => {
                setTimerFlag(false)
                setElapsedSeconds(0)
            }}>
                Reset
            </Button>
            <div>
                <p>{minutes} : {seconds}</p>
            </div>
        </>
    );
}