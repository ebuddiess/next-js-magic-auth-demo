import {createContext , useState , useEffect} from 'react'
import {useRouter} from 'next/router'
import {Magic} from 'magic-sdk'
import {MAGIC_API_URL} from '../utils/urls'

let magic ;

const AuthContext = createContext()

export const AuthState = props => {

    const checkUserLoggedIn = async () => {
        try {
            const isLoggedin  = await magic.user.isLoggedIn()
            console.log(isLoggedin)
      
            if(isLoggedin){
                const { email } = await magic.user.getMetadata()
                setUser(email)
                setloading(false)
               
            }
        } catch (error) {
            console.log(error)
        }
       }
   
 useEffect(() => {
    magic =  new Magic(MAGIC_API_URL)
    checkUserLoggedIn()
 } , []) 

 const [user, setUser] = useState(null)
 const router = useRouter()
 const [loading, setloading] = useState(true)

 /**
  * 
  * returns the magic token that allow user to make request
  */
 const getToken = async() => {
     try {
         const token = await magic.user.getIdToken()
         return token
     } catch (error) {
         
     }
 }

 const loginUser = async email => { 
     try {
         await magic.auth.loginWithMagicLink({email})
         setUser({email})
         router.push("/")
     } catch (error) {
         setUser(null)
     }
 }

 const logout = async() => { 
    try {
        await magic.user.logout()
        setUser(null)
        router.push("/")
    } catch (error) {
        console.log(error)
    }
 }

return (
    <AuthContext.Provider value= {{user , loginUser , logout , checkUserLoggedIn , loading , getToken}}>
    { props.children} 
    </AuthContext.Provider>
   )
}

export default AuthContext