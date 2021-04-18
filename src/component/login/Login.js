import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./Login.css";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
        
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <nav className="wrapper">

        <div className="login">
            <p className="title">Log in </p>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email  </Form.Label>
                    <Form.Control className="put"
                        autoFocus
                        placeholder = "username"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="put"
                        type="password"
                        placeholder = "password"
                        value = {password}
                        onChange = {(e) => setPassword (e.target.value)} />
                </Form.Group>
                <Link to ="#" className="forget">Forgot your password?</Link>
                <Button className="but" type ="submit">
                    Login
                </Button>
            </Form>
        </div>
        </nav>
    );
}