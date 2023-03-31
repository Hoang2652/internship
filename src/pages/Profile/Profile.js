import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreateIcon from '@mui/icons-material/Create';
import { grey, red } from '@mui/material/colors';
import img from '@/assets/images/1.PNG';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import TextField from '@mui/material/TextField';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import Divider from '@mui/material/Divider';
import TuneIcon from '@mui/icons-material/Tune';

export default function Profile() {
   const [value, setValue] = React.useState('1');

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(3),
   }));

   const itemData = [
      {
         img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
         title: 'Breakfast',
         author: 'Nguyễn Văn A',
      },
      {
         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
         title: 'Burger',
         author: 'Nguyễn Văn A',
      },
      {
         img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
         title: 'Camera',
         author: 'Nguyễn Văn A',
      },
      {
         img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
         title: 'Coffee',
         author: 'Nguyễn Văn A',
      },
   ];

   const ItemACtion = styled(Box)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'center',
   }));

   return (
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, backgroundColor: grey[100] }}>
         <Box sx={{ margin: 'auto' }}>
            <Box sx={{ backgroundColor: grey[300], height: '30vh', borderRadius: '0 0 10px 10px' }}></Box>
            <Box
               sx={{
                  width: `calc(80vw)`,
                  display: 'flex',
                  flexDirection: 'row',
                  position: 'relative',
                  alignItems: 'center',
                  margin: 'auto',
               }}
            >
               <Box sx={{ position: 'absolute', bottom: 0, alignSelf: 'flex-start', marginTop: 0 }}>
                  <Avatar alt="Remy Sha" src={img} sx={{ width: 170, height: 170 }} />
               </Box>
               <Box sx={{ width: 180 }}></Box>
               <Box sx={{ display: 'flex', flexGrow: 1, marginTop: 2 }}>
                  <Box sx={{ flexDirection: 'column' }}>
                     <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Nguyễn Viết Hoàng
                     </Typography>
                     <Typography variant="body1" display="block" gutterBottom>
                        100 friends
                     </Typography>
                     <Box>
                        <AvatarGroup total={24} sx={{ justifyContent: 'flex-end' }}>
                           <Avatar alt="Remy Sharp" src={img} />
                           <Avatar alt="Travis Howard" src={img} />
                           <Avatar alt="Agnes Walker" src={img} />
                           <Avatar alt="Trevor Henderson" src={img} />
                        </AvatarGroup>
                     </Box>
                  </Box>
               </Box>
               <Box sx={{ alignSelf: 'flex-end' }}>
                  <Stack direction="row" spacing={2}>
                     <Button variant="contained" style={{ textTransform: 'none' }}>
                        <AddCircleIcon sx={{ marginRight: 1 }} />
                        Add to Story
                     </Button>
                     <Button
                        variant="contained"
                        sx={{
                           backgroundColor: grey[300],
                           color: 'black',
                           ':hover': {
                              bgcolor: grey[400],
                              color: 'black',
                           },
                        }}
                        style={{ textTransform: ' none' }}
                     >
                        <CreateIcon sx={{ marginRight: 1 }} />
                        Edit Profile
                     </Button>
                  </Stack>
               </Box>
            </Box>
            <div className="login__dash"></div>
            <Box sx={{ width: '80vw', typography: 'body1', margin: 'auto' }}>
               <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                     <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Posts" value="1" />
                        <Tab label="About" value="2" />
                        <Tab label="Friends" value="3" />
                        <Tab label="Photo" value="4" />
                        <Tab label="Video" value="5" />
                        <Tab label="Check-ins" value="6" />
                     </TabList>
                  </Box>
                  <Box sx={{ backgroundColor: grey[100] }}>
                     <Box sx={{ width: '80vw', margin: 'auto' }}>
                        <TabPanel value="1">
                           <Box sx={{ flexGrow: 1 }}>
                              <Grid container spacing={2}>
                                 <Grid item xs={6} md={4}>
                                    <Item>
                                       <Typography align="left" sx={{ fontWeight: 'bold' }} variant="h6">
                                          Intro
                                       </Typography>
                                       <Typography>Helu</Typography>
                                       <div className="login__dash"></div>
                                       <Box sx={{ display: 'flex', height: '150px' }}>
                                          <CircularProgress sx={{ margin: 'auto' }} />
                                       </Box>
                                    </Item>
                                    <Item>
                                       <Typography align="left" sx={{ fontWeight: 'bold' }} variant="h6">
                                          Photos
                                       </Typography>
                                       <div className="login__dash"></div>
                                       <Box sx={{ display: 'flex' }}>
                                          <ImageList>
                                             {itemData.map((item) => (
                                                <ImageListItem key={item.img}>
                                                   <img
                                                      src={`${item.img}?w=248&fit=crop&auto=format`}
                                                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                      alt={item.title}
                                                      loading="lazy"
                                                   />
                                                </ImageListItem>
                                             ))}
                                          </ImageList>
                                       </Box>
                                    </Item>
                                    <Item>
                                       <Typography align="left" sx={{ fontWeight: 'bold' }} variant="h6">
                                          Friends
                                       </Typography>
                                       <Typography align="left">100 friends</Typography>
                                       <Box sx={{ display: 'flex' }}>
                                          <ImageList sx={{ marginTop: 2 }}>
                                             {itemData.map((item) => (
                                                <ImageListItem key={item.img}>
                                                   <img
                                                      src={`${item.img}?w=248&fit=crop&auto=format`}
                                                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                      alt={item.title}
                                                      loading="lazy"
                                                   />
                                                   <ImageListItemBar
                                                      sx={{ fontWeight: 'bold', alignSelf: 'flex-start' }}
                                                      position="below"
                                                      title={item.author}
                                                   />
                                                </ImageListItem>
                                             ))}
                                          </ImageList>
                                       </Box>
                                    </Item>
                                 </Grid>
                                 <Grid item xs={6} md={8}>
                                    <Item>
                                       <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                          <Avatar alt="Remy Sha" src={img} sx={{ width: 50, height: 50 }} />
                                          <TextField
                                             sx={{
                                                marginLeft: 2,
                                                flexGrow: 1,
                                                backgroundColor: grey[200],
                                                borderRadius: 10,
                                                borderStyle: 'none',
                                             }}
                                             variant="standard"
                                             size="40px"
                                             required
                                             fullWidth
                                             placeholder="What's do you mind?"
                                             InputProps={{
                                                disableUnderline: true,
                                                style: {
                                                   height: '50px',
                                                   marginLeft: 10,
                                                },
                                             }}
                                          />
                                       </Box>
                                       <div className="login__dash"></div>
                                       <Stack
                                          direction="row"
                                          divider={<Divider orientation="vertical" flexItem />}
                                          spacing={2}
                                       >
                                          <ItemACtion>
                                             <VideoCameraFrontIcon sx={{ color: red[500] }} />
                                             <Typography sx={{ marginLeft: 1, fontWeight: 500 }}>Live Video</Typography>
                                          </ItemACtion>
                                          <ItemACtion>
                                             <PhotoLibraryIcon color="success" />
                                             <Typography sx={{ marginLeft: 1, fontWeight: 500 }}>
                                                Photo/video
                                             </Typography>
                                          </ItemACtion>
                                          <ItemACtion>
                                             <AssistantPhotoIcon color="primary" />
                                             <Typography sx={{ marginLeft: 1, fontWeight: 500 }}>Life event</Typography>
                                          </ItemACtion>
                                       </Stack>
                                    </Item>
                                    <Item
                                       sx={{
                                          flexDirection: 'row',
                                          display: 'flex',
                                          justifyContent: 'space-between',
                                       }}
                                    >
                                       <Typography align="left" sx={{ fontWeight: 'bold' }} variant="h6">
                                          Posts
                                       </Typography>
                                       <Button
                                          variant="contained"
                                          sx={{
                                             backgroundColor: grey[200],
                                             color: 'black',
                                             ':hover': {
                                                bgcolor: grey[300],
                                                color: 'black',
                                             },
                                          }}
                                          style={{ textTransform: ' none' }}
                                       >
                                          <TuneIcon sx={{ marginRight: 1 }} />
                                          Filler
                                       </Button>
                                    </Item>
                                    <Item>
                                       <Box sx={{ height: '300px' }}>
                                          <Typography sx={{ fontWeight: 'bold', margin: 'auto' }} variant="h6">
                                             To be Developing
                                          </Typography>
                                       </Box>
                                    </Item>
                                 </Grid>
                              </Grid>
                           </Box>
                        </TabPanel>
                        <TabPanel value="2">This is about pages</TabPanel>
                        <TabPanel value="3">This is friend pages</TabPanel>
                     </Box>
                  </Box>
               </TabContext>
            </Box>
         </Box>
      </Box>
   );
}
