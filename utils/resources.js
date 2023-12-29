const rssBase = {
    food: 1,
    stone: 1,
    wood: 1,
    ore: 1,
    gold: 1,
}

export const rssConversion = {
    farm: 'food',
    lumber: 'wood',
    quary: 'stone',
    mine: 'ore',
    gold: 'gold',
};

// this is how much the building makes per hour
export const perHour = ({ asset, buildingLvl }) => {
    return rssBase[asset] * buildingLvl;
};

export const calculateAmounts = () => {
    // TODO do not include plots under construction
    const plots = JSON.parse(window.localStorage.getItem("plots")) || [];
    const rss =  JSON.parse(window.localStorage.getItem("resources"));

    let tmpCookie = [];
    let subTotals = {
        food: 0,
        wood: 0,
        stone: 0,
        ore: 0,
        gold: 0,
    };

    // get existing amounts from cookie
    Object.keys(subTotals).map(st => {
        const index = rss.map((o) => o.name).indexOf(st);
        subTotals[st] = rss[index].amount;
    });

    // TODO
    // if the app was closed...
    // get time away and figure out missing amounts
    // add to subtotals

    // get perHour for each resource plot
    plots.map(p => {
        const building = p.building.split('_')[0];
        const buildingLvl = p.building.split('_')[1];
        const asset = rssConversion[building] || '';

        if (asset) { // if it is a resource building (not army for example)        
            subTotals[asset] = subTotals[asset] + perHour({ asset, buildingLvl })/60;
        }
    });

    // build new cookie
    Object.keys(subTotals).map(st => {
        const bc = buildCookie({ asset: st, amount: Math.ceil(subTotals[st])});
        tmpCookie.push(bc);
    });

    // add cookie
    window.localStorage.setItem("resources", JSON.stringify(tmpCookie));

    // fire window event
    window.dispatchEvent(new Event("rssStorage"));
};

const buildCookie = ({ asset, amount} ) => {
    return {name: asset, amount: amount};
};

// used to initalize resource cookie. One time run
const addRssCookies = () => {
    let cookieArray = [];
    Object.keys(rssConversion).map(r => {
        const newCookie = buildCookie({ asset: rssConversion[r], amount: 0 });
        cookieArray.push(newCookie);
    });
    window.localStorage.setItem("resources", JSON.stringify(cookieArray));
            
    calculateAmounts();
};

// runs on load to get correct amounts befor interval starts
// also checks if the resource cookie exists yet (i.e. first run)
export const updateRssCookie = () => {
    const cc = JSON.parse(window.localStorage.getItem("resources"));
    if (!cc) {
        return addRssCookies();
    } else {
        calculateAmounts();
    }
};
