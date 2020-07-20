export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log("Redeucer Increment Ok");
            return state + 1
        case "DECREMENT":
            console.log("Redeucer Decrement Ok");
            return state - 1
        default:
            return state
    }
}