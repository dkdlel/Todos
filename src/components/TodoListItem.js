import React from 'react';
import { MdCheckBox, MdRemoveCircleOutline, MdCheckBoxOutlineBlank } from 'react-icons/md';
import classnames from 'classnames/bind';
import { ButtonBase } from '@material-ui/core';
/* Library */

import styles from '../stylesheets/TodoListItem.module.scss';
/* StyleSteets */

const cn = classnames.bind(styles);

const TodoListItem = ({ todo, handleClickRemove, handleClickToggle }) => {

    const { id, text, checked } = todo;
    return (
        <main className={styles['wrap']}>
            <section className={cn('checkbox', { checked })} onClick={() => handleClickToggle(id)}>
                <ButtonBase component="div">
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                </ButtonBase>
                <div className={styles['text']}>{text}</div>
            </section>
            <ButtonBase component="div" className={styles['remove']} onClick={() => handleClickRemove(id)}>
                <MdRemoveCircleOutline />
            </ButtonBase>
        </main>
    );
};

export default React.memo(TodoListItem);