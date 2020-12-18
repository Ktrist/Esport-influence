export default function(token = "", action){
    if(action.type === 'addToken'){
        console.log("ADDTOKEN", action.token)
        return action.token
    } else {
        console.log("REMOVE TOKEN", token )
        return token
    }
}