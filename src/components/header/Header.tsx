import React, {useState} from 'react';
import {Box, Divider, IconButton, List, Typography} from '@mui/material';
import {PATH} from '../../common/enums/path';

interface Props {
    window?: () => Window;
}

export type NavItemType = {
    item: string;
    path: any;
    imgComponent: SvgComponentType;
}

const navItems: NavItemType[] = [
    {item: "Home", path: PATH.BLOGS, imgComponent: HomeIcon},
    {item: "Spends", path: PATH.POSTS, imgComponent: ShoppingCartIcon},
];



export const Header = () => {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}} style={{width: "250px"}}>
            <Typography variant="h6" sx={{my: 2}} color="primary">
                FINANCE TRACKER
            </Typography>
            <Divider/>
            <List>
                {navItems.map((nav, index) => (
                    <NavItem nav={nav} key={index}/>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: "flex"}}>
            <AppBar component="nav" style={{backgroundColor: "white", boxShadow: "none"}}>
                <Toolbar style={{marginLeft: "10%"}}>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main">
                <Toolbar/>
            </Box>
        </Box>
    );
};
