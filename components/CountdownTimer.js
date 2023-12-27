import { useCountdown } from "../hooks/useCountdown";
import { updateTimerCookie } from '../utils/timers';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            {days}:{hours}:{minutes}:{seconds}
        </div>
    );
};

const handleExpired = (asset) => {
    updateTimerCookie({method: 'delete', asset: asset });
};

const CountdownTimer = ({ targetDate, asset }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    if (targetDate < new Date()) {
        handleExpired(asset);
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;
