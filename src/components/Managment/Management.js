import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import Team from '../Team/Team'
import './Management.css'

const Management = () => {
   
    const [members,setMembers]=useState([]);
    const [team,setTeam]= useState([]);
    const [name,setName]=useState([]);
    useEffect(()=>{
        fetch('./newSample.JSON')
        .then(res=>res.json())
        .then(data=>setMembers(data));
    },[]);

    const handleAddToTeam=(member)=>{
        const newTeam=[...team,member];
        setTeam(newTeam);
        
        setName(member.name);
        
    }

    return (
        <div className="management-style">
            <div className="member">
            {
                members.map(member=><Member 
                key={member.key}
                member={member}
                handleAddToTeam={handleAddToTeam}
                ></Member>)
            }
            </div>
            <div className="team">
                <Team team={team} name={name} ></Team>
            </div>
        </div>
    );
};

export default Management;