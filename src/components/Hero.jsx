import "../../public/css/hero.css";
import heroImage from "../../public/assets/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={heroImage} alt="" className="heroImage"/>
      <div className="text">
        <h2>Lorem ipsum dolor sit amet ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nobis
          quibusdam modi inventore doloribus quisquam corporis maxime et
          voluptatibus. Cupiditate, nisi mollitia obcaecati accusamus earum
          rerum consectetur dolore labore vero!
        </p>
      </div>
    </div>
  );
}
