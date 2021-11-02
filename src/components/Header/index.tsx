import { Flex, Link } from '@chakra-ui/react'

const Header = () => (
  <Flex as="header" h={68} px="6rem" alignItems="center">
    <Flex>
      <Link
        fontSize="2.5rem"
        color="netflix.red"
        href="/"
        className="icon-logo"
        _before={{ content: '"\\e5d0"' }}
        _hover={{ textDecoration: 'none' }}
      ></Link>
    </Flex>
  </Flex>
)

export default Header
