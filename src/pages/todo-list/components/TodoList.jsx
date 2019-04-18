import React from 'react';
import TodoListItem from './TodoListItem';
import StyledTodoList from './StyledTodoList';
import {Button} from 'antd';
import PropTypes from 'prop-types';

function TodoList(props) {
  const {
    items,
    onDelete,
    onEdit,
    onChangeComplete,
    onUnselectAll,
    onSelectAll,
  } = props;

  const handleChangeComplteItem = (item, index, value) => {
    item.completed = value;
    onChangeComplete(index, item);
  };

  const isSelectedAll = items.every(({completed}) => completed);

  return (
    <StyledTodoList className="TodoList">
      <div>
        {items.map((item, index) => {
          return (
            <TodoListItem
              key={`item-${index}`}
              {...item}
              onDelete={e => onDelete(index)}
              onEdit={value => onEdit(index, value)}
              onChangeSelect={e =>
                handleChangeComplteItem(item, index, e.target.checked)
              }
            />
          );
        })}
      </div>

      <div className={'footer'}>
        {isSelectedAll ? (
          <Button onClick={onUnselectAll}>선택해제</Button>
        ) : (
          <Button onClick={onSelectAll}>전체선택</Button>
        )}

        <div>
          <span>할일 {items.filter(item => !item.completed).length}</span>
          <span>완료 {items.filter(item => item.completed).length}</span>
        </div>
      </div>
    </StyledTodoList>
  );
}

TodoList.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
  onUnselectAll: PropTypes.func,
};

export default TodoList;
