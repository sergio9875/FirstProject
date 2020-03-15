import React from 'react';
import s from '../Products/Products.module.css'
//import { addTitleActionCreator, updateNewBookTitleActionCreator } from '../../redux/state'


const Products = (props) => {

    let productsElements = props.books.map((book, index) =>
        <p key={index}>{book.title}</p>
    )
    let newBooksTitle = React.createRef();

    let addTitleUA = () => {
        // props.dispatch(addTitleActionCreator())
        // let text = newBooksTitle.current.value;
        // props.addBook(text);
        // newBooksTitle.current.value = "";
    }

    let newBookTitle = () => {
        // let title = newBooksTitle.current.value;
        //  let action = updateNewBookTitleActionCreator(title);
        //  props.dispatch(action);

    }



    return (
        <div>
            <div className="newBookTitle">
                <textarea onChange={newBookTitle}
                    ref={newBooksTitle}>  </textarea>
            </div>
            <button onClick={addTitleUA}>Add Title</button>

            <div className={s.products}>
                {productsElements}

            </div>
        </div>
    )
}


export default Products;