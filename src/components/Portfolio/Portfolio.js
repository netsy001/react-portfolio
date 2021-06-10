import React from "react";
import Popcorn from '../../images/popcorn.jpg';
import Theworkdayscheduler from '../../images/day planner.png';
import Weather from '../../images/weatherapp.jpg';
import Password from '../../images/Password.png';
import './Portfolio.css';



const Portfolio = () => {
    return (
        <div className="container p-2 my-4 border">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center"><strong> My Projects</strong></h1>
                </div>


                <div className="row">
                    <div className="col-md-6">
                        <a href="https://benjaminlee-boop.github.io/Trailer-Sailor/">
                            <img src={Popcorn} alt="Trailor-Sailor" className="img-thumbnail" />
                            <p className="text-center"><strong>Trailor-Sailor </strong></p>
                        </a>
                        <p className="text-centre">  <a href="https://github.com/BenjaminLee-boop/Trailer-Sailor"> <strong>Github Repo </strong></a> </p>
                    </div>
                    <div className="col-md-6">
                        <a href="https://netsy001.github.io/Theworkdayscheduler/">
                            <img src={Theworkdayscheduler} alt="day planner" className="image img-thumbnail" />
                            <p className="text-center"><strong>The WorkDay Scheduler</strong></p>
                        </a>
                        <p className="text-centre">  <a href="https://github.com/netsy001/Theworkdayscheduler"> <strong>Github Repo </strong></a> </p>
                    </div>
                </div>

                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-sm-6">
                        <a href="https://netsy001.github.io/Weather-Dashboard/">
                            <img src={Weather} alt="Weather-Dashboard" className="img-thumbnail img-rounded" />
                            <p className="text-center"><strong>Weather-Dashboard</strong></p>
                        </a>
                        <p className="text-centre">  <a href="https://github.com/netsy001/Weather-Dashboard"> <strong>Github Repo </strong></a> </p>
                    </div>
                    <div className="col-sm-6">
                        <a href="https://netsy001.github.io/Thepasswordgenerator/">
                            <img src={Password} alt="Password Generator" className="img-thumbnail" />
                            <p className="text-center"><strong>Password Generator</strong></p>
                        </a>
                        <p className="text-centre">  <a href="https://github.com/netsy001/Thepasswordgenerator"> <strong>Github Repo </strong></a> </p>
                        <br></br>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Portfolio;
