import React, {useRef, useState} from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, isLoading, onClose, onUpdateAvatar}) {

  const [avatar, setAvatar] = useState('');
  const inputAvatar = useRef();
  const submitButtonText = isLoading ? 'Сохранение...' : 'Сохранить';

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isLoading) {
      onUpdateAvatar(inputAvatar.current.value);
    }
  }

  return (
    <PopupWithForm name='avatar' title='Обновить аватар' submitButtonText={submitButtonText}
                   isSubmitButtonEnabled={!isLoading} isOpen={isOpen}
                   onClose={onClose} onSubmit={handleSubmit}>
      <input className="popup__input popup__input_target_avatar" id="input-profile-avatar-link"
             name="input-profile-avatar-link"
             required type="url" placeholder="Ссылка на картинку" ref={inputAvatar} value={avatar}
             onChange={handleAvatarChange}/>
      <span className="popup__input-error popup__input-error_target_avatar input-profile-avatar-link-error"/>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
