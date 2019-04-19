import React, {useRef, useContext} from 'react';
import {Input, Button, message} from 'antd';
import styled from 'styled-components';
import {BlogContext} from '../../contexts/BlogContext';
const Page = styled.div`
  padding: 30px;
  .btn-area {
    padding: 10px 0;
    text-align: right;
  }
`;
export default function BlogPostPage(props) {
  const textRef = useRef();
  const {onAddPost} = useContext(BlogContext);

  function handlePost() {
    console.log('click');
    const content = textRef.current.textAreaRef.value;
    if (!content) {
      message.info('빈 글입니다.');
    }
    console.log('서버로 전송', content);
    onAddPost(content, result => {
      if (result) {
        props.history.replace('/blog/');
      }
    });
  }

  return (
    <Page>
      <h2>블로그 글쓰기 페이지</h2>
      <Input.TextArea ref={textRef} autosize={{minRows: 2, maxRows: 20}} />
      <div className="btn-area">
        <Button type="primary" onClick={handlePost}>
          글쓰기
        </Button>
      </div>
    </Page>
  );
}
