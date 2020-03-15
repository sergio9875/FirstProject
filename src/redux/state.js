const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
    _state: {
        profilePage: {
            posts:
                [
                    { id: 1, message: 'How are You?' },
                    { id: 2, message: 'My First Post' },
                    { id: 3, message: 'My Post' },

                ],
            newPostText: 'My Value Text',
            dialogsData: [

                { id: 1, name: 'Svetik' },
                { id: 2, name: 'Serg' },
                { id: 3, name: 'Nik' },
                { id: 4, name: 'Murz' }
            ]

        },
        messagesPage: {
            messages:
                [
                    { id: 1, message: 'Hello!' },
                    { id: 2, message: 'How are you?' },
                    { id: 3, message: 'My first sms' },
                    { id: 4, message: 'You my friend!' }
                ],

        },
        productsPage: {

            books:
                [
                    { id: 1, title: 'JavaScript', price: 1000 },
                    { id: 2, title: 'React', price: 2000 },
                    { id: 3, title: 'Node.Js', price: 1500 },
                    { id: 4, title: 'Angular', price: 1700 },

                ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4, message: this._state.profilePage.newPostText,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {


            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);


        }


    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPosTextActionCreator = (text) => ({

    type: UPDATE_NEW_POST_TEXT, newText: text

})

window.store = store;

export default store;