import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'test/home',
            element: <DashboardDefault />
        },
        {
            path: 'test/stake',
            element: <UtilsTypography />
        },
        {
            path: 'test/shares',
            element: <UtilsColor />
        },
        {
            path: 'test/stats',
            element: <UtilsShadow />
        },
        {
            path: 'test/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: 'test/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: 'test/sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
