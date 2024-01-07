import React from "react";

function Contact()
{
    return(
        <div >
            <div className="py-4 bg info">
                <div className="container">
                    <div className="row shadow">
                        <h4>About us</h4>
                    </div>
                </div>
            </div>
        <div className="container">

            <div className="row">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="form-group">
                             <label htmlFor="">FULL NAME-</label>
                            <input type="text" placeholder="enter full name"/>
                            <div className="pt-3">
                            <label htmlFor="">ENTER GMAIL-</label>
                          
                            <input type="text" placeholder="abc@gmail.com"/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>    

        </div>
    );
}
export default Contact;