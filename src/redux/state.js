const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let store = {
    _state: {
        profilePage: {
            posts:
                [
                    { id: 1, message: 'How are You?' },
                    { id: 2, message: 'My First Post' },
                    { id: 3, message: 'My Post' },

                ],
            newPostText: ' ',


        },
        dialogsPage: {
            dialogs: [

                { id: 1, name: 'Svetik' },
                { id: 2, name: 'Serg' },
                { id: 3, name: 'Nik' },
                { id: 4, name: 'Murz' }
            ],
            messages:
                [
                    { id: 1, message: 'Hello!' },
                    { id: 2, message: 'How are you?' },
                    { id: 3, message: 'My first sms' },
                    { id: 4, message: 'You my friend!' }
                ],
            newMessageBody: ' ',

        },
        productsPage: {

            books:
                [
                    { id: 1, title: 'JavaScript', price: 1000 },
                    { id: 2, title: 'React', price: 2000 },
                    { id: 3, title: 'Node.Js', price: 1500 },
                    { id: 4, title: 'Angular', price: 1700 },

                ],
            newBooksTitle: ' ',
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },


    addBook(bookTitle) {
        let newBook = {
            id: 5, title: bookTitle, price: 2700
        };

        this._state.productsPage.books.push(newBook);
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4, message: this._state.profilePage.newPostText,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        }

        else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
        else if(action.type === SEND_MESSAGE) {
           let body =  this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = " ";
            this._state.dialogsPage.messages.push({ id: 5, message: body})

            this._callSubscriber(this._state);
        }


    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPosTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body : body
    }
}

window.store = store;

export default store;

// store - OOP