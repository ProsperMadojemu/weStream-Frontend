import { Drawer as DrawerUi, List, ListItem, ListItemText, ListItemIcon, ListItemButton, Divider } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from 'react-router-dom';
import React from 'react';
import './Drawer.css'

const Drawer = ({ open, setOpen }) => {
    return (
        <DrawerUi anchor="left" open={open} onClose={() => setOpen(false)}>
            <div className="drawer">
                <div className="drawer-title">
                    WeStream
                </div>
                <List>
                    <ListItemButton  component={Link} to="/" onClick={() => setOpen(false)}>
                        <ListItemIcon><HomeIcon style={{ color: "#C8ACD6" }} /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton  component={Link} to="/about" onClick={() => setOpen(false)}>
                        <ListItemIcon><InfoIcon style={{ color: "#C8ACD6" }} /></ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                    <ListItemButton  component={Link} to="/pricing" onClick={() => setOpen(false)}>
                        <ListItemIcon><AttachMoneyIcon style={{ color: "#C8ACD6" }} /></ListItemIcon>
                        <ListItemText primary="Pricing" />
                    </ListItemButton>
                </List>
                <Divider sx={{ borderColor: "#f0f0f06b" }} />
                <div className="drawer-bottom">
                    <button className='signIn' onClick={() => setOpen(false)}>
                        <Link to="/login">Sign In</Link>
                    </button>
                    <button className='signUp' onClick={() => setOpen(false)}>
                        <Link to="/register">Get started</Link>
                    </button>
                </div>
            </div>
        </DrawerUi>
    );
};

export default Drawer;
