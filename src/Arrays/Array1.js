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



    render() {
        const { posts } = this.state;
        const { handleSomething} = this;
        
        return (
           <div>
               <Posts posts={posts} callback={handleSomething}/>
           </div> 
        );
    }
}

export default Array1;