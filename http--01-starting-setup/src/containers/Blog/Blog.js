import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log('GET /posts:', response);
        this.setState({posts: response.data})
      })
      .catch(err => console.error('ERROR: ', err))
  }

  renderPosts() {
    const posts = this.state.posts.map(post =>
      <Post key={post.id} title={post.title} />
    );

    return posts;
  }

  render() {
    return (
      <div>
        <section className="Posts">
          {this.renderPosts()}
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
