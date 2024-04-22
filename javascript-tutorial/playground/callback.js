const getEmployeeIdWithCallback = (callback) => {
  setTimeout(() => {
    callback(Math.floor(Math.random() * 10));
  }, 1000);
};

// const getEmployeeDetailsWithCallback = (id, callback) => {
//     setTimeout(() => {
//         callback({
//             id,
//             name: 'Rahul',
//             age: 23
//         })
//     }, 1000)
// }

// getEmployeeIdWithCallback(id => {
//     console.log('ID: ', id)
//     getEmployeeDetailsWithCallback(id, details => {
//         console.log('Employee Details: ', details)
//         //
//     })
// })
