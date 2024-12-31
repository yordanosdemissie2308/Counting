"use client";
import { createContext, useState, useContext } from "react";

interface TimerContextType {
    start: number;
    isPaused: boolean;
    handleTimer: () => void;
    resetTimer: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

const TimerProvider = ({ children }: { children: React.ReactNode }) => {
    const [start, setStart] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | undefined>(undefined);

    const handleTimer = () => {
        if (isPaused) {
            setIsPaused(false);
            const interval = setInterval(() => {
                setStart((prevStart) => prevStart + 1);
            }, 1000);
            setTimerInterval(interval);
        } else {
            setIsPaused(true);
            if (timerInterval) {
                clearInterval(timerInterval);
                setTimerInterval(undefined);
            }
        }
    };

    const resetTimer = () => {
        setStart(0);
        setIsPaused(false);
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        setTimerInterval(undefined);
    };

    return (
        <TimerContext.Provider value={{ start, isPaused, handleTimer, resetTimer }}>
            {children}
        </TimerContext.Provider>
    );
};

const useTimer = (): TimerContextType => {
    const context = useContext(TimerContext);
    if (!context) {
        throw new Error("useTimer must be used within a TimerProvider");
    }
    return context;
};

export { TimerProvider, useTimer };
