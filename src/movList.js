import React, {Component} from 'react';
import FavUser from './favUser.js';


class MovList extends Component{
    render(){
      let movies = this.props.movies;
      let users = this.props.users;
      let profiles = this.props.profiles;
      console.log(movies.length);
      let lines =[];
      for(let i=1; i<6; i++){
        lines.push(
          <div>
          <h2 key={movies[i].id}>
                 {movies[i].name}
             </h2>
              <FavUser users={users} movie={movies[i]} profiles={profiles}/>
            </div>)
      }
        return( 
          <div> {lines}  </div>
        )
    }
}

export default MovList;