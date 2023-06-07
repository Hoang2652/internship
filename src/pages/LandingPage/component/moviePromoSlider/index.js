import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import styles from './index.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

var p1 = require('@/assets/images/slide/slide1.jpg');
var p2 = require('@/assets/images/slide/slide2.jpg');
var p3 = require('@/assets/images/slide/slide3.jpg');
var p4 = require('@/assets/images/slide/slide4.jpg');
var p5 = require('@/assets/images/slide/slide5.jpg');
var p6 = require('@/assets/images/slide/slide6.jpg');

const movies = [
   { title: 'The Problems With John Stewart', category: 'Comedy', description: 'New season', poster: p1 },
   {
      title: 'Truth be told',
      category: 'Thriller',
      description: 'The game you couldn’t put down. The story you couldn’t make up',
      poster: p2,
   },
   { title: 'My Kind of Country', category: 'Comedy', description: 'He’s got issues', poster: p3 },
   { title: 'Servant', category: 'Comedy', description: 'Kindness makes a comeback', poster: p4 },
   { title: 'Servant', category: 'Sports', description: 'Live MLB games every Friday', poster: p5 },
   { title: 'Servant', category: 'Comedy', description: 'Your life’s potential is one card away', poster: p6 },
];

function MoviePromoSlider() {
   const [instantChange, setBeforeChange] = useState(0);
   const [delayedChange, setAfterChange] = useState(0);
   const [autoPlay, setAutoPlay] = useState({ play: true, nextActionIcon: <PauseCircleOutlineOutlinedIcon /> });

   function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ display: 'block', height: '100%', width: '200px', marginRight: '220px', zIndex: 2 }}
            onClick={onClick}
         ></div>
      );
   }

   function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ display: 'block', height: '100%', width: '180px', zIndex: 2, marginLeft: 'calc(100vw - 180px)' }}
            onClick={onClick}
         ></div>
      );
   }

   const settings = {
      customPaging: function() {
         return (
            <a>
               <FiberManualRecordIcon sx={{ color: 'lightgray', fontSize: '14px' }} />
            </a>
         );
      },
      dots: true,
      infinite: true,
      autoplay: autoPlay.play,
      autoplaySpeed: 3000,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      beforeChange: (current, next) => setBeforeChange(next),
      afterChange: (current) => setAfterChange(current),
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      pauseOnHover: false,
   };

   useEffect(() => {
      document.getElementById('carouselImage' + instantChange).classList.add(styles.VisibleTransition);
      document.getElementById('carouselImage' + instantChange).classList.remove(styles.BlurSlide);
      document.getElementById('carouselImage' + delayedChange).classList.add(styles.BlurSlide);
      document.getElementById('carouselImage' + delayedChange).classList.remove(styles.VisibleTransition);
   }, [instantChange]);

   return (
      <div className="MovieCarousel">
         <Slider {...settings}>
            {movies.map((item, index) => (
               <div>
                  <div
                     style={{ width: '1100px', height: '600px' }}
                     id={'carouselImage' + index}
                     className={instantChange === index ? 'VisibleTransition' : 'BlurSlide'}
                  >
                     <img
                        id="ImagePoster"
                        src={item.poster}
                        data={item}
                        alt="nothing"
                        style={{ width: '1100px', height: '600px', position: 'absolute' }}
                     />
                     <div className="PosterInfo" style={{ position: 'absolute', width: '1100px', height: '600px' }}>
                        <div
                           style={{
                              width: '100%',
                              padding: '0 45px',
                              marginTop: '470px',
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                           }}
                        >
                           <Button
                              endIcon={<PlayCircleFilledWhiteIcon />}
                              sx={{
                                 backgroundColor: 'white',
                                 borderRadius: '40px',
                                 color: 'black',
                                 textTransform: 'none',
                                 padding: '12px 25px',
                                 fontWeight: 'bold',
                                 ':hover': { backgroundColor: 'lightgrey' },
                              }}
                           >
                              Stream now
                           </Button>
                           <Box sx={{ width: '50px' }}></Box>
                           <Box sx={{ fontWeight: 'bold', color: 'white', fontSize: '20px' }}>{item.category}</Box>
                           <Box
                              sx={{
                                 color: 'white',
                                 margin: '0 10px',
                                 fontSize: '50px',
                                 lineHeight: '1,1',
                                 paddingBottom: '25px',
                              }}
                           >
                              .
                           </Box>
                           <Box
                              sx={{
                                 color: 'white',
                                 display: 'flex',
                                 alignItems: 'center',
                                 fontSize: '20px',
                                 maxWidth: '550px',
                              }}
                           >
                              {item.description}
                           </Box>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </Slider>
         <Box sx={{ width: '40px', marginLeft: '90%', display: 'flex', justifyContent: 'center' }}>
            <IconButton
               sx={{}}
               onClick={() => {
                  setAutoPlay((prev) => ({
                     play: !prev.play,
                     nextActionIcon: prev.play ? (
                        <PlayCircleFilledWhiteOutlinedIcon />
                     ) : (
                        <PauseCircleOutlineOutlinedIcon />
                     ),
                  }));
               }}
               style={{ paddingBottom: 6 }}
            >
               {autoPlay.nextActionIcon}
            </IconButton>
         </Box>
      </div>
   );
}

export default MoviePromoSlider;
