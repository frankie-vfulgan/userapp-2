import React, { useState } from "react";
import {Form, Button} from "react-bootstrap";

function UserForm(props) {
    const [state, setState] = useState({
        username:"",
        email:"",
        password:"",
        gen:""
    });

    function handleOnChange(event) {
        setState({
            ...state,
            [event.target.name]: event.taget.value
        });
    }

    function handleSubmit() {
        props.addUser(state);
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" value={state.username} onChange={handleOnChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={state.email} onChange={handleOnChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={state.password} onChange={handleOnChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Gen</Form.Label>
                    <Form.Control type="number" placeholder="Gen" value={state.gen} onChange={handleOnChange}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Create User
                </Button>
            </Form>
        </div>
    );
}

export default UserForm;
