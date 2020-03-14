import React from 'react';
import s from './Profile.module.css'


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/712/432/46/landscapes-winter-planets-mass-effect-3-3d-1920x1080-space-planets-hd-art-wallpaper-preview.jpg" alt=" " />
            </div>

            <div className={s.descriptionBlock}>Avatar+Discription</div>

        </div>
    )
}
export default ProfileInfo;