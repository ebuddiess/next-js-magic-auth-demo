import React , {useContext , useRef} from 'react'
import Link from 'next/link'
import AuthContext from '../context/AuthContext'


export default function Nav() {
    const authCtx = useContext(AuthContext)
    const {user , loading} = authCtx
    const emailref = useRef(null)

    const loginHandler = (e) => { 
        e.preventDefault()
        const email =  emailref.current.value
        
        authCtx.loginUser(email)
    }

    const logoutHandler = (e) => { 
        e.preventDefault()
        authCtx.logout()
    }

   const beforeLoading = (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    {/* Brand */}
   <Link href="/"><a className="navbar-brand" >ECOMMERCE WEBSITE</a></Link>
   </nav>
   )

    const afterLoading = (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      {/* Brand */}
     <Link href="/"><a className="navbar-brand" >ECOMMERCE WEBSITE</a></Link>
     <ul className="navbar-nav">
   { user ?  (<li className="nav-item form-inline">
  <h3 className="nav-link">{user.email}</h3> 
  <Link href="/account"><a className="navbar-link navbar-brand" >MY ACCOUNT</a></Link>
  <button className="btn btn-success ml-2 form-control btn-sm" type="submit" onClick={logoutHandler}>Logout</button>

</li>) :  (<li className="nav-item">
<form className="form-inline">
<div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text">@</span>
  </div>
  <input type="text" className="form-control" placeholder="EMAIL" ref={emailref} />
  <button className="btn btn-success ml-2" type="submit" onClick={loginHandler}>LOGIN</button>
</div>
</form>
</li>)}
</ul>

</nav>
    )

    return (
     <> 
      { loading ? beforeLoading : afterLoading  }
     </>
      )
}
