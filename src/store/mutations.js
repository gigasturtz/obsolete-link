export function SET_EVENTS(state, events) {
   state.events = events
}

export function ADD_EVENT(state, event) {
    state.events.push(event)
}