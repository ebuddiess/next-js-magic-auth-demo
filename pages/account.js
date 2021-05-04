import React , {useContext , useState  , useRef , useEffect} from 'react'
import AuthContext from '../context/AuthContext'
import {API_URL} from '../utils/urls'



export default function account() {
    const authCtx = useContext(AuthContext)
    const [orders, setorders] = useState([])
    useEffect( () => {

        const fetchOrders = async () => {
            if(authCtx.user){
                try {
                    const token = await authCtx.getToken()
                    const orders_res = await fetch(`${API_URL}/orders`, {
                        headers :{
                            'Authorization' : `Bearer ${token}`
                        }
                    })
  
                    const data = await orders_res.json()
                    setorders(data)
  
                } catch (error) {
                    setorders([])
                }
            }
        }
  
        fetchOrders()
  
      }, [authCtx.user])

    console.log(orders)


    return (
        <>
        <div className='jumbotron m-2 bg-primary text-white'>
         <div className='container'> MY ACCOUNT <p>LOGGED IN AS {authCtx.user} </p></div>
        </div>
         <div className='container text-dark'>ORDERS</div>
         { orders.map( order => <div className="flex" key={order.id}>
             <div className="container bg-grey">
                 <h3>{order.product.name}</h3>
                 <h3>{order.total}</h3>
                 <h3>{order.status}</h3>
            </div>
         </div> )}
        </>
    )
}


