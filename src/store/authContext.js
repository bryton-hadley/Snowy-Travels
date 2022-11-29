import { useState, useEffect, useCallback, createContext } from "react";

let logoutTimer

const AuthContext = createContext({
    token:'',
    login: () => {},
    logout: () => {},
    userId: null,
    username: null
})

const calculateRemaining = (exp) => {
    const currentTime = new Date().getTime()
    const expTime = exp
    const remainingTime = expTime - currentTime
    return remainingTime
}

const getLocalData = () => {
    const storedToken = localStorage.getItem('token')
    const storedExp = localStorage.getItem('exp')
    const storedUserId = localStorage.getItem('userId')
    const storedUsername = localStorage.getItem('username')

    const remainingTime = calculateRemaining(storedExp)

    if(remainingTime <= 1000 * 60 * 30){
        localStorage.removeItem('token')
        localStorage.removeItem('expTime')
        localStorage.removeItem('userId')
        localStorage.removeItem('username')
        return null

    }

    // dicipher
    return {
        token: storedToken,
        exp: storedExp,
        userId: storedUserId,
        username: storedUsername,
        duration: remainingTime
    }
}

export const AuthContextProvider = (props) => {
    let localData = getLocalData()
    let initialToken
    let initialUserId
    let initialUsername

    if(localData){
        initialToken = localData.token
        initialUserId = localData.userId
        initialUsername = localData.username

    }

    const [token, setToken] = useState(initialToken)
    const [userId, setUserId] = useState(initialUserId)
    const [username, setUsername] = useState(initialUsername)

    const logout = useCallback(() => {
        
        setToken(null)
        setUserId(null)
        setUsername(null)

        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('expTime')
        localStorage.removeItem('username')

        if(logoutTimer){
            clearTimeout(logoutTimer)
        }
    }, [])

    const login = ({token, userId, username, exp}) => {
        console.log('hit login')
        setToken(token)
        setUserId(userId)
        setUsername(username)
        console.log(token)

        localStorage.setItem('token', token)
        localStorage.setItem('userId', +userId)
       
        localStorage.setItem('username', username)
        localStorage.setItem('exp', exp)

        // add logic to calculate expiration time 
        const remainingTime = calculateRemaining(exp)
        console.log(remainingTime)
        logoutTimer = setTimeout(logout, remainingTime)
    
    }
    useEffect(() => {
        if(localData){
            // console.log('hit useEffect', localData)
            logoutTimer = setTimeout(logout, localData.duration)
        }
    },[localData, logout])

    const contextValue = {
        token,
        userId,
        username,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )

}


export default AuthContext