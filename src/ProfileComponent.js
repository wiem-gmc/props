import React, { Component } from 'react'
import Profil5 from './profile/Profil';
import image from './logo.svg';
export default class ProfileComponent extends Component {

   
    render() {
        const handleName =(el)=>alert(el);
        return (
            <div>
                <Profil5  FullName="wiem" Bio="Lorem" Profession="Ingénieur" alertName={handleName} > 
                
               {image}
                
                 </Profil5>
            </div>
        )
    }
}