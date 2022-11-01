import courses from '../coursedata';
import Slider from 'react-slick';

export const CourseCarousel = () => {
  return (
    <div className='container'>
      <Slider
        {...{
          dots: false,
          arrows: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }}
        className='carousel'
      >
        {courses.map((item, i) => {
          return (
            <div key={i} className='carousel__course__item'>
              <div className='icon'>{item.icon}</div>
              <h5>{item.name}</h5>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
