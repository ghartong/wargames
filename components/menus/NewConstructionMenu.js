import { useState } from "react";
import { BUILDING_TYPES } from "../../constants/buildingTypes";
import { updatePlotsCookie } from "../../utils/buildings";
import { findTimerByName } from "../../utils/timers";

const BuildingMenu = ({ plot }) => {
    const [errMsg, setErrMsg] = useState('');
    const plotType = plot.split('_')[0];
    const plotPosition = plot.split('_')[1];
    const buildingOptons = BUILDING_TYPES[plotType];

    const handleStorage = (opt) => {
        const hasExistingTimer = !!findTimerByName({name: 'Construction'});
        if (hasExistingTimer) {
            setErrMsg('There is already a construction happening.');
        } else {
            // TODO get real hero level
            updatePlotsCookie({method: 'add', plot: plot, asset: opt, buildingLvl: 1, heroLvl: 1});
        }
    };

    const optionsList = buildingOptons.map(opt => {
        return <li key={opt}><button onClick={() => handleStorage(opt)}>{opt}</button></li>
    });

    return (
        <div>
            Building Menu<br />
            {plot} - plot<br />
            {errMsg.length > 0 && <span>{errMsg}</span>}
            <ul>
               {optionsList}
            </ul>
        </div>
    );
};

export default BuildingMenu;