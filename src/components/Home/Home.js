
import React from "react";
import Photo from '../../images/Photo.jpg';
import Resume from '../../images/Resume.PDF';

const Home = () => {
    return (
        <div className="container p-3 my-4 border">
            <h1> About Me</h1>
            <div className="row">
                <div className="col-md-4">
                    <img src={Photo} alt="Suri" className = "img-fluid"/>
                </div>
                <div className="col-md-8">
                    <p>Surendra is a highly passionate and inventive IT professional, people also call surendra as Suri. Possessing a keen understanding of the ICT industry with specialization in the field of computing. Approaches work with passion, Integrity and transparency, never promising what cannot be delivered. People recognize Suri as an achiever and/or expert.Suri influence people through high expectations of himself and others and constantly envision ways to improve and upgrade. Suri has a passion for growing great client relationships and a will to always go above and beyond to achieveresults. Suri quickly solve problems with fresh solutions. Suri experience has ranged across technologies such as HTML5, CSS3, MVC JavaScript, jQuery, NodeJS, Bootstrap, MY SQL, MongoDB and more.

                        <br></br>
                        <br></br>
                    <p><a href={Resume} target="blank">Click here for my Resume</a></p>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Home;