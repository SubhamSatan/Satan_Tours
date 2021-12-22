import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Image from '../images/Pic1.png'


function Section( { title , subtitle  }) {
    return (
        <Wrap >
          <Fade bottom>
            <ItemText>
              <div className="title">
                <h1> {title}</h1>
                <h3> {subtitle}  </h3>
              </div> 
               
             </ItemText>
             <FormText>
             <div className="search">
                <div className="container">
                  <label htmlFor="">Where you want to go</label>
                  <input type="text" placeholder="Search Your location" />
                </div>
                <div className="container">
                  <label htmlFor="">Check-in</label>
                  <input type="date" />
                </div>
                <div className="container">
                   <label htmlFor="">Check-out</label>
                   <input type="date" />
                </div>
                <button>Explore Now</button>
              </div>
             </FormText>
             
             </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
z-index: -1;
 width: 100vw;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.1)) , url(${Image});
 display: flex;
 flex-direction: column; 
 justify-content:center;  //aligning it vertically 
 align-items: center;  // aligning it horizantally 

`


const ItemText = styled.div`
 text-align: center;
 h1 , h3 {
     color: white;
     font-size: 35px;
    font-weight: 200px;
    letter-spacing: 3px;
    text-shadow: 1px 1px 2px;
    text-align: center;
 }

`

const FormText =  styled.div`
width: 80vw;
padding-top: 30px;
.search {
  width: 100%;
  display: flex;
  background-color: #ffffffce;
  padding: 0.5rem;
  border-radius: 0.5rem;
  flex-wrap: wrap;
    justify-content: center;
  .container {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 1.5rem;
    label {
      font-size: 1.1rem;
      color: #03045e;
    }
    input {
      background-color: transparent;
      border: none;
      text-align: center;
      color: black;
      &[type="date"] {
        padding-left: 3rem;
      }
      &::placeholder {
        color: black;
      }
      &:focus {
        outline: none;
      }
    }
  }
  button {
    padding: 1rem;
    cursor: pointer;
    border-radius: 0.3rem;
    border: none;
    color: white;
    background-color: #4361ee;
    font-size: 1.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
 

    @media screen  (max-width: 600px)  {
       
      display: flex;
      flex-wrap: wrap;
      
    }

`
  