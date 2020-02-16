import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    state = {
        users: []
    }
    
    componentDidMount() {
        console.log("res>>>home::profile");

    fetch('/profile')
        .then(res => {
        // console.log("res>>>home::profile",res);
        return res.json()
        })
        .then(users => {
        console.log(users);
        this.setState({ users })
        });
    }
    
    render() {

        return (
            <div>
             {   
                this.state.users.map(({id, firstname, surname }) => <div key={id}>
                    <span>{firstname} -{surname}-
                    <Link to={`/profile/${id}`}>view profile</Link>
                    </span>
                </div>)
            }
            </div>
        )
    }
}
export default Home;