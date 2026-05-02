const School = require('./school');

const school = new School();

// register a listener for bellring event
school.on('bellRing',(period)=>{
    console.log(`We have to run because ${period}`);
});

school.startPeriod();

