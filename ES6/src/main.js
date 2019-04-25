const minhaPromise = () => new Promise((resolve,reject) =>{
    setTimeout(() => {resolve('Ok'), 2000});
});

async function executePromise(){
    const response = await minhaPromise();
}