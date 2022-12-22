import { Outlet } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';

export default function MainLayout() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
}
