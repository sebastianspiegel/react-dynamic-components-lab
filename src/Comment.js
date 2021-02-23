
//your code here
// import React, { Component } from 'react'
import React from 'react'

export default class Comment extends React.Component {
// export default class Comment extends Component {
    render(){
        return(
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}

// export default Comment; 