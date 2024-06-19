import React from 'react';
import './SignUpUser.css';

const SignUpUser = () => {
    return (
        <div className="form-container">
            <form>
                <div className="form-group">
                    <input placeholder="First Name" />
                </div>
                <div className="form-group">
                    <input placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <input placeholder="Username" />
                </div>
                <div className="form-group">
                    <input placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Confirm Password" />
                </div>
                <div className="button-group">
                    <button type="submit" className="submit-button">SUBMIT</button>
                    <button type="button" className="cancel-button">CANCEL</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpUser;
