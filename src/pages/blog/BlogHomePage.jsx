import React from 'react';
import {Icon, Button} from 'antd';
import styled from 'styled-components';

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
export default function BlogHomePage() {
  return (
    <Page>
      <h2>블로그 홈 페이지</h2>

      <div className="new-post-button">
        <Button type="primary" icon="plus" />
      </div>
    </Page>
  );
}
