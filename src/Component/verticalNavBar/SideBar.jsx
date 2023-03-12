import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExtensionIcon from '@mui/icons-material/Extension';
import SettingsIcon from '@mui/icons-material/Settings';
import StyleIcon from '@mui/icons-material/Style';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import "./verticalNavbar.css"
import { Input, Row, Col, Label } from "reactstrap";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const SideBar = () => {
    const navigate = useNavigate()
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar position="fixed" elevation={3} sx={{ backgroundColor: "#ffffff", color: "#2f2f2f" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => { setOpen(!open) }}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='active-item'>
                        <ViewInArIcon />
                    </div>
                    <Row style={{ flexGrow: 1 }}>
                        <Col xs={12} md={4} style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 className='ms-3 d-flex justify-content-center align-item-center'><strong>Items</strong></h5>
                        </Col>
                        <Col xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    label="Urban Kisaan/Sainikpuri"
                                    deleteIcon={<ArrowDropDownIcon color="primary" />}
                                    sx={{ fontWeight: 'bold' }}
                                />
                            </Stack>
                        </Col>
                        <Col xs={12} md="4" xl="4">
                            <Row className="justify-content-end ">
                                <Col xl="1" className='sideIcon'><SearchIcon /></Col>
                                <Col xl="1"  className='sideIcon'><AddIcon /></Col>
                                <Col xl="1"  className='sideIcon'><NotificationsIcon /></Col>
                                <Col xl="1"  className='sideIcon'><PersonIcon /></Col>
                            </Row>
                        </Col>
                    </Row>
                </Toolbar>
            </AppBar>

            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <Divider />
                <div className='mt-2'>
                    <List className='mt-5 position-relative'>
                        {[
                            { text: 'item library', icon: <ViewInArIcon />, link: "/" },
                            { text: 'Categories', icon: <CategoryIcon />, link: '/category' },
                            { text: 'inventory', icon: <InventoryIcon />, link: '/inventory' },
                            { text: 'Variant options', icon: <StyleIcon />, link: '/variants' },
                            { text: 'Plugins', icon: <ExtensionIcon />, link: '/plugins' },
                            { text: 'Settings', icon: <SettingsIcon />, link: '/settings' }
                        ].map((item, text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={item.onClick || (() => navigate(item.link))} activeclassname="Mui-selected">
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>


        </>
    );
}
export default SideBar