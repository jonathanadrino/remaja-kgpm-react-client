import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Carousel.css";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
  const navigate = useNavigate()

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 7000);
  });

  const slideRight = () => {

      setCurrent(current === images.length - 1 ? 0 : current + 1);

  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  const click = (id) => {
    navigate(`/berita/${id}`)
  };

  if(!images) {
    return null
  }

  return (
    <div className="container mt-2">
    <div
      className="carousel m-auto"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index == current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
              onClick={() => {
                click(image.id)
              }}
            >
         

              <img className="card_image" src={image.imgUrl} alt="" style={{width:'50%', borderRadius: '10px', objectFit: 'contain'}}/>
            
            <div className="d-flex align-items-center justify-content-center card-title-box">
                <h5 className="p-2 carousel-title">
                  {image.title}
                </h5>
            </div>
            
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination bg-secondary px-2" style={{borderRadius: '10px'}}>
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Carousel;
