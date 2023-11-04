import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import Vmc from "./inc/Vmc";
import services from "../images/img1.jpeg";


function Home()
{
    return(
        <div>
            <Slider/>

       <section className="section">
         <div className="container">
            <div className="row">
                <div className="col-md-12 text-centre">
                    <h2 className="main-heading">Home</h2>
                    <div className="underline mx-auto  "> </div>  
                    <p className="para">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, vel dolor repellat facilis earum consequatur ab officiis fugiat? Impedit quae quaerat voluptatibus qui libero dicta iure hic odit dolores inventore?hello everyone i am ankush ukil 
                        <div>
                        <Link to="/about" className="btn btn-warning shadow">Read more</Link>
                        </div>
                       
                    </p>

                         
            </div>
            </div>


        </div>
        </section>
        <Vmc/>
        <section className="section bg-light">
         <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 text-centre">
                   
                </div>    
                <div className="col-md-4 ">
                    <div className="card shadow">
                        <img src={services}className="w-100 border bottom" alt="Services" />
                        <div className="card-body">
                            <h6>Service 1</h6>
                            <div className="underline"></div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam 
                            </p>
                            <Link to="/services " className="btn btn-warning shadow">read more</Link>
                        </div>
                    </div>
                    
             </div>            
            </div>
            </div>
        </section>
        <div>
        <section className="section bg-light">
         <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 text-centre">
                    
                </div>    
                <div className="col-md-4 ">
                    <div className="card shadow">
                        <img src={services}className="w-100 border bottom" alt="Services" />
                        <div className="card-body">
                            <h6>Service 1</h6>
                            <div className="underline"></div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam 
                            </p>
                            <Link to="/services " className="btn btn-warning shadow">read more</Link>
                        </div>
                    </div>
                    
             </div>            
            </div>
            </div>
        </section>
        <section className="section bg-light">
         <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 text-centre">
                    
                </div>    
                <div className="col-md-4 ">
                    <div className="card shadow">
                        <img src={services}className="w-100 border bottom" alt="Services" />
                        <div className="card-body">
                            <h6>Service 1</h6>
                            <div className="underline"></div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam 
                            </p>
                            <Link to="/services " className="btn btn-warning shadow">read more</Link>
                        </div>
                    </div>
                    
             </div>            
            </div>
            </div>
        </section>
        </div>
        
        </div>
    );
}
export default Home;