import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { orange, grey, deepOrange } from '@mui/material/colors';
import { Info, TitleInfo, OutlineButton } from './Info';
import NumberVolume from '@/components/Button/NumberVolume';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const color = orange[900];

function Asset() {
   const [index, setIndex] = React.useState(5);

   const [start, setStart] = React.useState(0);

   const [imageIndex, setImageIndex] = React.useState(0);

   const listImage = [
      'https://cf.shopee.vn/file/b2c8ffcbe12079708245d61d5986d612', // đen
      'https://cf.shopee.vn/file/69685386e974e58424e25585d01a2a13', // xám đậm
      'https://cf.shopee.vn/file/329d1efeed1369d1b90d191c7a553573', // trắng
      'https://cf.shopee.vn/file/c02d47a9b5055a50a7b5a0d42dafbeba', // xám nhạt
      'https://cf.shopee.vn/file/db33fc3905fd9a3678adb949230d3b8c_tn', // 3 ưu điểm
      'https://cf.shopee.vn/file/b6ee351887708b9f9a68f22132c63d7d', // chất vải
      'https://cf.shopee.vn/file/7c00e25c03557a6e2c90b2796e9c0542', // chi tiết áo
      'https://cf.shopee.vn/file/e2011bdac09cab2705dfb7ca63377890', // size áo
      'https://cf.shopee.vn/file/1cf841983bb885a365f6e8ebc6e23b6a', // nhà máy
      'https://cf.shopee.vn/file/87cddcacc412755a73ed642978369703', // đỏ
      'https://cf.shopee.vn/file/sg-11134201-22120-w18v793t1jlv5c', // vàng
      'https://cf.shopee.vn/file/sg-11134201-22120-wgnltl0t1jlveb', // nâu
      'https://cf.shopee.vn/file/sg-11134201-22120-8dolohsw1jlv0f', // xanh rêu
      'https://cf.shopee.vn/file/sg-11134201-22120-b0eq89a31jlv7b', // xanh neon
      'https://cf.shopee.vn/file/vn-11134207-23010-4h538ltkuwlv32', // áo loang
   ];

   const handleChangeImage = (index) => {
      setImageIndex(index + start);
   };

   const changeImage = (item) => {
      setImageIndex(item);
   };

   const handleLeftImage = () => {
      if (start > 0) {
         setIndex(index - 1);
         setStart(start - 1);
      }
   };

   const handleRightImage = () => {
      if (index < listImage.length - 6) {
         setIndex(index + 1);
         setStart(start + 1);
      }
   };
   return (
      <Card sx={{ flexGrow: 1, minHeight: `calc(100vh - 64px - 2rem)`, m: 2, p: 2 }}>
         <Grid container spacing={2}>
            <Grid item xs={4}>
               <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ position: 'relative' }}>
                     <Box
                        sx={{
                           backgroundImage: `url(${listImage[imageIndex]})`,
                           backgroundSize: 'contain',
                           backgroundRepeat: 'no-repeat',
                           width: ' 100%',
                           pt: ' 100%',
                           backgroundPosition: '50%',
                           opacity: 1,
                           transition: 'opacity .2s ease',
                        }}
                     ></Box>
                  </Box>
                  <Box
                     sx={{
                        margin: ' 5px -5px',
                        position: 'relative',
                     }}
                  >
                     {listImage.slice(start, index).map((image, index) => (
                        <Box
                           key={index}
                           sx={{
                              display: 'inline-block',
                              padding: '5px',
                              boxSizing: 'border-box',
                              width: '20%',
                           }}
                           onMouseEnter={() => handleChangeImage(index)}
                        >
                           <Box sx={{ position: 'relative' }}>
                              <Box
                                 sx={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    width: ' 100%',
                                    pt: ' 100%',
                                    backgroundPosition: '50%',
                                    opacity: 1,
                                    transition: 'opacity .2s ease',
                                 }}
                              ></Box>
                           </Box>
                        </Box>
                     ))}

                     <Button
                        sx={{
                           outline: 'none',
                           cursor: 'pointer',
                           border: 0,
                           fontSize: '.875rem',
                           fontWeight: 300,
                           lineHeight: 1,
                           letterSpacing: 0,
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           p: 0,
                           left: '5px',
                           position: 'absolute',
                           minWidth: '1.25rem',
                           height: ' 2.5rem',
                           top: '50%',
                           transform: 'translateY(-50%)',
                           color: '#fff',
                        }}
                        onClick={handleLeftImage}
                     >
                        <ArrowBackIosNewIcon />
                     </Button>
                     <Button
                        sx={{
                           outline: 'none',
                           cursor: 'pointer',
                           border: 0,
                           fontSize: '.875rem',
                           fontWeight: 300,
                           lineHeight: 1,
                           letterSpacing: 0,
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           p: 0,
                           right: '5px',
                           position: 'absolute',
                           minWidth: '1.25rem',
                           height: ' 2.5rem',
                           top: '50%',
                           transform: 'translateY(-50%)',
                           color: '#fff',
                        }}
                        onClick={handleRightImage}
                     >
                        <ArrowForwardIosIcon />
                     </Button>
                  </Box>
               </Box>
            </Grid>
            <Grid item xs={8}>
               <Box sx={{ display: 'flex', flexDirection: 'column', m: 2, gap: 1 }}>
                  <Typography variant="h5">Áo khoác Hoodie Nam, Hoodie Basic Unisex Nỉ From Rộng Màu Đen</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                     <Typography
                        variant="body1"
                        sx={{ color: { color }, borderBottom: '1px solid', borderBottomColor: { color } }}
                     >
                        3.9
                     </Typography>
                     <Rating name="read-only" value={4} readOnly sx={{ color: { color } }} />
                  </Box>
                  <Box sx={{ width: '100%', backgroundColor: grey[50] }}>
                     <Typography sx={{ fontSize: '40px', color: { color }, p: 1 }}>90.000$ - 100.000$</Typography>
                  </Box>
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                     <Grid container item>
                        <TitleInfo>Bảo Hiểm</TitleInfo>
                        <Info>
                           <Typography>Bảo hiểm Thời trang</Typography>
                        </Info>
                     </Grid>
                     <Grid container item spacing={2}>
                        <TitleInfo>Vận Chuyển</TitleInfo>
                        <Info>
                           <Box
                              sx={{
                                 display: 'grid',
                                 gridTemplateColumns: 'auto 1fr',
                                 gap: '10px',
                              }}
                           >
                              <LocalShippingIcon color="success" />
                              <Typography>Miễn phí vận chuyển</Typography>
                              <LocalShippingIcon />
                              <Box>
                                 <Typography>Vận chuyển tới</Typography>
                              </Box>
                           </Box>
                        </Info>
                     </Grid>
                     <Grid container item spacing={2}>
                        <TitleInfo>Màu sắc</TitleInfo>
                        <Info>
                           <OutlineButton handleChangeColor={() => changeImage(1)}>Xám đậm</OutlineButton>
                           <OutlineButton handleChangeColor={() => changeImage(3)}>Xám nhạt</OutlineButton>
                           <OutlineButton handleChangeColor={() => changeImage(2)}>Trắng</OutlineButton>
                           <OutlineButton handleChangeColor={() => changeImage(0)}>Đen</OutlineButton>
                           <OutlineButton handleChangeColor={() => changeImage(9)}>Đỏ</OutlineButton>
                           <OutlineButton handleChangeColor={() => changeImage(10)}>Vàng</OutlineButton>
                           <OutlineButton handleChangeColor={() => changeImage(11)}>Nâu</OutlineButton>
                           <OutlineButton handleChangeColor={() => changeImage(12)}>Xanh Rêu</OutlineButton>
                           <OutlineButton handleChangeColor={() => changeImage(13)}>Xanh Neon</OutlineButton>
                           <OutlineButton handleChangeColor={() => changeImage(14)}>Áo loang</OutlineButton>
                        </Info>
                     </Grid>
                     <Grid container item spacing={2}>
                        <TitleInfo>Size</TitleInfo>
                        <Info>
                           <OutlineButton>L</OutlineButton>
                           <OutlineButton>XL</OutlineButton>
                           <OutlineButton>XXL</OutlineButton>
                           <OutlineButton>M</OutlineButton>
                           <OutlineButton>3XL</OutlineButton>
                        </Info>
                     </Grid>
                     <Grid container item spacing={2}>
                        <TitleInfo>Số Lượng</TitleInfo>
                        <Info>
                           <NumberVolume />
                        </Info>
                     </Grid>
                  </Grid>
                  <Box sx={{ mt: 2 }}>
                     <Button
                        variant="outlined"
                        sx={{
                           color: { color },
                           borderColor: orange[900],
                           backgroundColor: deepOrange[50],
                           fontSize: '15px',
                           p: '0 20px',
                           height: '48px',
                           textTransform: 'none',
                           ':hover': {
                              color: { color },
                              borderColor: orange[900],
                              backgroundColor: grey[100],
                           },
                        }}
                     >
                        <AddShoppingCartIcon />
                        Thêm Vào Giỏ Hàng
                     </Button>
                     <Button
                        variant="contained"
                        sx={{
                           backgroundColor: orange[900],
                           fontSize: '15px',
                           p: '0 20px',
                           height: '48px',
                           ml: 2,
                           textTransform: 'none',
                           ':hover': {
                              backgroundColor: deepOrange[600],
                           },
                        }}
                     >
                        Mua Ngay
                     </Button>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </Card>
   );
}

export default Asset;
