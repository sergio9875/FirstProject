import { retireDom } from "./render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 4, message: state.profilePage.newPostText,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    retireDom(state);
};
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    retireDom(state);
}

export let addBook = (bookTitle) => {
    let newBook = {
        id: 5, title: bookTitle, price: 2700
    };

    state.productsPage.books.push(newBook);
    retireDom(state);
}


window.state = state;

export default state