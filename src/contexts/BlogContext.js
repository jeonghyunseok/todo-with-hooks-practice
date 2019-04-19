import React from 'react';
let BlogContext;
const {Provider} = (BlogContext = React.createContext());

class BlogProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], //글목록
      onAddPost: (text, callback) => {
        /**
         * 1. API를 이요해서 원격지에 저장하고 , 그 응답 받아서 this.setState({post})
         * 2. 로컬스토리에 저장하는 방법
         * 3. 메모리쓰기
         */
        this.setState(state => {
          return {
            posts: [
              ...state.posts,
              {
                id: new Date().getTime(),
                dateAt: new Date(),
                text,
              },
            ],
          };
        });

        callback && callback('success');
      },
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export {BlogProvider, BlogContext};
