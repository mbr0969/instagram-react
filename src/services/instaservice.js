export default class InstaService {

    constructor(){
      this._apiBase = 'http://localhost:3001/'
    }

    getResource = async (url) =>{
        const  res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok){
            throw  new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return res.json();
    }

    getAllPosts = async () =>{
      const res = await this.getResource('posts/');      
      return res;
    }

    getUser = async () =>{
      const res = await this.getResource('posts/'); 
      return res[0]
    }

    getAllPhotos = async () =>{
      const res = await this.getResource('posts/');
      return res.map(this._transformPost);
    }

    _transformPost= (post) =>{

      return{
        src: post.src,
        alt: post.alt,
        id: post.id,
      } 
    }
}