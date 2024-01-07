import React from "react";
import {Link} from "react-router-dom";
function Foot()
{
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>company information</h5>
                        <hr />
                        <p>
                        "Travel wallah.com" is your compass in the world of travel, offering a symphony of possibilities for every kind of adven turer. Your extraordinary journey starts here – come, let us be your guide to the world.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick LInks</h6>
                        <hr />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/">contact</Link></div>
                        <div><Link to="/">blog</Link></div>
                    </div>
                    <hr />
                    <div className="col-md-4">
                        <h6>Contact information</h6>
                        
                        <div><p className="text-white mb-1">91-8282923056</p></div>
                        <div><p className="text-white mb-1"></p>91-9282923056</div>
                        <div><p className="text-white mb-1">91-8282923056</p></div>
                        <div><p className="text-white mb-1">anku@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Foot;