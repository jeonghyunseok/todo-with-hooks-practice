import React, {useRef} from 'react';

export default function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = e => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    inputEl.current.setSelectionRange(0, e.inputEl.current.value.length - 2);
  };
  return (
    <>
      <input ref={inputEl} type="text" />{' '}
      <button onClick={onButtonClick}>Focus the input</button>{' '}
    </>
  );
}
