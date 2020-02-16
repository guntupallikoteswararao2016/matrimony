import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
    state = {
        profile: []
      }
    
      componentDidMount() {
        const { id } = this.props.match.params;
        // debugger;
        fetch(`/profile/${id}`)
          .then(res => {
            console.log(res);
            return res.json()
          })
          .then(profile => {
            console.log(profile);
            this.setState({ profile })
          });
      }
  

    render() {
        debugger;
        return (
            <div>

                <h1>Profile Preview</h1>
                {
                    <div>
                        <p>Name:{this.state.profile.name}</p>
                        <p>id: {this.state.profile.id} </p>
                        <p>location: {this.state.profile.location} </p>
                        <p>job: {this.state.profile.job} </p>
                   </div>
                }
                <Link to="/"> ((((((Back!! ))))</Link>
            </div>
        )
    }
}
export default Profile