import InfoIcon from '@mui/icons-material/Info';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <InfoIcon />,
        label: 'О нас',
        route: 'o-nas',
    },
    {
        id: 1,
        icon: <NewspaperIcon />,
        label: 'Новости',
        route: 'news',
    },
    {
        id: 2,
        icon: <CorporateFareIcon />,
        label: ' Организаторы',
        route: 'organizers',
    },
    {
        id: 3,
        icon: <EventNoteIcon />,
        label: ' График',
        route: 'graphic',
    },
    {
        id: 4,
        icon: <HowToRegIcon />,
        label: 'Участвовать',
        route: 'register',
    },
    {
        id: 5,
        icon: <LoginIcon />,
        label: 'Войти',
        route: 'login',
    },
]