import { useState } from 'react';
import { updatePlotsCookie } from "../../utils/buildings";
import { findTimerByName } from "../../utils/timers";

const ConstructionUpgradeMenu = ({ plot, building, onClose }) => {
    const [errMsg, setErrMsg] = useState('');
    const buildingName = building.split('_')[0];
    const buildingLevel = building.split('_')[1];

    const handleUpgrade = () => {
        // TODO need validation for gold, timers, etc

        const hasExistingTimer = !!findTimerByName({name: 'Construction'});
        if (hasExistingTimer) {
            setErrMsg('There is already a construction happening.');
        } else {
            // TODO get real hero level
            updatePlotsCookie({
                method: 'update',
                plot: plot,
                asset: 'Construction',
                buildingLvl: (buildingLevel * 1 + 1),
                heroLvl: 1
            });
            onClose();
        }
    };

    return (
        <div>
            <h4>Construction Upgrade Menu</h4>
            {errMsg}<br />
            {buildingName}<br />
            current lvl: {buildingLevel}<br />
            area: {plot}<br />

            <button onClick={handleUpgrade}>Upgrade to lvl {buildingLevel * 1 + 1} - $79999</button>
        </div>
    );
};

export default ConstructionUpgradeMenu;
