import React from "react";
import PropTypes from 'prop-types';


const Profile = ({fullName,bio,profession,handleName,children}) => {
return( 
    <div>
    <div >{children}</div>   
    <h1 style={{color:"crimson"}}> {fullName }</h1>
    <p style={{textAlign:"center"}}>{bio}</p>
    <p>{profession}</p>
    <button onClick={handleName}> click me</button>
    </div>
    )
}
Profile.defaultProps={
    fullName:"Wafa Hannachi"
}
Profile.propTypes={
    fullName:PropTypes.string,
}
export default Profile;