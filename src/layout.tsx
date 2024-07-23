import React from 'react'
import HomePage from './pages/HomePage'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onLogin, onLogout } from './redux/slices/auth-slice'

const Layout : React.FC<{
    children: React.ReactNode
}> = ({children}) => {

  const dispatch = useDispatch();

  const isLogin = useSelector((state : any) => state.auth.isLogin)
  const username = useSelector((state : any) => state.auth.username)

  return (
    <div>
        <div>
          <h1>This is Layout</h1>
          <div style={{display:'flex',gap:10}}>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/about-us">AboutUs</Link></div>
              <div>
                {isLogin ? (
                  <button onClick={()=>dispatch(onLogout())}>Logout</button>
                ) : (
                  <button onClick={()=>dispatch(onLogin("Admin"))}>Login</button>
                )}
                
              </div>
              <div>{isLogin && (<>{username}</>)}</div>
          </div>
        </div>
        <div>{children}</div>
    </div>
  )
}

export default Layout