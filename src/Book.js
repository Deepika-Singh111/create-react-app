import React from 'react'

const Book = ({img,title,author}) => {
 // const { img,title,author } = props.book

    const clickHandler = () => {
    alert('Hello world!');
    };
    const complexExample = (author) => {
    console.log(author);
    }
   return (
    <article className='book'>
      <img src={img}  alt='' />
      <h1 onClick={()=>console.log(title)}>{title}</h1>
      <h4>{author}</h4>   
      <button type='button' onClick={clickHandler}>
         Category
      </button>
      <button type='button' onClick={complexExample(author)}>more</button>
    </article>
  );
};

export default Book
