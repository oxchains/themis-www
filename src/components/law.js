/**
 * Created by oxchain on 2017/9/4.
 */
import React,{ Component } from 'react';
import Lawbanner from './lawbanner'
import Article from './article'

class Law extends Component{
    render(){
        return(
            <div>
                <Lawbanner/>
                <Article/>
            </div>
        )
    }
}
export default  Law;