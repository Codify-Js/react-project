import React from 'react'
export default class InfoComponent extends React.Component{
    constructor(props){
        console.log('props', props);
        console.log('this' , this)
    }
    render(){
        return(
            <>
              <h1>Hello</h1>
              <input type='text' placeholder="Search" />
            </>
            )
    }
   
}
export default InfoComponent