import React, {Component} from 'react';
import UserList from './userList.js';


class FavUser extends Component{
    render(){
      let movie = this.props.movie;
      let profiles = this.props.profiles;
      let users = this.props.users;
      let favUsers = profiles.filter(profile => parseInt(profile.favoriteMovieID) === movie.id);
      if (favUsers.length > 0){
        let favUsersNames = favUsers.map(user => users[user.userID] );
      return(
      <UserList users={favUsersNames} />
      )
      } else {
      return(
        <p>None of the current users liked this movie</p>
        )
      }
    }
}

export default FavUser;