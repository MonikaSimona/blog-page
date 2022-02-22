import React from 'react'
import { useLocation, useNavigate, useResolvedPath } from 'react-router-dom';

const BecomeAMemberSection = ({ scrollElementRef }) => {
    let resolved = useResolvedPath("/about");
    const location = useLocation()
    console.log("LOcation", location.pathname)
    // if (location.pathname.includes('/about')) {
    //     return null
    // }
    return (
        <div className='section-wrapper' ref={scrollElementRef} id="id" style={{ display: location.pathname.includes('/about') ? "none" : "block" }} >
            <img src={require("../assets/images/formDecoration.svg")} alt="" className='arrow-deco' />
            <img src={require("../assets/images/formImageDecoration.svg")} alt="" className='img-deco' />
            <p className="text-small">
                Whant to save your favourite reads for later?
            </p>
            <p className="text-big">
                Become a Member!
            </p>
            <p className="text-small">
                Create your account now
            </p>
            <form className="form" >
                <div className="input-wrapper">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder='Lany Kravitz' />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" placeholder='lanykravitz@mail.com' />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" />
                </div>
                <div className="buttonWrapper">
                    <svg width="235" height="68" viewBox="0 0 235 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54.1683 2.47834C32.9462 4.30952 0.296632 10.8428 0.296632 10.8428V52.9749C0.296632 55.872 -1.1788 68 2.45147 68H13.8641H52.5713C97.0835 68 184.894 62.5011 184.894 62.5011C184.894 62.5011 218.092 65.2678 233.657 60.9522C235.784 60.3626 235.59 35.0584 231.582 19.2073C229.632 11.4969 224.719 0 224.719 0L168.932 1.08428C168.932 1.08428 114.714 -0.363024 80.0263 1.0845C69.9219 1.50615 64.2423 1.60908 54.1683 2.47834Z" fill="#E2CFAF" />
                    </svg>
                    <span className="buttonTitle">
                        Create account
                    </span>
                </div>
            </form>
        </div>
    )
}

export default BecomeAMemberSection