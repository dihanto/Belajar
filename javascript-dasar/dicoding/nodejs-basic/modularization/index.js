const Tiger = require('./Tiger')
const Wolf = require('./Wolf')


const figthing = (tiger, wolf) => {
    if(tiger.strength > wolf.strength){
        tiger.growl();
        return;
    }

    if(tiger.strength < wolf.strength){
        wolf.roar();
        return;
    }

    console.log('Wolf and Tiger have same strength');

}

const tiger = new Tiger();    
const wolf = new Wolf();

figthing(tiger, wolf);