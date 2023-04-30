import PopupWithForm from "./PopupWithForm";
import {useState, useEffect, useContext} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, isLoading, onClose, onUpdateUser}) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);
  const submitButtonText = isLoading ? 'Сохранение...' : 'Сохранить';

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isLoading) {
      onUpdateUser({name, about: description});
    }
  }

  return (
    <PopupWithForm name='profile' title='Редактировать профиль' submitButtonText={submitButtonText}
                   isSubmitButtonEnabled={!isLoading} isOpen={isOpen}
                   onClose={onClose} onSubmit={handleSubmit}>
      <input className="popup__input popup__input_target_name" id="input-name" name="input-name" required
             type="text"
             minLength={2} maxLength={40} placeholder="Имя" value={name} onChange={handleNameChange}/>
      <span className="popup__input-error popup__input-error_target_name input-name-error"/>

      <input className="popup__input popup__input_target_info" id="input-aboutme" name="input-aboutme" required
             type="text" minLength={2} maxLength={200} placeholder="О себе" value={description}
             onChange={handleDescriptionChange}/>
      <span className="popup__input-error popup__input-error_target_info input-aboutme-error"/>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
