import React from 'react';
import axios from 'axios';
const API_URL= 'https://jsonplaceholder.typicode.com'
export default class AisuluuUsers extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list : []
      };
    }

    componentDidMount (){
        axios.get(`${API_URL}/posts`)
            .then(response => {
                this.setState({
                    list: response.data
                })
            })
    }
    componentWillUnmount(){

    }
    handlePostClick(id){
        axios.get(`${API_URL}/posts/${id}`).then((response)=>{
            this.setState({
                post: response.data
            })
        })
    }
  
    render() {
        return (
            <div className="container">
               <div className="container-header">
                   hello my name is Aisuluu
               </div>
               <hr/>
               <div>
                   POST:{this.state.post ? this.state.post.title: "No clicked posts"}
               </div>
               <hr/>
               <div>
               { this.state.list.map(post =>
                 <div onClick={()=>this.handlePostClick(post.id)} key={post.id}>{post.id} | {post.title}</div>
               )}
               </div>
            </div>
            
        )
    }
}