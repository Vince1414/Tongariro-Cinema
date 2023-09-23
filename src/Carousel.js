import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

function MyCarousel() {
 return (
  <div className="carousel-container">
   <Carousel
    showThumbs={false} // You can customize carousel options here
    showStatus={false}
    infiniteLoop={true}
    className="custom-carousel"
   >
    <div className="carousel-card">
     <img src="/images/barbie-carousel.webp" alt="Barbie" />
     <div className="description">
      <h3>Barbie</h3>
      <h4>To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full-on existential crisis. Or you’re a Ken. Eccentric and individualistic, Barbie is exiled from Barbieland because of her imperfections. When her home world is in peril, Barbie returns...</h4>
      <a href="/">Find out more</a>
     </div>
    </div>

    <div className="carousel-card">
     <img src="/images/turtle-carousel.avif" alt="Ninja Turtle" />
     <div className="description">
      <h3>Teenage Mutant Ninja Turtles: Mutant Mayhem</h3>
      <h4>After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts.</h4>
      <a href="/">Find out more</a>
     </div>
    </div>

    <div className="carousel-card">
     <img src="/images/meg-carousel.avif" alt="Chopped Salad" />
     <div className="description">
      <h3>Meg 2: The Trench</h3>
      <h4>Jason Statham and global action icon Wu Jing lead a daring research team on an exploratory dive into the deepest depths of the ocean.</h4>
      <a href="/">Find out more</a>
     </div>
    </div>

   </Carousel>
  </div>
 );
}

export default MyCarousel;