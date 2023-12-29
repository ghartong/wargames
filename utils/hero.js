export const initHero = () => {
    console.info('looking for a hero...')
    const cc = JSON.parse(window.localStorage.getItem("hero")) || {};

    if (cc.name) {
        console.info('...found Bob. I guess that will do.')
        return true;
    } else {
        console.info('None to be found. Guess I will create one.')
        const bob = {
            name:'Bob',
            lvl: 1,
            xp: 1,
            might: 500,
        }
        window.localStorage.setItem("hero", JSON.stringify(bob));
    }
};

export const updateHeroStat = ({ stat, value }) => {
    console.log('By the power of Greyskull...')
    const bob = JSON.parse(window.localStorage.getItem("hero"));
    const newBob = {...bob, [stat]: value};

    window.localStorage.setItem("hero", JSON.stringify(newBob));
    window.dispatchEvent(new Event("heroStorage"));
};
