import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {


    let postsElements = props.posts.map(p =>
        < Post key={p.id} message={p.message} />)

    let newPostElements = React.createRef();

    let addPost = () => {

        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElements.current.value;
        props.updateNewPostText(text)
    }


    return (
        <div className={s.PostBlocks}>

            <h4>My Posts</h4>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElements} value={props.updateNewPostText} />
                </div>
                <button onClick={addPost}>Add Post</button>
            </div>

            <div className={s.posts}>
                {postsElements}

            </div>

        </div>

    )
}
export default MyPosts;