const getEmployeeId = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject("Some error occurred");
        resolve(Math.floor(Math.random() * 10))
    }, 1000);
})

const getEmployeeDetails = id => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(id > 5 && false) {
            reject("Some error occurred, Employee Details doesn't exist")
        }
        else {
            resolve({
                name: "Rahul",
                age: 23
            })
        }
    }, 1000)
})


async function employeeMap() {
    console.log("Debug")
    try {
        let id = await getEmployeeId();
        let details = await getEmployeeDetails(id);
        // console.log({ id, details })
        return details
    }
    catch(error) {
        console.error(error)
    }
}

employeeMap().then(details => {
    console.log('Employee Details: ', details)
})

// getEmployeeId()
// .then(id => {
//     console.log(`Id: ${id}`);
//     return getEmployeeDetails(id)
// })
// .then(details => {
//     console.log(details);
// })
// .catch(error => {
//     console.error(error)
// })

// Promise.all([ getEmployeeId(), getEmployeeId() ])
// .then(response => {
//     console.log(response);
// })