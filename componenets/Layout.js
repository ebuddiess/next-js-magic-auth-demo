import {Fragment} from 'react'
import Nav from './Nav'



export default function Layout(props) {
    
    return (
        <Fragment>
            <Nav />
            <main>{props.children}</main>
        </Fragment>

    )
}
