import React from 'react';
//noinspection JSUnresolvedVariable
import Posts    from './Posts'
import  Users  from '../user/Users'


export default function Feed() {

        return(
            <div className="container feed">
                <Posts />
                <Users />
            </div>
        );


}