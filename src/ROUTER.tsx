import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from './ROUTES';

import MainLayout from './mainLayout';
import HomePage from './pages/home.page';
import ProjectsPage from './pages/project.page';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={ROUTES.root} element={<Navigate to={ROUTES.HOME} />} />
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
