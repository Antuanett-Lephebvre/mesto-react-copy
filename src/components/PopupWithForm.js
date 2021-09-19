function PopupWithForm (props) {
    return (
        <article className={`popup popup_add_${props.name}${props.isOpen ? 'overlay' : ''}`}>
            <div className="popup__container">
            <button type="button" className={`button button_type_closed button_closed_${props.name} opacity" aria-label="закрывает форму`} onClick={props.closeAllPopups}></button>
            <form className={`popup__form popup__form_${props.name}`} name={props.name} novalidate>
            <h2 className="popup__title">{props.title}</h2>
                {props.children}
            </form>
            </div>
        </article>
    )
}

export default PopupWithForm