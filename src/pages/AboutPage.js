import React from 'react'
import Ngozi from '../images/Ngozi0.jpg';
import texts from './all-texts';

const MyHobbies = () => {
    return texts['hobbie items'].map((item, key) => <li key={key}>{item}</li>)
}

const AboutPage = () => {
    return (
        <>
            <h1>[About Me]</h1>
            <div className="bg-secondary mx-auto">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="row">
                            <img src={Ngozi} alt="" width="100%"/>
                        </div>
                        <div className="row icon-bar">
                            <a href="##" className="github"><i className="fab fa-github fa-lg"></i></a>
                            <a href="##" className="linkedin"><i className="fab fa-linkedin fa-lg"></i></a>
                            <a href="##" className="twitter"><i className="fab fa-twitter fa-lg"></i></a>
                            <a href="##" className="facebook"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="##" className="instagram"><i className="fab fa-instagram fa-lg"></i></a>
                        </div> 
                    </div>
                    <div className="col-sm-9">
                        <div className="row bg-info p-4">
                            <h2>Hey, I'm Ngozi</h2>
                            <p>{texts['about me']}</p>
                        </div>
                        <div className="row bg-warning p-4">
                            <p>{texts['hobbies']}</p>
                            <ul><MyHobbies /></ul>
                        </div>
                    </div>
                </div>
                <div className="row border bg-danger">
                    <div className="col">
                        <h1>[Expertise]</h1>
                        <p>{}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage