import React from 'react';
import s from '../Products/Products.module.css'

const Products = (props) => {


    let newBooksTitle = React.createRef();

    let addTitleUA = () => {
        let text = newBooksTitle.current.value;
        props.addBook(text);
        newBooksTitle.current.value = "";
    }


    let productsElements = props.books.map((book, index) =>
        <p key={index}>{book.title}</p>
    )



    return (
        <div>
            <div className="newBooksTitle">
                <textarea ref={newBooksTitle} >  </textarea>
            </div>
            <button onClick={addTitleUA}>Add Title</button>

            <div className={s.products}>
                {productsElements}

            </div>
        </div>
    )
}


export default Products;