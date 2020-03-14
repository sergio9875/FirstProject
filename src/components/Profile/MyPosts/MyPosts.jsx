import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {
    let postsElements = props.posts.map(p =>
        < Post message={p.message} />)

    let newPostElements = React.createRef();

    let addPost = () => {

        let text = newPostElements.current.value;
        props.addPost(text);
        newPostElements.current.value = "";
    }




    return (
        <div className={s.PostBlocks}>

            <h4>My Posts</h4>
            <div>
                <div> <textarea ref={newPostElements}></textarea> </div>
                <button onClick={addPost}>Add Post</button>
            </div>

            <div className={s.posts}>
                {postsElements}

            </div>

        </div>

    )
}
export default MyPosts;