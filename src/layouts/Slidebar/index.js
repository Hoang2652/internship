import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { NavLink } from 'react-router-dom';

function SliderBar(props) {
   const [selectedIndex, setSelectedIndex] = React.useState(1);

   const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
   };

   React.useEffect(() => {
      setSelectedIndex(props.selectedItem);
   }, [props.selectedItem]);

   return (
      <>
         <List
            component="nav"
            sx={{
               // selected and (selected + hover) states
               '&& .Mui-selected, && .Mui-selected:hover': {
                  bgcolor: '#42a5f5',
                  '&, & .MuiListItemIcon-root': {
                     color: 'white',
                  },
               },
               // hover states
               '& .MuiListItemButton-root:hover': {
                  bgcolor: '#90caf9',
                  '&, & .MuiListItemIcon-root': {
                     color: 'white',
                  },
               },
            }}
         >
            <NavLink to="/admin/home" className="nav-bar-link">
               <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                  <ListItemIcon>
                     <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
               </ListItemButton>
            </NavLink>
            <NavLink to="/admin/category" className="nav-bar-link">
               <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                  <ListItemIcon>
                     <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Category" />
               </ListItemButton>
            </NavLink>
            <NavLink to="/admin/asset" className="nav-bar-link">
               <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                  <ListItemIcon>
                     <AssuredWorkloadIcon />
                  </ListItemIcon>
                  <ListItemText primary="Asset" />
               </ListItemButton>
            </NavLink>
            <NavLink to="/admin/customer" className="nav-bar-link">
               <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
                  <ListItemIcon>
                     <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Customer" />
               </ListItemButton>
            </NavLink>
            <NavLink to="/admin/product" className="nav-bar-link">
               <ListItemButton selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)}>
                  <ListItemIcon>
                     <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Product" />
               </ListItemButton>
            </NavLink>
         </List>
      </>
   );
}

export default SliderBar;
