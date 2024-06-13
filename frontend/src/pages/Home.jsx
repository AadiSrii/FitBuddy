import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '../App.css';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

export const Home = () => {
  return (
    <>
      <Carousel className="carousel-no-controls" data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.fitbuddy.co.in/images/about-page/AiAssisted.png"
            alt="First slide"
            style={{ height: "600px", objectFit: "cover" }} // Ensure images are properly fitted
          />
          <Carousel.Caption>
            <h2 style={{ marginLeft: "-1000px", marginTop: "-300px", color: "white" }}>Fitness marketplace</h2>
            <div style={{ width: "300px", marginLeft: "900px", marginTop: "190px" }}>
            <Link to="/Signup"> <button style={{ width: "250px", height: "45px", color: "black", backgroundColor: "white", border: "none", borderRadius: "5px", fontWeight: "650" }}>SIGN UP</button></Link><br />
              <samp style={{ color: "black", fontSize: "18px" }}>Already a member? </samp>
              <Link to="/Login" style={{ color: "black", fontSize: "18px" }}>LOG IN</Link>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.fitbuddy.co.in/images/about-page/TrainerAssisted.png"
            alt="Second slide"
            style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 style={{ marginLeft: "-1000px", marginTop: "-300px", color: "white" }}>Fitness marketplace</h2>
            <div style={{ width: "300px", marginLeft: "900px", marginTop: "190px" }}>
            <Link to="/Signup"> <button style={{ width: "250px", height: "45px", color: "black", backgroundColor: "white", border: "none", borderRadius: "5px", fontWeight: "650" }}>SIGN UP</button></Link><br />
              <samp style={{ color: "black", fontSize: "18px" }}>Already a member? </samp>
              <Link to="/Login" style={{ color: "black", fontSize: "18px" }}>LOG IN</Link>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mapmy.uastatic.com/d2ea2fc9eeba34dd9ee0a91812f30881.png"
            alt="Third slide"
            style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 style={{ marginLeft: "-1000px", marginTop: "-300px", color: "white" }}>Fitness marketplace</h2>
            <div style={{ width: "300px", marginLeft: "900px", marginTop: "190px" }}>
            <Link to="/Signup"> <button style={{ width: "250px", height: "45px", color: "black", backgroundColor: "white", border: "none", borderRadius: "5px", fontWeight: "650" }}>SIGN UP</button></Link><br />
              <samp style={{ color: "black", fontSize: "18px" }}>Already a member? </samp>
              <Link to="/Login" style={{ color: "black", fontSize: "18px" }}>LOG IN</Link>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

{/* ******************** 2 *********************** */}

      <div style={{width:"1515px",height:"580px",display:"flex",paddingTop:"100px",paddingLeft:"150px",gap:"20px"}}>
        <div style={{width:"500px",height:"400px",paddingLeft:"40px",paddingTop:"30px"}}>
          <p style={{fontWeight:"650",fontSize:"50px",lineHeight:"50px",letterSpacing:"-2px"}}>SET GOALS. <br /> LOG WORKOUTS. <br /> STAY ON TRACK.</p>
          <p style={{marginTop:"40px",letterSpacing:"-0.5px"}}>Easily track your Workouts, set Training Plans, and discover new <br/> Workout Routines to crush your goals.</p>
           <Link to="/Login"><button style={{backgroundColor:"black",color:"white",fontWeight:"600", height:"45px",width:"280px",border:"none",marginTop:"30px",borderRadius:"25px"}}>GET STARTED</button></Link>
          
        </div>
        <div style={{width:"660px",height:"400px",backgroundImage:"url(https://mapmy.uastatic.com/04117f75e461640c913d37545efaa058.webp)", backgroundPosition: "center",backgroundSize: "cover"}}>
          {/* <img src="https://mapmy.uastatic.com/04117f75e461640c913d37545efaa058.webp" alt="" /> */}  
        </div>
      </div>

       {/*  */}


    <div style={{width:"1130px",height:"370px",border:"1px solid",marginLeft:"200px",marginTop:"20px"}}>
    <Carousel className='secondCarousel'>
      <Carousel.Item>
      <div style={{width:"1130px",height:"370px",border:"1px solid",backgroundColor:"black",padding:"25px",marginBottom:"20px",display:"flex"}}>
        <img style={{width:"600px",height:"320px"}} src="https://challenge-assets.mapmyfitness.com/kjizize.jpg" alt="" />
        <div style={{width:"400px",height:"320px"}}>
        <p style={{color:"white",fontSize:"22px",fontWeight:"bold",marginTop:"110px",marginLeft:"40px",letterSpacing:"-05"}}>YOU VS THE YEAR 2024</p>
        <p style={{color:"white",marginLeft:"40px"}}>Log 1,024 km in 2024</p>
        </div>
      </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div style={{width:"1130px",height:"370px",border:"1px solid",backgroundColor:"black" ,padding:"25px",marginBottom:"20px",display:"flex"}}>
        <img style={{width:"600px",height:"320px"}} src="https://challenge-assets.mapmyfitness.com/a83u9w9.jpg" alt="" />
        <div style={{width:"400px",height:"320px"}}>
        <p style={{color:"white",fontSize:"22px",fontWeight:"bold",marginTop:"110px",marginLeft:"40px", letterSpacing:"-05"}}>WORKOUT WARRIOR CHALLENGE</p>
        <p style={{color:"white",marginLeft:"40px"}}>Log 48 workouts in 3 months to complete the Workout Warrior Challenge.</p>
        </div>
      </div>
      </Carousel.Item>
    </Carousel>
    </div>

    {/*  */}

    <p style={{fontSize:"50px",fontWeight:"800",letterSpacing:"-2px", marginTop:"50px",marginLeft:"550px"}}>PUSH YOUR LIMITS</p>
    <p style={{ marginTop:"20px",marginLeft:"550px"}}>Hit milestones and PR’s by taking on a new challenge every month.</p>
    <Link to="/Community"><button style={{backgroundColor:"black",color:"white",fontWeight:"600",height:"45px",width:"200px",marginLeft:"650px",marginTop:"20px",borderRadius:"5px" , marginBottom:"10px"}}>JOIN A CHALLENGE</button></Link>
   


   {/* ************* Footer ************ */}

   <Footer/>
    </>
  );
};
