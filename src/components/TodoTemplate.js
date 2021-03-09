import React from 'react';
/* Library */

import styles from '../stylesheets/TodoTemplate.module.scss';
/* styleSheets */

const TodoTemplate = ({ children }) => {

    return (
        <main className={styles['wrap']}>
            <div className={styles['title']}>일정 관리</div>
            <div className={styles['content']}>{children}</div>
        </main>
    );
};

export default TodoTemplate;