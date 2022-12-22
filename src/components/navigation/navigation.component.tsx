import { Link } from 'react-router-dom';

import { ROUTES } from '../../ROUTES';

import NavInteraction from './nav-interaction.component';

import styles from './navigation.component.module.scss';

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.PROJECTS}>Projects</Link>
                </li>
            </div>
            <NavInteraction />
        </nav>
    );
}
