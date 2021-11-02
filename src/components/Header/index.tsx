import NextLink from 'next/link'
import { Flex, Link } from '@chakra-ui/react'
import Menu from 'components/Menu'

const Header = () => {
  return (
    <Flex
      as="header"
      h={68}
      px="6rem"
      alignItems="center"
      backgroundImage="linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))"
      pos="fixed"
      left={0}
      right={0}
      zIndex="sticky"
    >
      <Flex>
        <NextLink href={'/'} passHref>
          <Link
            fontSize="2.5rem"
            color="netflix.red"
            className="icon-logo"
            _before={{ content: '"\\e5d0"' }}
            _hover={{ textDecoration: 'none' }}
          />
        </NextLink>
        <Menu />
      </Flex>
    </Flex>
  )
}

export default Header
