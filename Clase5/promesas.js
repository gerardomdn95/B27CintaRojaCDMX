// const promise = new Promise((resolve, reject) => {
//     const number = Math.floor(Math.random() * 10);

//     console.log(number);

//     // Evaluar si un número es mayor a 5
//     setTimeout(() => {
//         if(number >= 5) {
//             resolve(number);
//         } else {
//             reject(new Error(`${number} es menor a 5`));
//         }
//     }, 3000);
// });

// promise
//     .then(number => console.log(number))
//     .catch(error => console.error(error));

const isMomHappy = false;

const willGetNewPhone = new Promise (
    (resolve, reject) => {
        if(isMomHappy) {
            const phone = {
                brand: 'iPhone',
                color: 'Golden pink'
            }
            resolve(phone);
        } else {
            const reason = new Error('Mom is not happy');
            reject(reason);
        }
    }
);

const showPhone = async(phone) => {
    return new Promise(
        (resolve, reject) => {
            if(phone) {
                const message = `Hey look my new ${phone.color} ${phone.brand}`;
                resolve(message);
            } else {
                reject(new Error('I have no phone.'));
            }
        }
    )
}

const askMom = async () => {
    try {
        console.log('Before asking mom.');

        let phone = await willGetNewPhone;
        let message = await showPhone(phone);

        console.log(message);

        console.log('After asking mom.');
    } catch (error) {
        console.log(error)
    }
}

(async () => {
    await askMom();
})();
