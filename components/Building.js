import { useEffect, useState } from "react";

import ConstructionUpgradeMenu from "./menus/ConstructionUpgradeMenu";
import Modal from "./Modal";

import { findTimerByName } from "../utils/timers";
import { capFirstLetter } from "../utils/strings";

const Building = (props) => {
    const { plot, building} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isUnderConstruction, setUnderConstruction] = useState(false);
    const buildingName = building.split('_')[0];
    const buildingLevel = building.split('_')[1];

    const checkConstruction = () => {
        const timer = findTimerByName({name: 'Construction' }) || [];
        if (timer) {
            setUnderConstruction(!!(timer[0]?.plot === plot));
        }    
    };

    useEffect(() => {
        checkConstruction();
    }, []);

    useEffect(() => {
        window.addEventListener('timerStorage', () => {
            checkConstruction();
        })
    }, []);
   
    const openModal = ( ) => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <h4>{capFirstLetter(buildingName)} (lvl {buildingLevel})</h4>
            {isUnderConstruction ?
                <span>Under Construction</span>
                :
                <button onClick={openModal}>building svg here</button>
            }
            <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
                <ConstructionUpgradeMenu plot={plot} building={building} onClose={onClose} />
            </Modal>
        </div>
    );
};

export default Building;
