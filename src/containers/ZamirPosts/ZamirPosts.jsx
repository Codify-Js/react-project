import React from 'react';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export default class ZamirPostsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        axios.get(`${API_URL}/posts`)
            .then((response) => {
                this.setState({
                    list:response.data
                });
            });
    }

    componentWillUnmount() {
        // alert('Posts Container was unmounted')
    }
    // handleClick ()

    render() {
        return (
            <div className="container">
                <div className="container-header">
                    Hello my name is Zamir
                </div>
                <div>
                     {this.state.list.map((post, index) => {
                        return (
                            <div key={post.id}>{post.id} | {post.title}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}