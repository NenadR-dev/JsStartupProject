async function WhoAmI() {
    let myPromise = new Promise(function(response,error) {
        setTimeout(() => {response('Nenad Radulovic');}, 1000)
    })
    console.log(await myPromise);
}

WhoAmI();


ArrowAsyncFun = async() => {
    new Promise(function(response,error){
        setTimeout(() => {response("Success!");}, 500)
    }).then(response => console.log(response))
        .catch(err => console.log('Error!')); 
}

ArrowAsyncFun();