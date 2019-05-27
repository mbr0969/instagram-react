import React, {Component} from 'react';
import User from './User';
import InstaService from './../../services/instaservice';
import ErrorMessage from './../error/ErrorMessage';

export default class Users extends Component{
 
  InstaService = new InstaService();
  state = {
    users: [],
    user : [],   
    error: false
  }
  

  componentDidMount(){
    this.updateUsers();    
  }

  updateUsers(){
    this.InstaService.getAllPosts()
    .then(this.onUsersLoaded)
    .catch(this.onError);
    this.InstaService.getUser()
    .then(this.onUserLoaded)
    .catch(this.onError);;
  }

  onUserLoaded =(user) =>{
    this.setState({
      user      
    });
  }

  onUsersLoaded= (users) =>{
    this.setState({
      users,
      error:false
    });
  }

  onError = (err) =>{
    this.setState({
      error: true
    });
  }

   rendortUser(arr) {
        const {name, altname, photo, id} = arr;
        return (            
              <User name={name} alt={altname} src={photo}/>          
        );         
       

  }

  rendorUsers(arr){   
    
    return arr.map((item) => {
      const {name, altname, photo, id} = item;
      return (            
            <User key= {id} name={name} alt={altname} src={photo} min />          
      );
    });
  }

  render(){
    const {error, users, user} = this.state;
    if(error){
      return <ErrorMessage />
    }

    const items = this.rendorUsers(users);
    const item = this.rendortUser(user);
    
      return(
        <div className="right">
          {item}
        <div className="users__block">
          {items}           
          </div>
        </div>
      );
    }
  }





// export default function Users() {
   

//     return (
//       <div className="right"> 
//             <User
//                 name="Harry" alt="Prince"
//                 src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
//             />

//             <div className="users__block">
//                 <User
//                     name="Harry" alt="Prince"
//                     src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
//                     min
//                 />
//                 <User
//                     name="Harry" alt="Prince"
//                     src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
//                     min
//                 />
//                 <User
//                     name="Harry" alt="Prince"
//                     src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
//                     min
//                 />
//                 <User
//                     name="Harry" alt="Prince"
//                     src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
//                     min
//                 />
//             </div>
//       </div>      
//     );
// }
