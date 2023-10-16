import './index.css'

const ContactItem = props => {
  const {contactDetails, onFavourite} = props
  const {name, mobileNo, isFavorite, id} = contactDetails

  const onClickFavButton = () => {
    onFavourite(id)
  }

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button
          onClick={onClickFavButton}
          type="button"
          className="favorite-icon-container"
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
    </li>
  )
}

export default ContactItem
