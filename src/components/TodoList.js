import React from 'react';
/* Library */

import styles from '../stylesheets/TodoList.module.scss';
/* components */

import TodoListItem from './TodoListItem';
/* styleSheets */

const TodoList = ({ todosList, handleClickRemove, handleClickToggle }) => {

    return (
        <main className={styles['wrap']}>
            {todosList.map(todos => (
                <TodoListItem
                    key={todos.id}
                    todo={todos}
                    handleClickRemove={handleClickRemove}
                    handleClickToggle={handleClickToggle}
                />
            ))}
        </main>
    );
};

export default TodoList;