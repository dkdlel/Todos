import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md'
import { ButtonBase } from '@material-ui/core';
/* Library */

import styles from '../stylesheets/TodoInsert.module.scss';
/* stylSheets */

const TodoInsert = ({ handleClickInsert }) => {

    const [text, setText] = useState('');

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    const onClickAdd = useCallback(() => {
        handleClickInsert(text);
        setText(''); //초기화
    }, [handleClickInsert, text]);

    return (
        <form className={styles['wrap']}>
            <input
                type="text"
                placeholder="할 일을 입력하세요"
                value={text}
                onChange={onChangeText}
            />
            <ButtonBase
                component="button"
                onClick={onClickAdd}>
                <MdAdd />
            </ButtonBase>
        </form>
    );
};

export default TodoInsert;