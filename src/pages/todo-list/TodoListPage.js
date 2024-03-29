import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreacteTodo';
import TodoListFooter from './components/TodoListFooter';
import {useLocalStorage} from '../../hooks';
const Page = styled.div`
  min-height: 80vh;
  padding: 50px;
  .CreateTodo {
    margin-bottom: 20px;
  }

  .TodoListFooter {
    margin-top: 20px;
  }
`;

function TodoListPage(props) {
  const todoId = useRef(0);
  const [items, setItems] = useLocalStorage('todos', [], values => {
    todoId.current = values.reduce((sum, value) => {
      return Math.max(sum, value.id) + 1;
    }, 0);
  });

  const handleSelectAll = () => {
    const {items} = this.state;

    this.setState({
      items: items.map(item => {
        item.completed = true;
        return item;
      }),
    });
  };

  const handleUnselectAll = () => {
    const {items} = this.state;

    this.setState({
      items: items.map(item => {
        item.completed = false;
        return item;
      }),
    });
  };

  const handleChangeComplete = (idx, item) => {
    const {items} = this.state;
    items[idx] = item;
    setItems([...items]);
  };

  const handleEditItem = (index, value) => {
    items[index].name = value;

    //   localStorage.setItem('todos', JSON.stringify(items));
    setItems([...items]);
  };

  const handleDeleteItem = index => {
    items.splice(index, 1);

    //   localStorage.setItem('todos', JSON.stringify(items));
    setItems([...items]);
  };

  const handleAddItem = text => {
    todoId.current += 1;
    const newItems = [
      ...items,
      {
        id: todoId.current,
        name: text,
        completed: false,
      },
    ];
    setItems(newItems);
    //   localStorage.setItem('todos', JSON.stringify(newItems));
  };

  return (
    <Page>
      <CreateTodo onCreate={handleAddItem} />
      <TodoList
        items={items}
        onDelete={handleDeleteItem}
        onEdit={handleEditItem}
        onChangeComplete={handleChangeComplete}
      />
      <TodoListFooter
        items={items}
        onSelectAll={handleSelectAll}
        onUnselectAll={handleUnselectAll}
      />
    </Page>
  );
}

export default TodoListPage;
