import { updateTimerCookie } from './timers';

const buildingMultiplier = {
    barracks: 4,
    hospital: 4,
    farm: 3,
    quary: 1,
    mine: 4,
    lumber: 3,
}

const buildingBase = {
    barracks: 4,
    hospital: 4,
    farm: 3,
    quary: 1,
    mine: 4,
    lumber: 3,
}

const buildingProduction = ({ asset, buildingLvl, heroLvl }) => {
    const buildingFee = buildingMultiplier[asset] * buildingLvl;
    const heroBonus = buildingMultiplier[asset] * (heroLvl * 0.1);
    return buildingBase[asset] * (buildingFee + heroBonus);
};

const buildCookie = ({ plot, asset, buildingLvl = 1 } ) => {
    return {plot: plot, building: asset + "_" + buildingLvl};
};

export const updatePlotsCookie = ({ method, plot, asset, buildingLvl, heroLvl}) => {
    const cc = JSON.parse(window.localStorage.getItem("plots")) || [];
    const index = cc.map((o) => o.plot).indexOf(plot);

    if (method === 'add' && index === -1) {
        const uc = buildCookie({plot, asset, buildingLvl});
        cc.push(uc);
        window.localStorage.setItem("plots", JSON.stringify(cc));
        updateTimerCookie({asset: 'construction', buildingLvl: buildingLvl, heroLvl: heroLvl, plot: plot});
    } else if (method === 'update' && index >= 0) {
        cc.splice(index, 1);
        const uc = buildCookie({plot, asset, buildingLvl});
        cc.push(uc);
        window.localStorage.setItem("plots", JSON.stringify(cc));
        updateTimerCookie({asset: 'construction', buildingLvl: buildingLvl, heroLvl: heroLvl, plot: plot});
    } else if (method === 'delete' && index >= 0) {
        cc.splice(index, 1);
        window.localStorage.setItem("plots", JSON.stringify(cc));
    }

    window.dispatchEvent(new Event("plotStorage"));
};

export const findBuildingByPlot = (plot) => {
    const buildings = window.localStorage.getItem("plots");
    const building = JSON.parse(buildings);
    const index = building.map((o) => o.plot).indexOf(plot);

    return index >= 0 ? building.splice(index, 1) : null;
};

