import React , {useState} from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from "@mui/icons-material/Menu"

function Header() {
  
  const[burgerStatus , setBurgerStatus] = useState(false)

    return (
        <Container>
            <LeftPart>
                <a>
                <img src="images\suitcase.png" alt="" />
                </a>
                <p>Satan_Tours</p>
            </LeftPart>
            <MiddlePart>
                <ul>
                <li><a href="#" >Home</a></li>
                <li><a href="#" >Destination</a></li>
                <li><a href="#" >Testimonials</a></li>
                <li><a href="#" >Blog</a></li>
                </ul>
            </MiddlePart>
            <RightPart>
            <CustomMenu onClick={()=> setBurgerStatus(true)}/>
                <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                   <CustomClose onClick={()=> setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Home</a></li>
                <li><a href="#">SignUp / SignIn</a></li>
                <li><a href="#">Recomended Destinations</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Blogs</a></li>
            </BurgerNav>
            </RightPart>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height: 60px;
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-left:  20px;
   top: 0;
   left: 0;
   right 0;
   z-index: 1;
`

const LeftPart = styled.div `
   display: flex ;
   align-items: center ;
   justify-content: space-between;
   left: 0;
   img {
       height: 60px;
   }
   p {
    text-decoration: none;
      color: black;
      font-size : 15px;
      font-weight: 600;
      text-transform: uppercase;
      flex-wrap: nowrap;
   }
   

`
const MiddlePart = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
   
ul {
    list-style: none;
    text-align: center;
   }
 ul li {
    display: inline-block;
  }
ul li a {
    display: block;
    padding: 15px;
    text-decoration: none;
    color: black;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 10px;
  }
 ul li a,
  nav ul li a:after,
  nav ul li a:before {
    transition: all .5s;
  }
 ul li a:hover {
    color: white;
  }   
 
//   a {
//       text-decoration: none;
//       color: black;
//       font-size : 15px;
//       font-weight: 600;
//       text-transform: uppercase;
//       padding: 0 30px;
//   }
  

@media(max-width: 768px)
  {
      display: none;
  }
  
`
const RightPart = styled.div`
// background-color: #4966ec;
// display: flex;
// justify-content: center;
// text-align: center;
// height: 60px;
padding-right: 20px;
display: flex;
align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right:10px;
}
`

// const Icons = styled.div`
// display: flex;
// justify-content: center;
// text-align: center;
// margin: auto;
// padding-right: 30px;
// `

// const Icon1 = styled(FacebookIcon)`
// cursor:pointer;`

// const Icon2 = styled(InstagramIcon)`
// cursor:pointer;
// `

// const Icon3 = styled(TwitterIcon)`
// cursor:pointer;`

// const SignUp = styled.div`
// display: flex;
// justify-content: center;
// text-align: center;
// margin: auto;
// padding-right: 20px;
// p{
//     text-decoration: none;
//       color: black;
//       font-size : 15px;
//       font-weight: 600;
//       text-transform: uppercase;
//       padding: 0 30px;
//       flex-wrap: nowrap;
// }
// `

const CustomMenu = styled(MenuIcon)`
 cursor: pointer;
`

const BurgerNav = styled.div`
color:black;
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props =>props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s ease-in;
li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0.2);

    a{
        font-weight: 600;
    }

}


`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;

`