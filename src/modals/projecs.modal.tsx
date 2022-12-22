import { useState } from 'react';
import { createPortal } from 'react-dom';

import { useDispatch } from 'react-redux';

import { addProject } from './projectsSlice';

import styles from './projects.modal.module.scss';

interface Props {
    open: boolean;
    onCloseHandler: () => void;
}

export default function Projectsmodal(props: Props) {
    const [project, setProject] = useState<string>('');
    const dispatch = useDispatch();
    const { onCloseHandler, open } = props;

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addProject(project));
        setProject('');
        onCloseHandler();
    };

    if (!open) return null;

    return createPortal(
        <>
            <div className={styles.overLay}></div>
            <form className={styles.modal} onSubmit={onFormSubmit}>
                <label>Project Name</label>
                <input type="text" value={project} onChange={(e) => setProject(e.target.value)} />
                <button>Submit</button>
                <button onClick={onCloseHandler}>Close</button>
            </form>
        </>,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.getElementById('modals-portal')!
    );
}
