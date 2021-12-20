import React from 'react'
import GulzhanGallery from './GulzhanGallery'
import './GulzhanPageContainer.css'

export class GulzhanPageContainer extends React.Component {
    constructor(){
        super()

        this.state = {
            
        }
    }
    
    render(){
    return (
        <div className='gulzhan-page-container'>
            <div className='gulzhan-page-header'>
            <span>Gallery</span>
            </div>
            <div>
            {GulzhanGallery}
            </div>
        </div>
    )
}
}


