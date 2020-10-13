// import React from 'react';
// import img from "../images/mike-kenneally-tNALoIZhqVM-unsplash.jpg";
// import styled from "styled-components";

// const ImageBackground = styled.div`
//     vertical-align: top;
//     display: block;
//     width: 100vw;
// `

// const Home = () => {
//     return (
//         <ImageBackground>
//          <h1 style={{position: "fixed", color: "white", fontSize: '5rem', marginLeft: "20%", fontFamily: "Sansita Swashed"}}>Welcome to Club Coffee</h1>
//          <h4 style={{position: "fixed", color: "white", fontSize: '2rem', marginLeft: "55%", marginTop: "20%", fontFamily: "Sansita Swashed"}}>Experience Love at First Sip!</h4>
//          <img src={img} alt="coffee" style={{postion: "absolute", width: "100vw", height:"100vh"}}/>
//         </ImageBackground>
//     )
// }

// export default Home

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HomeDiv = styled.div`
  background-color: purple;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const OrderTitle = styled.h3`
  color: white;
  text-shadow: 1px 1px black;
  font-size: 2rem;
  margin: auto auto;
  padding-top: 100px;
`;

const OrderButton = styled.button`
  padding: 10px;
  background-color: lightgreen;
  color: white;
  text-shadow: 1px 1px black;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 20px;
  border-color: black;
  border-radius: 20px;
  :hover {
    background-color: white;
    color: green;
  }
`;

const Home = () => {
  return (
    <HomeDiv>
      <OrderTitle>Order delicious pizza here!</OrderTitle>
      <NavLink to="/order/pizza">
        <OrderButton data-cy="HMOButton">Order Now!</OrderButton>
      </NavLink>
    </HomeDiv>
  );
};

export default Home;
