import { Component } from 'react';

import './styles.css';

import { loadPosts } from '../../utils/load-posts'
import { Posts } from '../../components/Post';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      allPosts:[],
      page: 0,
      postPerPage: 10,
      searchValue: ''
    }
  }

  async componentDidMount(){
    await this.loadPosts();
  } 

  loadPosts = async () => {
    const { postPerPage, page } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage), 
      allPosts: postsAndPhotos
    })
  }

  loadMorePost = () => {
    const {page, postPerPage, allPosts, posts} = this.state
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);

    posts.push(...nextPosts); 

    this.setState({posts, page: nextPage})
  }
  handleChange = (e) => {
    const {value} = e.target
    this.setState({searchValue: value})
  }
  
  render() {
    const { posts, page, postPerPage, allPosts, searchValue } = this.state;
    const noMorePost = (page + postPerPage) >= allPosts.length

    const filteredPosts = !!searchValue ? 
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      }) 
      : posts;

    return (
      <section className='container'>
        <div className="search-container">
          {!!searchValue && (
            <h1>Search Value: {searchValue}</h1>
          )}

          <TextInput searchValue = {searchValue} handleChange = {this.handleChange}/>
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts}/>
        )}

        {filteredPosts.length === 0 && (
          <p>Não existem posts</p>
        )}

        <div className='button-container'>
          {!searchValue && (
            <Button text="Load More" onClick={this.loadMorePost} disabled = {noMorePost}/>
          )}
        </div>
      </section>
    );
  }
}