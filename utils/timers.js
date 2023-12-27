import { capFirstLetter } from "./strings";

export const oneDay = 1000 * 60 * 60 * 24 * 1;
export const oneHour = 1000 * 60 * 60 * 1;
export const oneMinute = 1000 * 60 * 1;

export const nowStamp = new Date().getTime();

export const later = ({ days = 0, hours = 0, minutes = 0, seconds = 0 }) => {
    const futureTime = (oneDay * days) + (oneHour * hours) + (oneMinute * minutes) + (1000 * seconds);

    return (new Date().getTime() + futureTime) * 1;
};

const timerMultiplier = {
    construction: 4,
    research: 4,
    gathering: 3,
    traveling: 1,
}

const timerBase = {
    construction: 10,
    research: 20,
    gathering: 15,
    traveling: 10,
}

const buildCost = ({ asset, buildingLvl, heroLvl }) => {
    const buildingFee = timerMultiplier[asset] * buildingLvl;
    const heroDeduction = timerMultiplier[asset] * (heroLvl * 0.1);
    return timerBase[asset] * (buildingFee - heroDeduction); 
};

export const buildCookie = ({ asset, buildingLvl = 1, heroLvl = 1} ) => {
    const cost = buildCost({asset, buildingLvl, heroLvl});
    return {name: capFirstLetter(asset), targetDate: later({seconds: cost})};
};

export const updateTimerCookie = ({ method = 'add', asset, buildingLvl, heroLvl}) => {
    const cc = JSON.parse(window.localStorage.getItem("timers")) || [];
    const index = cc.map((o) => o.name).indexOf(capFirstLetter(asset));

    if (method === 'add' && index === -1) {
        const uc = buildCookie({asset, buildingLvl, heroLvl});
        cc.push(uc);
        window.localStorage.setItem("timers", JSON.stringify(cc));
    } else if (method === 'delete' && index >= 0) {
        cc.splice(index, 1);
        window.localStorage.setItem("timers", JSON.stringify(cc));
    }

    window.dispatchEvent(new Event("timerStorage"));
};

export const findTimerByName = ({ name }) => {
    console.log('name', name)
    const timers = window.localStorage.getItem("timers");
    console.log('timers', timers)
    const timer = JSON.parse(timers);
console.log('timer', timer)
    const index = timer.map((o) => o.name).indexOf(name);
    console.log('index', index)
    return index >= 0 ? timer.splice(index, 1) : null;
};
