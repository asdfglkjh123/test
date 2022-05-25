// assets
import HomeIcon from '@mui/icons-material/Home';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import LayersIcon from '@mui/icons-material/Layers';

// constant
const icons = {
    LayersIcon,
    GroupWorkIcon,
    QueryStatsIcon,
    SwapVerticalCircleIcon,
    HomeIcon
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Ecosystem',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Home',
            type: 'item',
            url: '/home',
            icon: icons.HomeIcon,
            breadcrumbs: false
        },
        {
            id: 'util-typography',
            title: `Stake`,
            type: 'item',
            url: '/stake',
            icon: icons.LayersIcon,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'sSTX',
            type: 'item',
            url: '/shares',
            icon: icons.GroupWorkIcon,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Stats',
            type: 'item',
            url: '/stats',
            icon: icons.QueryStatsIcon,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'DEX',
            type: 'item',
            url: '/dex',
            icon: icons.SwapVerticalCircleIcon,
            breadcrumbs: false
        }
    ]
};

export default utilities;
