import { useState } from "react";

import Modal from "./Modal";
import ConstructionUpgradeMenu from "./menus/ConstructionUpgradeMenu";
import NewConstructionMenu from './menus/NewConstructionMenu';

import { capFirstLetter } from "../utils/strings";

import styles from './landingPad.module.css';

const Building = (props) => {
    const { plot, building} = props;
    const [isOpen, setIsOpen] = useState(false);
    const buildingName = building.split('_')[0];
    const buildingLevel = building.split('_')[1];

    const openModal = ( ) => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <h4>{capFirstLetter(buildingName)} (lvl {buildingLevel})</h4>
            (add "under construction" here)<br /><br />
            <button onClick={openModal}>building svg here</button>
            <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
                <ConstructionUpgradeMenu plot={plot} building={building} />
            </Modal>
        </div>
    );
};

const LandingPad = ({ plot, building }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = ( ) => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.container}>
            {building ?
                <Building plot={plot} building={building} />
                :
                <>
                    <button id="openModal" type="button" onClick={openModal}>Build {plot}</button>
                    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
                        <NewConstructionMenu plot={plot} />
                    </Modal>
                </>
            }
        </div>
    );
};

export default LandingPad;

// need empty state
// need to be clickable when empty
// can only build correct asset type
   // resource areas: lumber mill, farm, etc
   // army area: barracks, hospitals
