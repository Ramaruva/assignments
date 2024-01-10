/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {

    const wait1Promise = new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, t * 1000);
    })
    return wait1Promise;

}

function wait2(t) {
    const wait2Promise = new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, t * 1000);
    })
    return wait2Promise;

}

function wait3(t) {

    const wait3Promise = new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, t * 1000);
    })
    return wait3Promise

}

function calculateTime(t1, t2, t3) {
   const pr1 = wait1(t1),pr2=wait2(t2),pr3=wait3(t3);
   const startTime = performance.now();
   return Promise.all([pr1,pr2,pr3]).then((value)=>{
    const endTime = performance.now();
    return endTime-startTime;
   });
}

async function sample(){
    const s = await calculateTime(0,1,2);
    console.log(s);
}
sample();
module.exports = calculateTime;
