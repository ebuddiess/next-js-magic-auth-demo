import {useState , Fragment} from 'react' ;
import { API_URL } from '../utils/urls'


import Products from '../componenets/Products';





export default function Home(props) {
  const [products ,setproducts] = useState(props.products)

  return (
   <Fragment >
      <h3 className="text-center p-4">COURSES LIST</h3>
      <div className="d-flex flex-row flex-wrap">
      { products.map(product => <Products product={product} key={product.id} /> ) }
    </div>
   </Fragment>
  )

}

export async function getStaticProps(){
  const products_res = await fetch(`${API_URL}/products`)
  const products = await products_res.json()
  return {
      props : {
          products
      }
  }
}

