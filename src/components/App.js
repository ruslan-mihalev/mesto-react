import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {useState} from 'react';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <Header/>
      <Main onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}/>
      <Footer/>
      <PopupWithForm name='profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen}
                     onClose={closeAllPopups}>
        <input className="popup__input popup__input_target_name" id="input-name" name="input-name" required
               type="text"
               minLength={2} maxLength={40} placeholder="Имя"/>
        <span className="popup__input-error popup__input-error_target_name input-name-error"/>

        <input className="popup__input popup__input_target_info" id="input-aboutme" name="input-aboutme" required
               type="text" minLength={2} maxLength={200} placeholder="О себе"/>
        <span className="popup__input-error popup__input-error_target_info input-aboutme-error"/>
      </PopupWithForm>

      <PopupWithForm name='card' title='Новое место' isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopups}>
        <input className="popup__input popup__input_target_name" id="input-card-name" name="input-card-name"
               required
               type="text" minLength={2} maxLength={30} placeholder="Название"/>
        <span className="popup__input-error popup__input-error_target_name input-card-name-error"/>

        <input className="popup__input popup__input_target_info" id="input-card-image-link"
               name="input-card-image-link"
               required type="url" placeholder="Ссылка на картинку"/>
        <span className="popup__input-error popup__input-error_target_info input-card-image-link-error"/>
      </PopupWithForm>

      <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen}
                     onClose={closeAllPopups}>
        <input className="popup__input popup__input_target_avatar" id="input-profile-avatar-link"
               name="input-profile-avatar-link"
               required type="url" placeholder="Ссылка на картинку"/>
        <span className="popup__input-error popup__input-error_target_avatar input-profile-avatar-link-error"/>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
