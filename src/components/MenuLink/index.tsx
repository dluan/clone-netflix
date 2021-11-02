import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'

type MenuLinkProps = {
  url: string
  menuText: string
}

const MenuLink = ({ url, menuText }: MenuLinkProps) => {
  const router = useRouter()
  const isActive = router.pathname === url
  return (
    <NextLink href={url}>
      <Link
        color={isActive ? 'netflix.ice' : '#b3b3b3'}
        fontSize="1.4rem"
        transition="color .4s"
        _hover={{ textDecoration: 'none', outline: 0, color: '#b3b3b3' }}
        fontWeight={isActive ? 700 : 400}
      >
        {menuText}
      </Link>
    </NextLink>
  )
}
export default MenuLink
