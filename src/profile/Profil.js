import PropTypes from "prop-types";
import React from 'react'

 const Profil = ({children,FullName, Bio, Profession,alertName}) => {console.log({children});
   return (
      <div onClick={()=>alertName(FullName)}>
         <p>FullName is: {FullName}</p>
         <p>Bio is: {Bio}</p>
         <p >Profession is: {Profession}</p>
         <img src={children}  alt="" ></img>
         
      </div>
   )
}

Profil.prototype ={
   FullName: PropTypes.string,
   Bio: PropTypes.string,
   Profession: PropTypes.string,
}

Profil.defaultProps={
   children:"https://cdn.pixabay.com/photo/2020/05/26/09/01/night-5222267_960_720.jpg",
   FullName: "default name",
   Bio: "Default Lorem",
   Profession: "Ing",
}
export default Profil