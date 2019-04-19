import React from 'react';
import {Button} from 'antd';
import styled from 'styled-components';

const Footer = styled.div`
  .footer {
    display: flex;
    justify-content: space-between;

    div {
      span {
        margin-left: 100px;
      }
    }
  }
`;

export default function TodoListFooter(props) {
  const {onSelectAll, onUnselectAll, items} = props;
  const isSelectedAll = items.every(({completed}) => completed);

  return (
    <Footer>
      <div className="TodoListFooter footer">
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
    </Footer>
  );
}
