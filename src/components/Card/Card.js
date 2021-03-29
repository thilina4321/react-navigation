import React, { useState } from "react";
import './Card.module.css'

const Card = () => {
   
    let title;
    let content;
    const onSubmitData = (e)=>{
         title = ( e.target.elements.title.value)
         content = ( e.target.elements.content.value)
        e.preventDefault()
        console.log(title, content);
        
    }
  return (
    <div >
        <form onSubmit={onSubmitData} className="card">
          <input className="input_model" value={title} name="title" placeholder="title" />
          <input className="input_model"value={content}  name="content" placeholder="content" />
          <button className="card_btn"> Save </button>
        </form>
    </div>
  );
};

export default Card;
