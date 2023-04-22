function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_type_image ${card ? 'popup_active' : ''}`} role="dialog" aria-modal="true">
      <figure className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть окно" onClick={onClose}/>
        <img className="popup__image" style={{backgroundImage: `url(${card?.link})`}} alt="Карачаевск"/>
        <figcaption className="popup__image-caption">Карачаевск</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
