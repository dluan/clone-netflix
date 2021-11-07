import { Box } from '@chakra-ui/react'

type CarouselItemProps = {
  children: React.ReactNode
}

const CarouselItem = ({ children }: CarouselItemProps) => {
  return (
    <Box bg="white" color="black" pos="relative">
      {children}
    </Box>
  )
}

export default CarouselItem
