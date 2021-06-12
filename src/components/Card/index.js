// Write your code here.
import './index.css'

const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData

  return (
    <div className={`${className} card-container`}>
      <h1 className="card-container-title">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img
          className="card-container-image"
          src={imgUrl}
          alt={`${title}-img`}
        />
      </div>
    </div>
  )
}

export default Card
