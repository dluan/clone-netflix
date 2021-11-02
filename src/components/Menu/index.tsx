import { HStack } from '@chakra-ui/react'
import MenuLink from 'components/MenuLink'

const Menu = () => (
  <HStack spacing={8} ml={16}>
    <MenuLink url="/catalog" menuText="Início" />
    <MenuLink url="/series" menuText="Séries" />
    <MenuLink url="/Filmes" menuText="Filmes" />
    <MenuLink url="/Bombando" menuText="Bombando" />
    <MenuLink url="/minhalista" menuText="Minha Lista" />
  </HStack>
)

export default Menu
