import '../../public/css/card.css';
import image from '../../public/assets/vite.svg'

export default function Card(){
    return(
        <div className="card">
            <img src={image} className="cardImage"/>
            <div className="card-text">
                <h3>Card Title</h3>
                <p className='card-description'>Card Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda ipsum nam temporibus animi corporis facilis fuga, ipsam a praesentium, aperiam accusantium nisi consequuntur placeat sequi sint quos explicabo vitae?</p>
                <div className='card-button'>Click me</div>
            </div>
        </div>
    )
}