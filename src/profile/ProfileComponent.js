import React, { Component } from 'react'
import Profil5 from '../Profil';

export default class ProfileComponent extends Component {

   
    render() {
        const handleName =(el)=>alert(el);
        return (
            <div>
                <Profil5 FullName="wiem" Bio="Lorem" Profession="Ingénieur" alertName={handleName} > https://cdn.pixabay.com/photo/2021/03/16/13/47/lake-6099842_960_720.jpg </Profil5>
            </div>
        )
    }
}