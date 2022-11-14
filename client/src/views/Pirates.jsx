import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const divStyle = {
    borderRadius: "25px",
    border: "3px solid black",
    width: "75px",
    // marginTop: "30px",
    margin: "0 auto",
}


export const Pirates = () => {

    //State Variable
    const [pirates, setPirates] = useState([]);

    //Trigger when the component has finished rendering/loading
    useEffect(() => {
        //get all the pirates from our server
        axios.get('http://localhost:8000/api/pirates')
            .then(res => {
                console.log(res.data);
                setPirates(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    //Delete Pirate
    const deletePirate = (deleteID) => {

        if (window.confirm(`Are you sure this Pirate should Walk the Plank??`)) {

            axios.delete(`http://localhost:8000/api/pirates/${deleteID}`)
                .then(res => {
                    console.log("Delete Success", res.data);
                    //filter out the deleted note
                    const filteredPirates = pirates.filter(pirate => pirate._id !== deleteID);
                    setPirates(filteredPirates);
                })
                .catch(err => {
                    console.log("Delete Error", err);
                })
        }
    }


    return (
        <div className="container">
            <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4'>
                <h1>Pirate Crew</h1> &nbsp; &nbsp;  &nbsp; &nbsp;
                <Link to='/pirates/new' className='btn btn-primary btn-sm shadow'>Add Pirate</Link>
            </nav>
            <hr />

            {
                pirates.sort((a, b) => {
                    if (a.name < b.name) { return -1; }
                    if (a.name > b.name) { return 1 }
                    return 0
                })
                    .map((onePirate, i) => {
                        return (
                            <div key={onePirate._id} className='border rounded shadow mb-4 p-2 d-flex justify-content-around align-item-center'>
                                <div>
                                    <img style={divStyle} src="https://image.shutterstock.com/image-illustration/illustration-profile-icon-avatar-pirate-260nw-2112197375.jpg" alt="Pirate" />
                                </div>
                                <div>
                                    <h5>{onePirate.name}</h5>
                                    <Link to={`/pirates/${onePirate._id}`} className='btn btn-primary btn-sm shadow'>View Pirate</Link> |&nbsp;
                                    <button onClick={(e) => {
                                        deletePirate(onePirate._id)
                                    }} className='btn btn-danger btn-sm shadow'>Walk the Plank</button>
                                </div>
                            </div>
                        )
                    })
            }

        </div>

    )
}