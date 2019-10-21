import React from 'react';
import Contact from './Contact';


const contacts = [
    {
        id:1,
        name:"Virgil Henry",
        avatar: "https://randomuser.me/api/portraits/men/48.jpg",
        online:
        false 
    },
    {
        id:2,
        name:"Aaron Perkins",
        avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
        id:3,
        name: "Ethel Castillo",
        avatar: "https://randomuser.me/api/portraits/men/90.jpg",
        online:
        true
    },
    {
        id:4,
        name:"Cecil Wade",
        avatar:"https://randomuser.me/api/portraits/men/96.jpg",
        online:
        false
    },
    {
        id:5,
        name:"Dylan Belouis",
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyS5sXsW7Dv3CaDqEmINCzCb3GZztBIDAGexFXFSp6NxKBdAYY",
        online:
        true,
    }
]

const ContactList = () => (
    <div>
        {contacts.map(item => (
            <Contact name={item.name} avatar={item.avatar} online={item.online} />
            ))}
    </div>
);


export default ContactList;