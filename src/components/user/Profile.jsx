import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile =()=>{

    return (
        <div className='container profile'>
            <User src='https://s3.amazonaws.com/cdn.roosterteeth.com/uploads/images/67778e9f-3eb6-4a8c-8962-a45c0af34212/md/MountainDewM50556a3e97a15.jpg'
                  alt='Mikle'  
                  name='mikle_json'  
            />
            <Palette />

        </div>
    );
}



export default Profile;