import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
/* Library */

import styles from '../stylesheets/TodoList.module.scss';
/* components */

import TodoListItem from './TodoListItem';
/* styleSheets */

const TodoList = ({ todosList, handleClickRemove, handleClickToggle }) => {

    const rowRenderer = useCallback(({ index, key, style }) => {
        const todo = todosList[index];
        return (
            <TodoListItem
                key={key}
                todo={todo}
                handleClickRemove={handleClickRemove}
                handleClickToggle={handleClickToggle}
                style={style}
            />
        );
    }, [handleClickRemove, handleClickToggle, todosList]);

    return (
        <List
            className={styles['wrap']}
            width={512} // 전체
            height={513} // 전체
            rowCount={todosList.length} // 항목 갯수
            rowHeight={57} // 항복 높이
            rowRenderer={rowRenderer} // 항목 렌더링 함수
            list={TodoList} // 배열
            style={{ outline: 'none' }}
        />
    );
};

export default React.memo(TodoList);