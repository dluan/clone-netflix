import { chakra, Image } from '@chakra-ui/react'
import CarouselItem from 'components/CarouselItem'
import Slider from 'react-slick'
import movies from '../../utils/mocks/movies'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  const SliderWithChakra = chakra(Slider)
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
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
  }
  return (
    <SliderWithChakra {...settings} px={24}>
      {movies.map((movie) => (
        <CarouselItem key={movie.id}>
          <Image src={movie.image} alt={movie.title} />
        </CarouselItem>
      ))}
    </SliderWithChakra>
  )
}

export default Carousel
