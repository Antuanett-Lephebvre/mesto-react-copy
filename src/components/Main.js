import React from 'react';
import Card from "./Card"
function Main(props) {
    const userInfo = props.userInfo;
    const userName = userInfo.name;
    const userDescription = userInfo.about;
    const userAvatar = userInfo.avatar;
    const cards = props.cards;
    const handleCardClick = props.onCardClick;
    const onEditImagePopup = props.onEditImagePopup;
    return (
        <main className="root">
 <section className="profile">
     <div className="profile__container">
     <button className="profile__photo" alt="Аватар" onClick={props.onEditAvatar} style = {{backgroundImage: `url(${userAvatar})`}}></button>
     <div className="profile__information">
     <div className="profile__info">
     <h1 className="profile__title">{userName}</h1>
     <p className="profile__subtitle">{userDescription}</p>
     </div>
     <button type="button" className="button button_type_edit opacity" aria-label="открывает форму редактирования" onClick={props.onEditProfile}></button>
     </div>
     </div>
     <div className="profile__right">
     <button type="button" className="button button_type_add opacity" aria-label="открывает форму добавления фото" onClick={props.onAddPlace}></button>
     </div>
</section>
<section className="photo-grid">
{cards.map (card => {
            return <Card key={card._id} {...card} 
            onCardClick = {handleCardClick}
            onEditImagePopup = {onEditImagePopup}
            />
        })}
</section>
    </main>
    )
}

export default Main;

 