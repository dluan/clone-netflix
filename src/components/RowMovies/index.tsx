import { Box, Heading, Icon, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { FaChevronRight } from 'react-icons/fa'

const RowMovies = () => (
  <LinkBox display="flex" alignItems="end">
    <Heading
      as="h2"
      fontSize="1.4vw"
      color="netflix.ice"
      fontWeight={700}
      m={0}
      lineHeight="1.25vw"
      _hover={{
        '& + a': {
          width: '89px',
          opacity: 1,
          transform: 'translate(1vw, 0)'
        },
        '& + div': {
          transform: 'translate(1vw, 0)'
        }
      }}
    >
      Minhas Lista
    </Heading>
    <LinkOverlay
      color="netflix.aqua"
      fontSize=".9vw"
      fontWeight={700}
      lineHeight=".8vw"
      width="0"
      whiteSpace="nowrap"
      opacity={0}
      transition="width 1s,opacity 1s,transform .75s"
    >
      Ver tudo
    </LinkOverlay>
    <Box
      color="netflix.aqua"
      fontSize=".7vw"
      className="icon-chevron-right"
      transition="transform 750ms"
      _before={{ content: '"\\e658"' }}
    />
  </LinkBox>
)

export default RowMovies
