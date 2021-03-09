import React, { useCallback, useReducer, useRef } from 'react';
/* Library */

import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
/* Components */

function Init() {
  const list = [];
  for (let i = 0; i < 2500; i++) {
    list.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  };
  return list;
}

function reducer(todosList, action) {
  switch (action.type) {
    case 'insert':
      return todosList.concat(action.newTodo);
    case 'remove':
      return todosList.filter(todo => todo.id !== action.id);
    case 'toggle':
      return todosList.map((todo) => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo);
    default:
      return todosList;
  }
}
const App = () => {

  // 다양한 상태(insert, remove, toggle)를 관리하기 위해 state가 아닌 reducer를 사용
  const [todosList, dispatch] = useReducer(reducer, undefined, Init);
  const idxRef = useRef(2500); // 새로 추가하기 위한 id

  const handleClickInsert = useCallback((text) => {
    const newTodo = {
      id: idxRef.current,
      text: text,
      checked: false,
    };
    dispatch({ type: 'insert', newTodo });
    idxRef.current += 1;
  }, []);

  const handleClickRemove = useCallback((id) => {
    dispatch({ type: 'remove', id });
  }, []);

  const handleClickToggle = useCallback((id) => {
    dispatch({ type: 'toggle', id })
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert handleClickInsert={handleClickInsert} />
      <TodoList todosList={todosList} handleClickRemove={handleClickRemove} handleClickToggle={handleClickToggle} />
    </TodoTemplate>
  );
};

export default App;