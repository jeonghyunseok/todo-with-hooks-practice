import React, {useRef} from 'react';
import {Input, Icon} from 'antd';
export default function CreateTodo(props) {
  const inputRef = useRef();
  const {onCreate} = props;

  const handleEnterTodoText = e => {
    onCreate(e.target.value);
    inputRef.current.setState({
      value: '',
    });
  };

  return (
    <div className="CreateTodo">
      <Input
        ref={inputRef}
        onPressEnter={handleEnterTodoText}
        addonAfter={<Icon type="plus" />}
      />
    </div>
  );
}