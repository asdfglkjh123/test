import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const Dashboard = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const Stake = Loadable(lazy(() => import('views/utilities/Stake')));
const Shares = Loadable(lazy(() => import('views/utilities/Shares')));
const Stats = Loadable(lazy(() => import('views/utilities/Stats')));
const DEX = Loadable(lazy(() => import('views/utilities/DEX')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/home',
            element: <Dashboard />
        },
        {
            path: '/stake',
            element: <Stake />
        },
        {
            path: '/shares',
            element: <Shares />
        },
        {
            path: '/stats',
            element: <Stats />
        },
        {
            path: '/dex',
            element: <DEX />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
