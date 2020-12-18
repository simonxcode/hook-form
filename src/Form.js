import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const Wrapper = styled.section`
      padding: 2rem;
      background: papayawhip;
    `

function Form() {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)   
  }
  
  return (
    <Wrapper>
      <div>
        <h1>
          create your account
      </h1>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type='text'
                name='username'
                placeholder='username'
                ref={register({ required: 'username required', pattern: { value: /^[a-z][a-z9]{3,14}$/i, message: 'invalid username' } })}
              />
              {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div>
              <input
                type='text'
                name='email'
                placeholder='email'
                ref={register({ required: 'email required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i, message: 'invalid email address' } })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <input
                type='password'
                name='password'
                placeholder='password'
                ref={register({ required: 'password required', pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/i, message: 'invalid password' } })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <input type='submit' />
          </form>
        </div>
        <div>
          <button>Rules for input</button>
          <div>
            <p>username</p>
            <ul>
              <li>must be 5 - 15 characters long</li>
              <li>must start with a letter</li>
              <li>only alphanumeric characters allowed</li>
              <li>only lowercase letters allowed</li>
            </ul>
            <p>password</p>
            <ul>
              <li>must be 8 - 15 characters long</li>
              <li>must contain one UPPERCASE letter</li>
              <li>must contain one lowercase letter</li>
              <li>must contain one number</li>
              <li>must contain one special character: @$!%*?&</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Form
