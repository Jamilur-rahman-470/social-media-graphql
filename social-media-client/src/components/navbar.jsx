import React, { useState } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/action/auth-action'

 const Navbar = ({auth, logout}) => {
    
    const authLinks = () =>{
        return (
            <ul>
                <li>
                    <a href="/dashboard">Dahsboard</a>
                </li>
                <li>
                    <button onClick={()=> logout()}>Logout</button>
                </li>
            </ul>
        )
    }

    const unAuthLinks = () => {
        return (
            <ul>
                <li>
                    <a href="/sign-in">Sign In</a>
                </li>
                <li>
                    <a href="/sign-up">Sign Up</a>
                </li>
            </ul>
        )
    }
    return (
        <div className='navbar'>
            <div className="brand">
                Social - GraphQL
            </div>
            <div className="links">
                {
                    auth.isAuth === true ? authLinks() : unAuthLinks() 
                }
            </div>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
      auth: state.auth,
    };
}
const mapDispatchToProps = dispatch =>{
    return {
        logout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)