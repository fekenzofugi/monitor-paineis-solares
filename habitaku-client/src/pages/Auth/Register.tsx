import React, { useState } from "react";
import styled from "styled-components";

const Register = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle registration logic here
        console.log(form);
    };

    return (
        <Wrapper>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </Wrapper>
    );
};

export default Register;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 80vh;
justify-content: center;
background: #f7f7fa;

h1 {
    margin-bottom: 2rem;
    color: #22223b;
    font-size: 2rem;
    font-weight: 700;
}

form {
    background: #fff;
    padding: 2rem 2.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(34, 34, 59, 0.08);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    min-width: 320px;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: #4a4e69;
    font-weight: 500;
}

input {
    width: 100%;
    padding: 0.6rem 0.8rem;
    border: 1px solid #c9c9d1;
    border-radius: 6px;
    font-size: 1rem;
    background: #f4f4f8;
    transition: border 0.2s;
    &:focus {
        border: 1.5px solid #9a8c98;
        outline: none;
        background: #fff;
    }
}

button[type="submit"] {
    margin-top: 0.5rem;
    padding: 0.75rem 0;
    background: #5f6caf;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: #22223b;
    }
}

div {
    display: flex;
    flex-direction: column;
}
`