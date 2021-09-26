import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-solid-svg-icons'

import './Member.css'

const Member = (props) => {
    // console.log(props);
    
    const {name,age,occupation,office,salary,img}=props.member;
    return (
        <div className="member-style">
            <img src={img} alt="" />
            <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Proffesion: {occupation}</p>
            <p>Office: {office}</p>
            <p>Salary: {salary}</p>
            </div>
            <button onClick={()=>props.handleAddToTeam(props.member)}
            ><FontAwesomeIcon icon={faUser} />  added to Team</button>
        </div>
    );
};

export default Member;