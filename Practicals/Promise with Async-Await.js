
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let user = { UName: "Vignesh", Address: "Coimbatore" };

        if (Object.keys(user).length !== 0) {
            resolve(user);
        } else {
            reject("User object is empty");
        }
    }, 3000);
});

async function getData() {
    try {
        let userInfo = await promise;
        console.log(userInfo);
    } catch (errMsg) {
        console.log(errMsg)
    }
}

getData();