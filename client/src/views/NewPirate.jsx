import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'


import {createPirate} from '../services/internalApiServices'

export const NewPirate = () => {

    const [formData, setFormData] = useState({
        name: "",
        crewPosition: "Captain",
        catchPhrase: "",
        treasureChests: 0,
        pegLeg: true,
        eyePatch: true,
        hookHand: true
    })


    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        createPirate(formData)
            .then((data) => {
                console.log('new pirate data:', data)
                navigate('/')
            })
            .catch((error) => {
                console.log(error.response)
                setErrors(error.response.data.errors)
            })
    }

    const handleFormChanges = (e) => {
        if(e.target.type === "checkbox") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked
            })
            return null;
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4'>
                <h1>Add Pirate</h1> &nbsp; &nbsp;  &nbsp; &nbsp;
                <Link to='/' className='btn btn-primary btn-sm'>Crew Board</Link>
            </nav>
            <hr />

            <form 
            onSubmit={(e) => {handleSubmit(e)}}
            className='d-flex justify-content-start align-items-center'>
                <div className='form-group'>
                    <label className='h6'>Pirate Name:</label>
                    <input 
                    onChange={handleFormChanges}
                    type="text" 
                    name='name'
                    className="form-control"
                    />
                    <div>
                    {
                        errors?.name && (
                            <span className="text-danger">{errors.name?.message}</span>
                            )
                        }
                    </div>
                    <label className='h6'>Image Url:</label>
                    <input 
                    onChange={handleFormChanges}
                    type="text" 
                    name='imageUrl'
                    className="form-control"
                    />
                    <div>
                    {
                        errors?.imageUrl && (
                            <span className="text-danger">{errors.imageUrl?.message}</span>
                            )
                        }
                    </div>
                    <label className='h6'># of Treasure Chests:</label>
                    <input 
                    onChange={handleFormChanges}
                    type="number" 
                    name='treasureChests'
                    className="form-control"
                    />
                    <div>
                    {
                        errors?.treasureChests && (
                            <span className="text-danger">{errors.treasureChests?.message}</span>
                            )
                        }
                    </div>
                    <label className='h6'>Pirate Catch Phrase:</label>
                    <input 
                    onChange={handleFormChanges}
                    type="text" 
                    name='catchPhrase'
                    className="form-control"
                    />
                    <div>
                    {
                        errors?.catchPhrase && (
                            <span className="text-danger">{errors.catchPhrase?.message}</span>
                            )
                        }
                    </div>
                </div> &nbsp; &nbsp; &nbsp; &nbsp;
                <div className='form-group '>
                <label className='h6'>Crew Position:</label>
                    <select
                    onChange={handleFormChanges}
                    name="crewPosition">
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value='Powder Monkey'>Powder Monkey</option>
                    </select>
                    <br />
                    <div className='form-check'>     
                        <label className='h6'>Peg Leg</label>
                        <input
                        onChange={handleFormChanges} 
                        type="checkbox" 
                        name="pegLeg" 
                        className='form-check-input'
                        checked={formData.pegLeg}
                        />
                    </div>
                    <div className='form-check'>
                    <label className='h6'>Eye Patch</label>
                    <input
                    onChange={handleFormChanges} 
                    type="checkbox" 
                    name="eyePatch" 
                    className='form-check-input'
                    checked={formData.eyePatch}
                    />
                    </div>
                    <div className='form-check'>
                    <label className='h6'>Hook Hand</label>
                    <input
                    onChange={handleFormChanges} 
                    type="checkbox" 
                    name="hookHand" 
                    className='form-check-input'
                    checked={formData.hookHand}
                    />
                    </div>
                    <button className='btn btn-sm btn-outline-primary' >Add Pirate</button>

                </div>
            </form>
        </div>
    )
}

