function PopupWithForm({title, name, submitButtonText, isSubmitButtonEnabled, isOpen, onClose, children, onSubmit}) {

  function handleMouseDown(e) {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  }

  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_active' : ''}`} role="dialog" aria-modal="true"
         onMouseDown={handleMouseDown}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть окно" onClick={onClose}/>

        <form className="popup__form" name={`${name}_popup__form`} noValidate onSubmit={onSubmit}>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button className="popup__submit-button" type="submit"
                  disabled={!isSubmitButtonEnabled}>{submitButtonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
