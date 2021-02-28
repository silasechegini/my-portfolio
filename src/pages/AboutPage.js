import React from 'react'
import Ngozi from '../images/Ngozi0.jpg';
import texts from './all-texts';
import Colors from './Colors'

const MyHobbies = () => {
    return texts['hobbie items'].map((item, key) => <li key={key}>{item}</li>)
}

const Languages = () => {
    return texts.expertise.languages.map((item, key) => <li key={key}>{item}</li>)
}

const Tools = () => {
    return texts.expertise.tools.map((item, key) => <li key={key}>{item}</li>)
}

const AboutPage = () => {


    return (
        <>
            
            <div className="mx-auto about-me-fonts">
                <div className="row p-3" style={{"backgroundColor":Colors.Purple.Aubergine, "color":"White"}}><h1>About Me</h1></div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="row">
                            <img src={Ngozi} alt="" width="100%"/>
                        </div>
                        <div className="row icon-bar">
                            <a href="https://github.com/silasechegini" target="_blank" rel="noreferrer" className="github"><i className="fab fa-github fa-lg"></i></a>
                            <a href="https://www.linkedin.com/in/silasngozi/" target="_blank" rel="noreferrer" className="linkedin"><i className="fab fa-linkedin fa-lg"></i></a>
                            <a href="https://twitter.com/NgoziSilas" target="_blank" rel="noreferrer" className="twitter"><i className="fab fa-twitter fa-lg"></i></a>
                            <a href="https://www.facebook.com/silasngee/" target="_blank" rel="noreferrer" className="facebook"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="https://www.instagram.com/ngeesilas/" target="_blank" rel="noreferrer" className="instagram"><i className="fab fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="row p-4" style={{"backgroundColor":Colors.Pink.LightPink}}>
                            <h2>Hey, I'm Ngozi</h2>
                            <p>{texts['about me']}</p>
                        </div>
                        <div className="row p-4" style={{"backgroundColor":Colors.Pink.Pink}}>
                            <p>{texts['hobbies']}</p>
                            <ul><MyHobbies /></ul>
                        </div>
                    </div>
                </div>
                <div className="row " style={{"backgroundColor":Colors.Pink.DarkPink}}>
                    <div className="row ml-0 p-4">
                        <h1>Expertise and Tools</h1>
                        <p>{texts.expertise.sumary}</p>
                        <div className="col ml-5">
                            <h4>The programming languages i use are: </h4>
                            <ul><Languages /></ul>
                        </div>
                        <div className="col">
                            <h4>Some of the tools i use</h4>
                            <ul><Tools /></ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage