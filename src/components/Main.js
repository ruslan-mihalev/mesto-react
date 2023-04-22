import {useState, useEffect} from 'react';
import api from '../utils/api'
import Card from './Card';
import PopupWithForm from "./PopupWithForm";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userDescription, setUserDescription] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([newUserInfo, initialCards]) => {
        setUserId(newUserInfo._id);
        setUserName(newUserInfo.name);
        setUserDescription(newUserInfo.about);
        setUserAvatar(newUserInfo.avatar);
        setCards(initialCards);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img className="profile__avatar" alt="Ваш аватар" style={{backgroundImage: `url(${userAvatar})`}}/>
            <button className="profile__avatar-edit-hint" type="button"
                    aria-label="Изменить аватар пользователя"
                    onClick={onEditAvatar}/>
          </div>
          <div className="profile__info">
            <div className="profile__person-name-container">
              <h1 className="profile__person-name">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Изменить профиль"
                      onClick={onEditProfile}/>
            </div>
            <p className="profile__person-about">{userDescription}</p>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить карточку"
                  onClick={onAddPlace}/>
        </section>

        <section className="card-grid" aria-label="Список мест для путешествий">
          <ul className="card-grid__container list">
            {cards.map((card) => (
              <li className="card-grid__item" key={card._id}>
                <Card card={card} userId={userId} onCardClick={onCardClick}/>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <PopupWithForm name='confirmation' title='Вы уверены?'/>
    </>
  );
}

export default Main;
