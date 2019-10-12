import React from 'react';
import './Contact.css';

function Contact (props) {
    return (
        <figure className="Contact">
<img className="avatar"
  src={props.avatar}
  alt={props.name} />
  
 
<figcaption>
<div className="name">
   {props.name}
   </div>
   <div>
  <div className="status">
        <span className={props.online ? "status-online":"status-offline"}></span>
        <span>{props.online ? "online":"offline"}</span>
    </div>
    </div>
</figcaption>
        </figure>
    );
}

export default Contact;