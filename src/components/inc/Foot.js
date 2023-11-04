import React from "react";
import {Link} from "react-router-dom";
function Footer()
{
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>company information</h5>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci quas itaque maiores amet dolorum sint voluptas natus delectus fugiat. Possimus voluptatem culpa molestiae voluptas repudiandae fuga vitae voluptatibus quidem.
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
                    <div className="col-md-4">
                        <h6>Contact information</h6>
                        <hr />
                        <div><p className="text-white mb-1">hello</p></div>
                        <div><p className="text-white mb-1">hello</p></div>
                        <div><p className="text-white mb-1">hello</p></div>
                        <div><p className="text-white mb-1">hello</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Footer;