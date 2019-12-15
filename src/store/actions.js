import * as eventService from '../services/EventService'

export function getEvents({ commit }) {
    return new Promise((resolve, reject) => {
        eventService
            .getEvents()
            .then(data => {
                resolve()
                commit('SET_EVENTS', data)
            })
            .catch(error => reject(error))
    })
}

export function setEvents({ commit }, events) {
    commit('SET_EVENTS', events)
}