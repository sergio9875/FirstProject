import React from 'react';
import s from './Post.module.css'

const Posts = (props) => {

    return (

        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/get-pdb/2343194/5cab70b8-6eb9-474c-96b5-adeca4b53e5b/s1200" alt=" " />
            {props.message}
        </div>

    )
}
export default Posts;