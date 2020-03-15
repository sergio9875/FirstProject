import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post'
import { addPostActionCreator, updateNewPosTextActionCreator } from '../../../redux/state';


const MyPosts = (props) => {

    let postsElement = props.posts.map((p, index) =>
        < Post key={index} message={p.message} />)

    let newPostElement = React.createRef();

    let addPost = () => {


        //props.addPost();
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        let action = updateNewPosTextActionCreator(text)
        props.dispatch(action)
    }


    return (
        <div className={s.PostBlocks}>

            <h4>My Posts</h4>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <button onClick={addPost}>Add Post</button>
            </div>

            <div className={s.posts1}>
                {postsElement}

            </div>

        </div>

    )
}
export default MyPosts;