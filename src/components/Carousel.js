// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import YouTubeEmbed from '@site/src/components/YouTubeEmbed';

// const MyCarousel = () => {
//     return (
//       <div className="carousel-container">
//       <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="custom-carousel" >
//           {/* First slide with YouTube Video */}
//           <div className="carousel-slide">
//             <YouTubeEmbed videoId="W0wFaAqFdok" />
//             {/* <p className="legend">YouTube Video</p> */}
//           </div>
  
//           {/* Second slide with an image */}
//           <div className="carousel-slide">
//             <img src="/img/blog/logo.jpg" alt="Logo" />
//             <p className="legend"><i>Our Logo and Mascot, T-Mini! (cr. minipete)</i></p>
//           </div>
  
//           {/* Third slide with an image */}
//           <div className="carousel-slide">
//             <img src="/img/blog/gallery.jpg" alt="Gallery" />
//             <p className="legend"><i>How it all works (its magic, I really don't know how we got it to work)</i></p>
//           </div>
  
//           {/* Fourth slide with an image */}
//           <div className="carousel-slide">
//             <img src="/img/blog/gallery-freewili.jpg" alt="Gallery-FREE-WILi" />
//             <p className="legend"><i>the child witnessing its birth</i></p>
//           </div>

//           {/* Fifth slide with an image */}
//           <div className="carousel-slide">
//             <img src="/img/blog/gallery-1.jpg" alt="Gallery-FREE-WILi-1" />
//             <p className="legend"><i>my wrist</i></p>
//           </div>

//           {/* Sixth slide with an image */}
//           <div className="carousel-slide">
//             <img src="/img/blog/gui.jpg" alt="GUI" />
//             <p className="legend"><i>gui</i></p>
//           </div>

//           {/* Seventh slide with an image */}
//           <div className="carousel-slide">
//             <img src="/img/blog/code.jpg" alt="Code" />
//             <p className="legend"><i>painful amounts of painful code</i></p>
//           </div>
//         </Carousel>
//       </div>
//     );
//   };
  
//   export default MyCarousel;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import YouTubeEmbed from '@site/src/components/YouTubeEmbed';

const MyCarousel = ({ slides }) => {
  return (
    <div className="carousel-container">
      <Carousel autoPlay={false} infiniteLoop showThumbs={false} showStatus={false} className="custom-carousel">
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            {slide.type === 'video' ? (
              <YouTubeEmbed videoId={slide.src} />
            ) : (
              <img src={slide.src} alt={slide.alt} />
            )}
            {slide.caption && <p className="legend"><i>{slide.caption}</i></p>}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
