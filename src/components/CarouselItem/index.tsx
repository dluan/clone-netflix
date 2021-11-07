import { Box } from '@chakra-ui/react'

type CarouselItemProps = {
  children: React.ReactNode
}

const CarouselItem = ({ children }: CarouselItemProps) => {
  return (
    <Box bg="transparent" color="black" pos="relative" px="2px">
      {children}
    </Box>
  )
}

export default CarouselItem
