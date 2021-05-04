import React from 'react'
import {fromImageToUrl} from '../../utils/urls'
import Link from 'next/link'
import Head from 'next/head'
import {API_URL} from '../../utils/urls'


export default function Product(props) {

    const product = props.product;

    return (

        <div className="container m-auto">
             <Head>
            { product.meta_title && <title>{product.meta_title}</title>}
            { product.meta_description && <meta name='description'  content={product.meta_description} />}
           </Head>
            <div className="jumbotron p-4">
                <h3 className="mb-4">{product.name}</h3>
                <img src={fromImageToUrl(product.image)}  style={{width:"100%"}}/>
                <div className="card m-2 p-2">
                    <h3>{product.content}</h3>
                    <h4> ₹{product.price}</h4>
               
                <Link href= { `/products/${product.slug}`} ><a className="btn btn-primary mt-4">BUY</a></Link>

                </div>
            </div>
        </div>
    )
}



export async function getStaticProps(context){
    const {params} = context ;
    const slug = params.slug ;
    const products_res = await fetch(`${API_URL}/products/?slug=${slug}`)
    const product = await products_res.json()
    
    if(product.length===0){
        return {
            notFound: true,
        }
    }

    return {
        props : {
            product : product[0]
        }
    }
  }
  

  export async function getStaticPaths(){
    return {
        paths: [],
        fallback: 'blocking'
      }
  }
  