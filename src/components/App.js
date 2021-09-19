import React, { Profiler } from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {useEffect, useState} from 'react';
import api from '../utils/api';

function App() {
    const [isEditAvatarPopupOpen, setIsOpenAvatar] = React.useState(false);
    const [isAddPlacePopupOpen, setIsOpenPlace] = React.useState(false);
    const [isEditProfilePopupOpen, setIsOpenProfile] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState({});
    const [search, setSearch] = React.useState('');
    const [selectedCard, setSelectedCard] = React.useState({});
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    //const [cardInfo, setCardInfo] = React.useState({});
    const [cards, setCards] = React.useState([]);
    /*function userInfo() {
        return api.getUserInfo ({
         userName: "name",
         userDescription: "about",
         userAvatar: "avatar"
        })
     }*/
            function handleCardClick(card) {
                setSelectedCard(card);
            }

            function handleEditImagePopup() {
                setIsImagePopupOpen(true)
            }
            
                function handleEditAvatarClick() {
                    setIsOpenAvatar(true)
                }

                function handleEditProfileClick() {
                    setIsOpenProfile(true)
                }
            
                function handleAddPlaceClick() {
                    setIsOpenPlace(true)
                }

                function handleClosePopups() {
                    setIsOpenAvatar(false);
                    setIsOpenProfile(false);
                    setIsOpenPlace(false);
                    setIsImagePopupOpen(false)
                }

                
                
                useEffect(() => {
                api.getUserInfo().then(data => {
                    setUserInfo({
                        name : data.name,
                        about: data.about,
                        avatar : data.avatar
                    })
                })
            }, [])

            useEffect(() => {
                api.getInitialCards(search).then(res => {
                    //const arr = res.map((item) => {
                        //return {
                            //name: item.name,
                            //likes: item.likes,
                            //link: item.link,
                            //id: item._id
                        //}
                    //})
                    setCards(res);
                })
            },[])

    return (
        <body className="page">
            <Header />
            <Main 
             onEditAvatar = {handleEditAvatarClick}
             onEditProfile = {handleEditProfileClick}
             onAddPlace = {handleAddPlaceClick}
             onEditImagePopup = {handleEditImagePopup}
             userInfo = {userInfo}
             cards = {cards}
             onCardClick = {handleCardClick}

             />
            <Footer />
            <PopupWithForm
            closeAllPopups = {handleClosePopups}
            isOpen = {isEditProfilePopupOpen}
            name = "profile"
            title = "Редактировать профиль"
            children = {
        <fieldset className="popup__input-container">
            <input className="popup__area popup__area_type_name" 
            id="author" type="text" name="name" required minlength="2" maxlength="40"></input>
            <span id="author-error" className="popup__error"></span>
            <input className="popup__area popup__area_type_about"
            type="text" name="about" id="about" required minlength="2" maxlength="200"></input>
            <span id="about-error" className="popup__error"></span>
            <button type="submit" className="button button_type_saved button_type_submit opacity opacity_button" aria-label="сохраняет изменения">Сохранить</button>
        </fieldset>
            }
            />
            <PopupWithForm 
            closeAllPopups = {handleClosePopups}
            isOpen = {isAddPlacePopupOpen}
            name = "card"
            title = "Новое место"
            children = {
            <fieldset className="popup__input-container">
                <input className="popup__area popup__area_type_name-card"
                type="text" name="name" id="name" placeholder="Название" minlength="2" maxlength="30" required></input>
                <span id="name-error" className="popup__error"></span>
                <input className="popup__area popup__area_type_link"
                type="url" name="link" id="link" placeholder="Ссылка на картинку" required></input>
                <span id="link-error" className="popup__error"></span>
                <button type="submit" className="button button_type_saved opacity opacity_button" aria-label="добавлят карточку">Создать</button>
            </fieldset>
            }
            />
            <PopupWithForm 
            closeAllPopups = {handleClosePopups}
            isOpen = {isEditAvatarPopupOpen}
            name = "avatar"
            title = "Обновить аватар"
            children = {
            <fieldset className="popup__input-container">
                <input className="popup__area popup__area_type_avatar"
                 type="url" name="link" id="link_avatar" required></input>
                 <span id="link_avatar-error" className="popup__error"></span>
                 <button type="submit" className="button button_type_saved opacity opacity_button" aria-label="добавлят карточку">Создать карточку</button>
            </fieldset>
            }
            />
            <PopupWithForm
            name = "confirm"
            title = "Вы уверены?"
            children = {
            <fieldset className="popup__input-container">
                <button type="submit" className="button button_type_saved button_type_confirm opacity opacity_button" aria-label="добавлят карточку">Да</button>
            </fieldset>
            }
            />
            <ImagePopup
            isOpen = {isImagePopupOpen}
            selectedCard = {selectedCard}
            onClose = {handleClosePopups}
            />
    
    <script type="module" src="./components/Api.js"></script>
        </body>  
    );
}
export default App
