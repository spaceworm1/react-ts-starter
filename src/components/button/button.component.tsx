import styles from './button.component.module.scss';

import { ButtonVariants } from '../../app.types';

interface Props {
    textContent: string;
    variant: ButtonVariants;
    onClickHandler?: () => void;
}

export default function Button(props: Props) {
    const { textContent, variant, onClickHandler } = props;

    return (
        <button className={styles.button} type={variant} onClick={onClickHandler}>
            {textContent}
        </button>
    );
}
