import React, { Component } from "react";
import Posts from "./Components/Posts";

class Array1 extends Component {

    state = { 
        posts: [
            {id: 1, name: 'JavaScript'},
            {id: 2, name: 'ReactJS'},
            {id: 3, name: 'VueJS'},
            {id: 4, name: 'ExpressJS'},
            {id: 5, name: 'NodeJS'},
            {id: 6, name: 'TensoeFlowJS'},
            {id: 8, name: 'AngularJS'},
        ]
     }


     handleSomething = () =>{
         console.log("App.js setState updated");
     }

     removePost = (id) => {
        this.setState({posts: this.state.posts.filter(post => post.id !== id)});
     }



    render() {
        const { posts } = this.state;
        const { handleSomething, removePost} = this;
        
        return (
           <div>
               <Posts posts={posts} callback={handleSomething} removePost={removePost} />
           </div> 
        );
    }
}

export default Array1;