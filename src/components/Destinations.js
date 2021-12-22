import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'

function Destinations( {image1 , image2, image3}) {
    return (
        <Wrap>
         <Fade bottom>
            <ItemText>
                <h1>Check Out These Epic Destinations</h1>
            </ItemText>
        <Cards>
        <Card sx={{ maxWidth: 345 , marginTop: '20px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 , marginTop: '20px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image2}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 , marginTop: '20px' , }}>
        <CardActionArea>
          
          <CardMedia
            component="img"
            height="140"
            image={image3}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
      </Cards>
      </Fade> 
      </Wrap>
    );
}

export default Destinations

const Cards = styled.div`
padding: 30px 50px;
display: flex;
flex-direction: row;
text-align: center;
justify-content: space-between;
flex-wrap: wrap;
`

const Wrap = styled.div`
padding-top: 50px;
display:flex;
flex-direction: column;
`

const ItemText = styled.div`
text-align: center;
padding-bottom: 100opx; 
h1 {
    weight: 600;
}
`