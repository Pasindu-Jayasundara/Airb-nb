import PropTypes from 'prop-types';
import '../../public/css/card.css';
// import image from '../../public/assets/vite.svg'

export default function Card({cartData}){
    return(
        <div className="card">
            <img src={cartData.image} className="cardImage"/>
            <div className="card-text">
                <h3>{cartData.title}</h3>
                <p className='card-description'>{cartData.description}</p>
                <a href="../SingleItem.jsx" className='card-button'>Click me</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    cartData: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};