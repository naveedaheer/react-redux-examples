export function signIn(user) {
    return {
        type: "signin",
        value: user
    }
}
export function Loggedin(user) {
    return {
        type: "loggedin",
        value: user
    }
}
