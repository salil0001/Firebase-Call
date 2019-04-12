import React, { Component } from 'react'
import { database } from '../../firebase';
import axios from 'axios';
//import Store, { MyContext } from '../../ContextApi/Store';

import { auth } from '../../firebase';
import _ from 'lodash';
export default class CreateProject extends Component {
    state = {
        title: "",
        content: "",
        notes: {},
        users: []
    }


    Handlesubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

        const mydetail = {
            title: this.state.title,
            content: this.state.content
        }
        database.push(mydetail)

    }
    ////////////// Onchange
    HandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    ////DeleteData ///////
    DeleteNode(id) {
        //  console.log(id);
        database.child(id).remove();
    }



    /////read data ///////
    RenderData() {
        // console.log("Render working")
        return _.map(this.state.notes, (note, key) => {
            return (
                <div key={key}>
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                    <button onClick={() => this.DeleteNode(key)}>X</button>
                </div>
            )
        })
    }
    /////lifecycle/////
    componentDidMount() {

        database.on('value', snapshot => {
            this.setState({
                notes: snapshot.val()
            })
        })
        //  console.log(this.state.userss )
    }
    ///////////////////////////
    componentWillMount() {


        
        auth.onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                console.log(displayName);
                var email = user.email;
                console.log(email);
                var emailVerified = user.emailVerified;
                console.log(emailVerified);
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
               
                this.setState({
                    displayName:this.displayName
                })
               

            } else {
                window.location = "/signin";
            }
        })

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(res => {
        //     this.setState({
        //         users: res.data.slice(0,10)
        //     })
        // })
        
       

    }





    render() {
       return (
            <div className="col-md-6 offset-4 col-sm-12 col-lg-5 formdimensions">
                <form onSubmit={this.Handlesubmit}>

                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" required className="form-control" id="title" placeholder="Place Title" onChange={this.HandleChange} />
                    </div>
                    <div className="form-group">
                        <label>Project Content</label>
                        <input type="text" required className="form-control" id="content" placeholder="Place Content" onChange={this.HandleChange} />
                    </div>

                    <button>Submit</button>
                </form>
                {this.RenderData()}
            </div>
        )
    }
}
