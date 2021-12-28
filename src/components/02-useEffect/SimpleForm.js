import React,{useEffect,useState} from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const initialState = { name:'',email:''}
    const [formState, setFormState] = useState(initialState)
    const {name,email} = formState;
    useEffect(() => {
        // console.log('hey!');
    },[])
    useEffect(() => {
        // console.log('formstate cambio');
    },[formState])
    useEffect(() => {
        // console.log('email cambio');
    },[email])
    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    }
    
    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                    />
            </div>
            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                    />
            </div>

            {(name === '123') && <Message/>}
            
        </>
    )
}
