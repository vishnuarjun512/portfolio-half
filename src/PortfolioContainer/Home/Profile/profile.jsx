import React from "react";
import Typical from 'react-typical'
import './profile.css'

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">

                        <div className="colz-icon">
                            <a href="https://www.facebook.com/profile.php?id=100010680883981">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="https://github.com/vishnuarjun512">
                                <i className="fa fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/vishnu_arjun_/">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/VishnuArjun12">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/vishnuarjun512/">
                                <i className="fa fa-linkedin"></i>
                            </a>               
                        </div>

                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Vishnu</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <span className="primary-text">
                            {""}
                            <h1>
                                {""}
                                <Typical 
                                loops={Infinity} 
                                steps={["Enthusiastic Developer 😎",1000,"Python Developer 💻",1000,"PHP Developer 💻",1000,"React Developer 📱",1000]}
                                />
                            </h1>

                            <span className="profile-role-tagline">
                                Knack of building applications with front and back end operations
                            </span>
                        </span>
                    </div>

                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {""}
                            Hire me
                        </button>
                        <a href="VishnuResume.pdf" download="Vishnus Resume.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>

                <div className="profile-picture">
                    <div className="profile-picture-background">
                        
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Profile;