import { useState } from 'react';

import Button from '../button/button.component';
import Projectsmodal from '../../modals/projecs.modal';

import styles from './navigation.component.module.scss';

export default function NavInteraction() {
    const [op, setOp] = useState<boolean>(false);

    const onClickHandler = () => setOp(true);
    const onCloseHandler = () => setOp(false);

    return (
        <div className={styles.interaction}>
            <Button variant="submit" textContent="New Movie" onClickHandler={onClickHandler} />
            <Projectsmodal open={op} onCloseHandler={onCloseHandler} />
        </div>
    );
}
