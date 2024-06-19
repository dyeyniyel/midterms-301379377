import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './SignUpUser.css';

const SignUpUser = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = data => {
        alert(JSON.stringify(data));
        console.log(data);
    };

    const onCancel = () => {
        reset();
    };


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input {...register("firstName", { required: true })} placeholder="First Name" />
                    {errors.firstName && <p>This field is required. Kindly populate this field</p>}
                </div>
                <div className="form-group">
                    <input {...register("lastName", { required: true })} placeholder="Last Name" />
                    {errors.lastName && <p>This field is required. Kindly populate this field</p>}
                </div>
                <div className="form-group">
                    <input {...register("userName", { required: true })} placeholder="User Name" />
                    {errors.userName && <p>This field is required. Kindly populate this field</p>}
                </div>
                <div className="form-group">
                    <input {...register("email", { required: "This field is required and should be populated.", pattern: { value: /^\S+@\S+$/i, message: "Please enter your email in the format 'example@domain.com'" } })} placeholder="Email" />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <input type="password" {...register("password", { required: true })} placeholder="Password" />
                    {errors.password && <p>This field is required. Kindly populate this field</p>}
                </div>
                <div className="form-group">
                    <input type="password" {...register("confirmPassword", { required: true, validate: value => value === password.current || "The passwords do not match" })} placeholder="Confirm Password" />
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </div>
                <div className="button-group">
                    <button type="submit" className="submit-button">SUBMIT</button>
                    <button type="button" className="cancel-button" onClick={onCancel}>CANCEL</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpUser;
