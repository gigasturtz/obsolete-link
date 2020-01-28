const fetch = require('node-fetch')

export function getEvents() {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.VUE_APP_GATEWAY_BASE_URL}/event`)
            .then(response => {
                resolve(response.json())
            })
            .catch(error => { reject(error) })
    })
}

export function addEvent(event) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(event)
        fetch(`${process.env.VUE_APP_GATEWAY_BASE_URL}/event`,
            {
                method: 'post',
                body: data,
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => {
                resolve(response.json())
            })
            .catch(error => { reject(error) })
    })
}   