import { useState } from "react";

import Modal from "./Modal";
import NewConstructionMenu from './menus/NewConstructionMenu';
import Building from "./Building";

import styles from './landingPad.module.css';

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
