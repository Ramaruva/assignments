/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const sleepprom = new Promise((resolve,reject)=>{
         for(let i=0;i<milliseconds*1000000000;i++){
             
         }
         resolve();
    })
    return sleepprom;
}

module.exports = sleep;
