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
background: var(--background-primary-color);

h1 {
    margin-bottom: 2rem;
    color: var(--text-color);
    font-size: 2rem;
    font-weight: 700;
}

form {
    background: var(--background-secondary-color);
    padding: 2rem 2.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow-1);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    min-width: 320px;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-color);
    font-weight: 500;
}

input {
    width: 100%;
    padding: 0.6rem 0.8rem;
    border: 1px solid var(--background-secondary-color);
    border-radius: 6px;
    font-size: 0.6em;
    background: var(--grey-100);
    transition: border 0.2s;
    &:focus {
        outline: none;
    }
}

button[type="submit"] {
    margin-top: 0.5rem;
    padding: 0.75rem 0;
    background: var(--secondary-200);
    color: var(--white);
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        opacity: 0.9;
    }
}

div {
    display: flex;
    flex-direction: column;

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