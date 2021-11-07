import { Box, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Carousel from '../Carousel'

type RowMoviesProps = {
  title: string
}

const RowMovies = ({ title }: RowMoviesProps) => {
  return (
    <Box my="3vw">
      <LinkBox display="flex" alignItems="end" mb="1.3rem">
        <Heading
          as="h2"
          fontSize="1.4vw"
          color="netflix.ice"
          fontWeight={700}
          ps={24}
          lineHeight="1.25vw"
          _hover={{
            '& + a': {
              width: '200px',
              opacity: 1,
              transform: 'translate(1vw, 0)'
            },
            '& ~ div': {
              opacity: 1,
              transform: 'translate(5vw, 0)'
            }
          }}
        >
          {title}
        </Heading>
        <LinkOverlay
          color="netflix.aqua"
          fontSize=".9vw"
          fontWeight={700}
          lineHeight=".8vw"
          maxW="0"
          whiteSpace="nowrap"
          opacity={0}
          display="inline-block"
          transition="max-width 1s,opacity 1s,transform .75s"
        >
          Ver tudo
        </LinkOverlay>
        <Box
          color="netflix.aqua"
          fontSize=".7vw"
          className="icon-chevron-right"
          opacity={0}
          transition="transform 750ms,opacity 1.3s"
          _before={{ content: '"\\e658"' }}
        />
      </LinkBox>
      <Carousel />
    </Box>
  )
}

export default RowMovies
