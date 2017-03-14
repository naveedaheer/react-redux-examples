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

export function Search(data) {
     console.log("Auth action ", data)
    return {
        type: "find",
        value: data
    }
}