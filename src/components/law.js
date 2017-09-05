/**
 * Created by oxchain on 2017/9/4.
 */
import React,{ Component } from 'react';
import Lawbanner from './lawbanner'
import Article from './article'

class Law extends Component{
    componentDidMount() {
        this.node.scrollIntoView();
    }
    render(){
        return(
            <div ref={node => this.node = node}>
                <Lawbanner/>
                <Article/>
            </div>
        )
    }
}
export default  Law;