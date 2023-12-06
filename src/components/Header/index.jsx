import React, {useContext, useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from "../../contexts/auth";
import LogoutIcon from '@mui/icons-material/Logout';

const ButtonAppBar = () => {
  const { logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    logout();
  }

  useEffect(() =>{
    const recoveredUser = localStorage.getItem('user');

    if(recoveredUser){
      setUser(JSON.parse(recoveredUser));
    }
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Olá, {user?.name}
            </Typography>
            <Button color="inherit" onClick={handleLogout}><LogoutIcon /></Button>
          </Toolbar>
        </AppBar>

        
      </Box>
    </>
  );
};

export default ButtonAppBar;

// import React, { useState } from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
// } from "@material-ui/core";
// import { Link } from "react-router-dom";

// const ButtonAppBar = () => {
//   return (
//     <>
//       <Drawer>
//         <List>
//          <ListItem>
//             <ListItemText>
//               <Link to="/">Home</Link>
//             </ListItemText>
//           </ListItem>
//           <ListItem>
//             <ListItemText>
//               <Link to="/about">About</Link>
//             </ListItemText>
//           </ListItem>
//           <ListItem>
//             <ListItemText>
//               <Link to="/contact">Contact</Link>
//             </ListItemText>
//           </ListItem>
//           <ListItem >
//             <ListItemText>
//               <Link to="/about">Faq</Link>
//             </ListItemText>
//           </ListItem>
//         </List>
//       </Drawer>
//     </>
//   );
// }
// export default ButtonAppBar;

