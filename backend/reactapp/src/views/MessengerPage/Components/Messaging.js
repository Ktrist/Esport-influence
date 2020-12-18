import React, { Component, Fragment } from 'react';
import Talk from "talkjs";
import { Link } from 'react-router-dom';

import image from "assets/img/messagespage.jpg";

class Messaging extends Component {

    constructor(props) {
        super(props);
        
        this.inbox = undefined;
        let currentUser;
        const currentTalkjsUser = localStorage.getItem('currentTalkjsUser');
        if (currentTalkjsUser) {
        currentUser = JSON.parse(currentTalkjsUser)
        }
        
        this.state = {
        currentUser
        }
        }
    
        componentDidMount() {
            Talk.ready
            .then(() => {
            const me = new Talk.User(this.state.currentUser);
            
            if (!window.talkSession) {
            window.talkSession = new Talk.Session({
            appId: 't4Pl8Jlk',
            me: me
            });
            }
            
            this.inbox = window.talkSession.createInbox();
            this.inbox.mount(this.container);
            
            })
            .catch(e => console.error(e));
            }

render() {
return (

    <div className="background-message"
    style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center"
      }}>

    <div>

    <nav className="navbar">

        <ul className="navbar-list">

            <li className="navbar-item">
            <Link to="/mynetwork" className="navbar-link">My Network</Link>
            </li>

            <li className="navbar-item">
            <Link to="/messaging" className="navbar-link">Messaging</Link>
            </li>

        </ul>

    </nav>

<Fragment>
<div style={{height: '500px'}} className="inbox-container" ref={c => this.container = c}>Loading...</div>
</Fragment>

</div>

</div>

);
}
}

export default Messaging