import Link from 'next/link'
import Head from 'next/head'
import {Fragment} from 'react'



import {fromImageToUrl , API_URL } from '../utils/urls'


export default function Products(props) {
    const {product} = props ;
    
    return (
    <Fragment>        
        <Head>
        </Head>
        <div className="container mt-2">
            <div className='jumbotron p-4'>
                    <img  style={{width:"100%" , height:"200px" , objectFit:"cover"}} src={fromImageToUrl(product.image)} />
                <h1 className="mt-4 pl-4  mb-4 flex-grow-1 ">{product.name}</h1>
                <h3> ₹{product.price}</h3>
                <Link href= { `/products/${product.slug}`} ><a className="btn btn-primary">BUY</a></Link>
            </div>

        </div>
        </Fragment>

    )
}

