import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import Vmc from "./inc/Vmc";
import services from "../images/img1.jpeg";
import train from "../images/train.jpeg";
import plain from "../images/img5.jpeg";
import boat from "../images/boat1.jpeg";

import "./style.css";


function Home()
{
    return(
      <>
        <div>
            <Slider/>
        <div>
            <h1 className="decoration"> <b><i>TRAVEL WALLAH.com</i></b></h1>
            <h4 className="para">~ Collect moments, not things</h4>
        </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
  <div class="col">
    <div class="card h-100">
      <img src={plain} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">PlANE SEVA</h5>
        <p class="card-text">get the best serive starting from 200/-.</p>
        <div className="btn btn-warning">BOOK NOW</div>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={train} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">TRAIN SEVA</h5>
        <p class="card-text">get the train serive starting from 10/-</p>
        <div className="btn btn-warning">BOOK NOW</div>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={boat} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">BOAT SEVA</h5>
        <p class="card-text">get the best boat facilities at your affordable cost</p>
        <div className="btn btn-warning">BOOK NOW</div>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
        </div>
        
        </>
       
    );
}
export default Home;