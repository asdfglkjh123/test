// assets
import { IconDashboard, HomeIcon } from '@tabler/icons';

// constant
const icons = { IconDashboard, HomeIcon };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: icons.HomeIcon,
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/home',
            icon: icons.HomeIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
