import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {mainNavbarItems} from "../consts/navbarItems";
import { useNavigate } from "react-router-dom";


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



export default function ProminentAppBar() {
    const navigate = useNavigate()
    const drawerWidth = 220
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        // <Box sx={{ flexGrow: 1 }}>
        //     <AppBar position="static">
        //         <StyledToolbar>
        //             <IconButton
        //                 size="small"
        //                 edge="start"
        //                 color="inherit"
        //                 aria-label="open drawer"
        //                 sx={{ mr: 2, width: 60, height: 50 }}
        //             >
        //                 {/*<MenuIcon />*/}
        //                 <img src="https://i.postimg.cc/Vvg1Wn8H/inprof-logo.jpg" alt="icon"/>
        //             </IconButton>
        //             <Typography
        //                 variant="h5"
        //                 noWrap
        //                 component="div"
        //                 sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
        //             >
        //                 MUI
        //             </Typography>
        //             <IconButton size="large" aria-label="search" color="inherit">
        //                 <SearchIcon />
        //             </IconButton>
        //             <IconButton
        //                 size="large"
        //                 aria-label="display more actions"
        //                 edge="end"
        //                 color="inherit"
        //             >
        //                 <MoreIcon />
        //             </IconButton>
        //         </StyledToolbar>
        //     </AppBar>
        // </Box>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{width: `calc(100% - ${drawerWidth}px)`}} variant="h6" noWrap component="div">
                        Ин&проф конкурс
                    </Typography>
                </Toolbar>
            </AppBar>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#101f33',
                    color: 'rgba(255, 255, 255, 0.7)'
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {mainNavbarItems.map((item, index) => (
                    <ListItem
                        key={item.id}
                        disablePadding
                        onClick = {() => navigate(item.route)}
                    >
                        <ListItemButton>
                            <ListItemIcon sx={{color: 'rgba(255, 255, 255, 0.7)'}}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
        </Box>

    );
}