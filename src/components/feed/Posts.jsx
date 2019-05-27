import React, {Component} from 'react';
import InstaService from './../../services/instaservice';
import User from './../user/User';
import ErrorMessage from './../error/ErrorMessage';

export default class Posts extends Component {

  InstaService = new InstaService();
  state = {
    posts: [],
    error: false
  }

  componentDidMount(){
    this.updatePosts();
  }

  updatePosts(){
    this.InstaService.getAllPosts()
    .then(this.onPostsLoaded)
    .catch(this.onError);
  }

  onPostsLoaded = (posts) =>{
    this.setState({
      posts,
      error:false
    });
  }

  onError = (err) =>{
    this.setState({
      error: true
    });
  }

  rendorItems(arr){
    return arr.map((item) => {
      const {name, altname, photo, src, alt, descr, id} = item;

      return (
        <div key={id} className="post">
            <User name={name} alt={altname} src={photo} min/>
            <img src={src} alt={alt}/>
            <div className="post__name">
              {name}
            </div>
          <div className="post__descr">
            {descr}
          </div>
        </div>
      );
    });
  }

  render(){
    const {error, posts} = this.state;
    if(error){
      return <ErrorMessage />
    }

    const items = this.rendorItems(posts);
      return(
        <div className="left">
          {items}           
        </div>
      );
    }
  

}