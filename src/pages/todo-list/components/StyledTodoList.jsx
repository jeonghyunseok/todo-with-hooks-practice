import React from 'react';

import styled from 'styled-components';

const StyledTodoList = styled.div`
  .TodoList {
    margin: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 600px;

    .TodoListItem {
      cursor: pointer;
      padding: 10px;
      border-bottom: 1px dashed #ccc;
      display: flex;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: aquamarine;
      }

      .col-ck-box {
        width: 30px;
      }

      .col-content {
        width: 100%;
      }

      .col-cmd-box {
        width: 20px;
        .btn {
          cursor: pointer;
        }

        .btn-edit {
          display: none;
        }
      }
    }
  }
`;
export default StyledTodoList;
