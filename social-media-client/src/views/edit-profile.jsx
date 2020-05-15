import React, { useState } from 'react'
import { updateUser } from '../store/action/user-action'
import {connect} from 'react-redux'

const EditProfile = ({auth, updateUser}) => {

    const [user, setUser] = useState({
        name: '',
        address: {
            city: '',
            country: '',
        },
        bio: '',
        social: {
            youtube: '',
            linkedin: '',
            facebook: '',
            twitter: ''
        }
    })
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () =>{
        updateUser(auth.uid, user)
    }
    return (
      <div className="container">
        <div className="grid">
          <div>
            <label>
              Name <br />
              <input
                autoComplete="off"
                required
                minLength="3"
                maxLength="40"
                placeholder="Your Name"
                type="text"
                name="name"
                value={user.name}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label>
              Bio <br />
              <textarea
                autoComplete="off"
                minLength="3"
                maxLength="140"
                rows="10"
                placeholder="Let other people know about you"
                type="text"
                name="bio"
                value={user.bio}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <button className='btn' onClick={() => handleSubmit()}>Submit</button>
          </div>
          <div>
            <label>
              City <br />
              <input
                autoComplete="off"
                minLength="3"
                maxLength="20"
                placeholder="Current city you live in"
                type="text"
                name="city"
                value={user.address.city}
                onChange={(e) => {
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      city: e.target.value,
                    },
                  });
                }}
              />
            </label>
            <label>
              Country <br />
              <input
                autoComplete="off"
                minLength="3"
                maxLength="20"
                placeholder="Country"
                type="text"
                name="country"
                value={user.address.country}
                onChange={(e) => {
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      country: e.target.value,
                    },
                  });
                }}
              />
            </label>
            <label>
              Youtube Account <br />
              <input
                autoComplete="off"
                minLength="3"
                maxLength="20"
                placeholder="Link your youtube acocunt"
                type="url"
                name="youtube"
                value={user.social.youtube}
                onChange={(e) => {
                  setUser({
                    ...user,
                    social: {
                      ...user.social,
                      youtube: e.target.value,
                    },
                  });
                }}
              />
            </label>
            <label>
              Facebook Account <br />
              <input
                autoComplete="off"
                minLength="3"
                maxLength="20"
                placeholder="Link your facebook acocunt"
                type="url"
                name="facebook"
                value={user.social.facebook}
                onChange={(e) => {
                  setUser({
                    ...user,
                    social: {
                      ...user.social,
                      facebook: e.target.value,
                    },
                  });
                }}
              />
            </label>
            <label>
              Linkedin Account <br />
              <input
                autoComplete="off"
                minLength="3"
                maxLength="20"
                placeholder="Link your linkedin acocunt"
                type="url"
                name="linkedin"
                value={user.social.linkedin}
                onChange={(e) => {
                  setUser({
                    ...user,
                    social: {
                      ...user.social,
                      linkedin: e.target.value,
                    },
                  });
                }}
              />
            </label>
            <label>
              Twitter Account <br />
              <input
                autoComplete="off"
                minLength="3"
                maxLength="20"
                placeholder="Link your twitter acocunt"
                type="url"
                name="twitter"
                value={user.social.twitter}
                onChange={(e) => {
                  setUser({
                    ...user,
                    social: {
                      ...user.social,
                      twitter: e.target.value,
                    },
                  });
                }}
              />
            </label>
          </div>
        </div>
      </div>
    );
}
const mapStateToProps = state =>{
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        updateUser: (id, user) => dispatch(updateUser(id, user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
