import React from 'react'
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <FooterContainer>
      <span>Copyright &copy; 2021 Satan_Tours. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">Recomemded Destinations</a>
        </li>
        <li>
          <a href="#recommend">Testimonials</a>
        </li>
        <li>
          <a href="#testimonials">Blog</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
          <FacebookIcon/>
        </li>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </ul>
    </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  `