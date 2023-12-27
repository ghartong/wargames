const ConstructionUpgradeMenu = ({ plot, building }) => {
    const buildingName = building.split('_')[0];
    const buildingLevel = building.split('_')[1];

    const handleUpgrade = () => {
        // TODO need validation for gold, timers, etc
        console.log('clicked handleUpgrade')

        // TODO build upgrade functionaliy
    };

    return (
        <div>
            <h4>Construction Upgrade Menu</h4>
            {buildingName}<br />
            current lvl: {buildingLevel}<br />
            area: {plot}<br />
            <button onClick={handleUpgrade}>Upgrade to lvl {buildingLevel * 1 + 1} - $79999</button>
        </div>
    );
};

export default ConstructionUpgradeMenu;
