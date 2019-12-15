const fetch = require('node-fetch')

export function getEvents() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/event')
        .then(response => {
            resolve(response.json())
        })
        .catch(error => reject(error))
    })
}