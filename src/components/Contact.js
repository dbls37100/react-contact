import React,{Component} from 'react';
import './Contact.css';


class Contact extends Component{
    constructor(props){
        super(props)
        this.state={
            online : false
        }
    }
render(){
    return (
        <figure className="Contact">
<img className="avatar"
  src={this.props.avatar}
  alt={this.props.name} />
  
 
<figcaption>
<div className="name">
   {this.props.name}
</div>  
<div className="status"
    onClick= { event => {
    this.state.online 
    ? this.setState({online : false })
    : this.setState({online : true });
    }
    }
>
<span className=
    {this.state.online ? 
    "status-online":"status-offline"
    }>
</span>
<span>
    {this.state.online ? "online":"offline"}
</span>
    
</div>
 

    
</figcaption>
        </figure>
    );
}
}

export default Contact;