import React from 'react'

const BecomeAMemberSection = () => {
    return (
        <div className='section-wrapper'>
            <p className="text-small">
                Whant to save your favourite reads for later?
            </p>
            <p className="text-big">
                Become a Member!
            </p>
            <p className="text-small">
                Create your account now
            </p>
            <form className="form">
                <div className="input-wrapper">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" />
                </div>
                <button className="create-button">create account</button>
            </form>
        </div>
    )
}

export default BecomeAMemberSection