const dividePromise = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("E:: Division by zero")
        } else {
            resolve(num1/num2)
        }
    })
}

/**
 * @author Anup Prasad
 * @param {Promise} promise 
 */
function logPromise (promise) {
    promise.then((value) => {
        console.log("Result: ", value);
    }).catch((error) => {
        console.log(error);
})}

logPromise(dividePromise(3, 0))
logPromise(dividePromise(183, 89))
logPromise(dividePromise(31, 40))
logPromise(dividePromise(32, 0))
logPromise(dividePromise(63, 40))