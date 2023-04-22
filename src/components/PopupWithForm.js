function PopupWithForm({title, name, isOpen, onClose, children}) {

  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_active' : ''}`} role="dialog" aria-modal="true">
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть окно" onClick={onClose}/>

        <form className="popup__form" name={`${name}_popup__form`} noValidate>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button className="popup__submit-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

