import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';


export const Home = () => {
  return (
    <>
      <Carousel className="carousel-no-controls" data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel1"
            src="https://www.fitbuddy.co.in/images/about-page/AiAssisted.png"
            alt="First slide"

          />
          <Carousel.Caption>
            <h2 className='head-1'>Fitness marketplace</h2>
            <div className='loginBox'>
              <Link to="/Signup"> <button>SIGN UP</button></Link><br />
              <samp >Already a member? </samp>
              <Link to="/Login" className='textLogin'>LOG IN</Link>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel1"
            src="https://www.fitbuddy.co.in/images/about-page/TrainerAssisted.png"
            alt="Second slide"

          />
          <Carousel.Caption>
            <h2 className='head-1'>Fitness marketplace</h2>
            <div className='loginBox'>
              <Link to="/Signup"> <button>SIGN UP</button></Link><br />
              <samp >Already a member? </samp>
              <Link to="/Login" className='textLogin'>LOG IN</Link>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel1"
            src="https://mapmy.uastatic.com/d2ea2fc9eeba34dd9ee0a91812f30881.png"
            alt="Third slide"

          />
          <Carousel.Caption>
            <h2 className='head-1'>Fitness marketplace</h2>
            <div className='loginBox'>
              <Link to="/Signup"> <button>SIGN UP</button></Link><br />
              <samp>Already a member? </samp>
              <Link to="/Login" className='textLogin'>LOG IN</Link>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* ******************** 2 *********************** */}

  <div className='section2'>
      <div className='part1'>
        <div className='section2Img1'> </div>
        <h5>Men</h5>
        <span>exercises , fitness tips , routine and more</span>
        <Link to="/Login"><button>LET'S GO - </button></Link>
      </div>
      <div className='part2'>
        <div className='section2Img2'> </div>
        <h5>Women</h5>
        <span>exercises , posture , fitness tips , routine and more</span>
        <Link to="/Login"><button>LET'S GO - </button></Link>
      </div>

      </div>

      {/*  3  */}
      <hr />

      <div className='small-carousel'>
        <Carousel className='secondCarousel'>
          <Carousel.Item>
            <div className='sc-box1'>
              <img src="https://challenge-assets.mapmyfitness.com/kjizize.jpg" alt="" />
              <div className='sc-test1'>
                <p className='p1-text'>YOU VS THE YEAR 2024</p>
                <p className='p2-text'>Log 1,024 km in 2024</p>
              </div>
            </div>

          </Carousel.Item>
          <Carousel.Item>
            <div className='sc-box2'>
              <img src="https://challenge-assets.mapmyfitness.com/a83u9w9.jpg" alt="" />
              <div className='sc-test2'>
                <p className='p1-text'>WORKOUT WARRIOR CHALLENGE</p>
                <p className='p2-text'>Log 48 workouts in 3 months to complete the Workout Warrior Challenge.</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/*  */}

      <p className='push' >PUSH YOUR LIMITS</p>
      <p className='hit'>Hit milestones and PR’s by taking on a new challenge every month.</p>
      <Link to="/Community"><button className='joinBtn'>JOIN A CHALLENGE</button></Link>



      {/* ******************** eat *************** */}
      <hr />
      <div className='eat'>
        <div className='eat-text'>
          <h1>Being healthy starts <br /> with what you eat. </h1>
          <p>Want to eat more mindfully? Track meals, learn about your habits, and <br /> reach your goals with FitBuddy.</p>
          <Link to="/NutritionCalculator"><button>Track Now!</button></Link>
        </div>
        <div className='eat-image'>
          <img className='food' src="https://www.fitbuddynutritionapp.site/assets/img/homescreenhealthy.png" alt="" />
        </div>
      </div>

      {/* **** Benefits of being fit */}
      <hr />
      <div className='Benefits'>
        <div className='Benefits-text'>
          <h1>BENEFITS OF <br /> BEING FIT</h1>
          <p>Being physically active can  <b> improve your <br /> brain health, help manage weight, <br /> reduce the risk of disease, strengthen <br /> bones and muscles, and improve your <br /> ability to do everyday activities. </b> Adults  <br />who sit less and do any amount of <br /> moderate-to-vigorous physical activity <br /> gain some health benefits.</p>
          <Link to="/Benefits"><button className='benefits-btn'>LEARN MORE</button></Link>
        </div>
        <div className='Benefits-img'>
          <div className='b-image2'>
            <img className='b-img2' src="	http://fitbuddy.unaux.com/wp-content/uploads/2023/03/10-15047-preview-1590070553.jpg" alt="" />
          </div>
          <div className='b-image4'>
            <img className='b-img4' src="http://fitbuddy.unaux.com/wp-content/uploads/2023/03/depositphotos_64085891-stock-photo-couple-exercising.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* ************* Footer ************ */}

      <Footer />
    </>
  );
};
