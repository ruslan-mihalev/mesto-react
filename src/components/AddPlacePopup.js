import PopupWithForm from "./PopupWithForm";
import {useState} from "react";

function AddPlacePopup({isOpen, isLoading, onClose, onAddPlace}) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const submitButtonText = isLoading ? 'Создание...' : 'Создать';

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isLoading) {
      onAddPlace({
        name: name,
        link: link,
      });
    }
  }

  return (
    <PopupWithForm name='card' title='Новое место' submitButtonText={submitButtonText}
                   isSubmitButtonEnabled={!isLoading} isOpen={isOpen}
                   onClose={onClose} onSubmit={handleSubmit}>
      <input className="popup__input popup__input_target_name" id="input-card-name" name="input-card-name"
             required
             type="text" minLength={2} maxLength={30} placeholder="Название"
             value={name} onChange={handleNameChange}/>
      <span className="popup__input-error popup__input-error_target_name input-card-name-error"/>

      <input className="popup__input popup__input_target_info" id="input-card-image-link"
             name="input-card-image-link"
             required type="url" placeholder="Ссылка на картинку"
             value={link} onChange={handleLinkChange}/>
      <span className="popup__input-error popup__input-error_target_info input-card-image-link-error"/>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
