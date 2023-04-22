function Card({card, userId, onCardClick}) {
  const {name, link, likes, owner: {_id: ownerId}} = card;
  const allLikesCount = likes.count;
  const isLikedByUser = likes.filter(like => like._id === userId).length > 0;
  const canDelete = ownerId === userId;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <>
      <div className="card-grid__item-image-container">
        <img className="card-grid__item-image"
             src={link}
             alt={name}
             onClick={handleClick}/>
      </div>
      <div className="card-grid__item-caption-container">
        <h2 className="card-grid__item-caption">{name}</h2>
        <div className="card-grid__item-like-button-container">
          <button className={`card-grid__item-like-button ${isLikedByUser ? 'card-grid__item-like-button_active' : ''}`}
                  type="button" aria-label="Лайк"/>
          {
            allLikesCount > 0
              ? <span className="card-grid__item-like-count">{allLikesCount}</span>
              : null
          }
        </div>
      </div>
      {
        canDelete
          ? <button className="card-grid__item-delete-button card-grid__item-delete-button_active"
                    type="button"
                    aria-label="Удалить карточку"/>
          : null
      }
    </>
  );
}

export default Card;
