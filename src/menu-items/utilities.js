// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconDashboard } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconDashboard
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
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'util-typography',
            title: 'Stake',
            type: 'item',
            url: '/stake',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Shares',
            type: 'item',
            url: '/shares',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Stats',
            type: 'item',
            url: '/stats',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Liquidity',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconWindmill,
            breadcrumbs: false
        }
    ]
};

export default utilities;
