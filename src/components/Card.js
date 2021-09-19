import React from 'react';

function Card({name, link, likes, _id, onCardClick, onEditImagePopup}) {
   function handleClick() {
      console.log("что-то происходит")
      onCardClick({
        id: _id,
        img: link,
        name: name,
      })
   }
   return (
    <article className="card" onClick={handleClick}>
    <img className="card__photo opacity_button" src={link} onClick = {onEditImagePopup} alt="фото пейзаж"></img>
    <button type="button" className="button button_type_delete opacity" aria-label="удаляет карточку"></button>
    <div className="card__container">
    <h2 className="card__title">{name}</h2>
    <div className="like-container">
    <button type="button" className="like-container__like opacity opacity_like"></button>
    <h3 className="like-container__number">{likes.length}</h3>
    </div>
    </div>
    </article>
   )
}

export default Card;