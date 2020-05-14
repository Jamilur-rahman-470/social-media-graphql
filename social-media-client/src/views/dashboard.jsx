import React from 'react'
import { connect } from 'react-redux'
import { getUserById } from '../store/action/auth-action'

 const Dashboard = ({getUser, user, auth}) => {
    return (
        <div>
            {user.profile.username}
        </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return {
        getUser: (id) => dispatch(getUserById(id))
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
        auth: state.auth
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)