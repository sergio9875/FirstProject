import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;


    let dialogElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => < Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;