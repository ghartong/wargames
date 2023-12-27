import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
    const countdownDate = new Date(targetDate).getTime();

    const [timer, setTimer] = useState(countdownDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(countdownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval)
    }, [countdownDate]);

    return getReturnValues(timer);
};

const getReturnValues = (timer) => {
    const days = Math.floor(timer / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
    const hours = Math.floor(timer % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)).toString().padStart(2, "0");
    const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
    const seconds = Math.floor((timer % (1000 * 60)) / 1000).toString().padStart(2, "0");
  
    return [days, hours, minutes, seconds];
};

export { useCountdown };
