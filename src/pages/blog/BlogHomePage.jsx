import React, {useContext} from 'react';
import {Icon, Button} from 'antd';
import styled from 'styled-components';
import {AuthContext} from '../../contexts/AuthContext';
import {BlogContext} from '../../contexts/BlogContext';
import {markdown} from 'markdown';
const Page = styled.div`
  .new-post-button {
    width: 50px;
    height: 50px;
    border: 1px solid pink;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    position: fixed;
    right: 10px;
    bottom: 10px;

    .ant-btn-primary {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;

export default function BlogHomePage(props) {
  const {isAuthenticated} = useContext(AuthContext);
  const {posts} = useContext(BlogContext);

  function handleClick() {
    props.history.push('/blog/new-post');
  }

  return (
    <Page>
      <h2>블로그 홈 페이지</h2>
      <div>
        {posts.map(post => {
          return (
            <div
              key={post.id}
              dangerouslySetInnerHTML={{__html: markdown.toHTML(post.text)}}
            />
          );
        })}
      </div>
      <div className="new-post-button">
        <Button type="primary" icon="plus" onClick={handleClick} />
      </div>
    </Page>
  );
}
