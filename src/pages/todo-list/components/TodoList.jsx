import React from 'react';
import TodoListItem from './TodoListItem';
import StyledTodoList from './StyledTodoList';

import PropTypes from 'prop-types';

function TodoList(props) {
  const {items, onDelete, onEdit, onChangeComplete} = props;
  const handleChangeComplteItem = (item, index, value) => {
    item.completed = value;
    onChangeComplete(index, item);
  };

  return (
    <StyledTodoList>
      <div className="TodoList">
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
