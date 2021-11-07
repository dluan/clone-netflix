import { chakra, Image } from '@chakra-ui/react'
import CarouselItem from 'components/CarouselItem'
import Slider from 'react-slick'
import movies from '../../utils/mocks/movies'

const Carousel = () => {
  const SliderWithChakra = chakra(Slider)
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '57px',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    initialSlide: Math.floor(Math.random() * 18)
  }
  return (
    <SliderWithChakra {...settings}>
      {movies.map((movie) => (
        <CarouselItem key={movie.id}>
          <Image src={movie.image} alt={movie.title} borderRadius="4px" />
        </CarouselItem>
      ))}
    </SliderWithChakra>
  )
}

export default Carousel
