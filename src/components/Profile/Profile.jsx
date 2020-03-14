import React from 'react';
//import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo'


const Profile = (props) => {

    return (
        <div >
            <ProfileInfo />
            < MyPosts posts={props.posts} addPost={props.addPost} />
        </div>
    )
}
export default Profile;