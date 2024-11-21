const {testLogin} = require ('../command/login.js');

async function ArtilleryScript(page, vuContext, events, test) {

events.emit("counter", `user.${vuContext.scenario.name}.page_loads`, 1);

await test.step('LoginStep', async() =>{

    await testLogin(page);
})

await test.step('SecondLoginStep' , async() =>{

    console.log('Just to indicate second step');
})

   await testLogin(page);
    
}
module.exports = {

    ArtilleryScript
}; 