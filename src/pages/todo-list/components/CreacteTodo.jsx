import React, {useRef, useState} from 'react';
import {Input, Icon} from 'antd';

const MAX_LEN = 20;

export default function CreateTodo(props) {
  const {onCreate} = props;
  const inputRef = useRef();

  const [count, setCount] = useState(MAX_LEN);

  const handleEnterTodoText = e => {
    onCreate(e.target.value);
    inputRef.current.setState({
      value: '',
    });
  };

  const handleKeyDown = e => {
    console.log(e.key, e.target.value);
    const text = e.target.value;
    if (e.key !== 'Backspace' && text.length >= 20) {
      e.preventDefault();
    }

    setCount(MAX_LEN - text.length - 1);
  };
  const handleKeyUp = e => {
    const text = e.target.value;
    setCount(MAX_LEN - text.length);
  };
  return (
    <div className="CreateTodo">
      <Input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onPressEnter={handleEnterTodoText}
        addonAfter={<div>{count}</div>}
      />
    </div>
  );
}
