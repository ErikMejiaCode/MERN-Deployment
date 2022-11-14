import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import {getPirateById} from '../services/internalApiServices'

const divStyle = {
    borderRadius: "2px",
    border: "2px solid black",
    width: "150px",
    // marginTop: "30px",
    margin: "0 auto",
}

export const OnePirate = () => {

    const {id} = useParams();
    const [pirate, setPirate] = useState(null);


    useEffect(() => {
        getPirateById(id)
            .then((data) => {
                setPirate(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    //logic used to turn change values of checkboxes
    const handleClick = (e) => {
        console.log(e.target.checked);
        if (e.target.checked === true) {
            e.target.checked = false;
        } else {
            e.target.checked = true;
        }
        setPirate({
            ...pirate,
            [e.target.name]: e.target.checked
        })
    }

    
    if (pirate === null) {
        return null;
    }


    return (
        <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4'>
                <h1>{pirate.name}</h1> &nbsp; &nbsp;  &nbsp; &nbsp;
                <Link to={'/'} className='btn btn-primary btn-sm shadow'>Crew Board</Link>
            </nav>
                <hr />
            <div className='d-flex'>    

                {/* Left portion of the About Page */}
                <div>
                    <img style={divStyle} src="https://image.shutterstock.com/image-illustration/illustration-profile-icon-avatar-pirate-260nw-2112197375.jpg" alt="Pirate"/>
                    <h1>"{pirate.catchPhrase}"</h1>
                </div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <div className='w-75 border border-3 border-dark p-1'>
                    <h3 className='text-center mb-3'>About</h3>

                    {/* Right portion of the About Page */}
                    {/* Incudes functionality to turn yes to no and vice versa */}
                    <h6>Position :  &nbsp;&nbsp;&nbsp;&nbsp;   {pirate.crewPosition} </h6>
                    <h6>Treasures :  &nbsp;  {pirate.treasureChests} </h6>
                    <h6 name='pegLeg'>Peg Leg :  &nbsp;&nbsp;&nbsp;&nbsp;   {pirate.pegLeg ? "Yes" : "No"} &nbsp;&nbsp;&nbsp;
                    <button name='pegLeg' className='btn btn-sm btn-outline-info shadow' onClick={(e) => {handleClick(e)}}
                    >{pirate.pegLeg ? "No" : "Yes"}</button>
                    </h6>
                    <h6>Eye Patch :  &nbsp; {pirate.eyePatch ? "Yes" : "No"} &nbsp;&nbsp;&nbsp;
                    <button name='eyePatch' className='btn btn-sm btn-outline-info shadow' onClick={(e) => {handleClick(e)}}
                    >{pirate.eyePatch ? "No" : "Yes"}</button>
                    </h6>
                    <h6>Hook Hand : {pirate.hookHand ? "Yes" : "No"} &nbsp;&nbsp;&nbsp; 
                    <button name='hookHand' className='btn btn-sm btn-outline-info shadow' onClick={(e) => {handleClick(e)}}
                    >{pirate.hookHand ? "No" : "Yes"}</button>
                    </h6>
                </div>
            </div>
        </div>
    )
}