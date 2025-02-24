import React, { Component } from "react";
import classes from './RegisterForm.module.css';

import { useForm } from 'react-hook-form';

export default function RegisterForm( props ) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  const onError = (error) => {
    console.log('Please fix all errors', error)
  }

  return (
    <form className={classes.contactsFormContainer} onSubmit={handleSubmit(onSubmit, onError)}>
      <input
        placeholder="Login" type="text"
        className={classes.contactsInput}
        {...register('login', {
          required: "Please, fill login!",
          minLength: {
            value: 3,
            message: 'Too short!'
          },
          maxLength: {
            value: 12,
            message: 'Too long!'
          },
          validate: {
            checkLogin: (value, formValues) => {
              return value.toLowerCase() === 'timon' ? 'Disabled login!' : true
            }
          }
        })}
      />
      { errors.login && <p className={classes.errorField}>{errors.login.message}</p> }

      <input
        placeholder="Password" type="password"
        className={classes.contactsInput}
        {...register('password', {required: "Do not shy, enter your password"})}
      />
      { errors.password && <p className={classes.errorField}>{errors.password.message}</p> }

      <input
        placeholder="Email" type="text"
        className={classes.contactsInput}
        {...register('email')}
      />

      <button className={classes.submitButton}>Enter</button>
    </form>
  );
}