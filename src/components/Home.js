import React from 'react';
import styled from 'styled-components';


import Section from './Section';

function Home() {
    return (
        <Components>
            <Section 
            title = "A Journey of a Thousand Miles begins with a Single Step"
            subtitle = "People Dont take Trips, Trips take People "
            backgroundImg="/Public/images/Pic1.png" />;
            
            
        </Components>
    )
}

export default Home

const Components = styled.div`
height: 100vh;
`