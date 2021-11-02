import {
  Box,
  Image,
  LinkBox,
  LinkOverlay,
  VStack,
  WrapItem
} from '@chakra-ui/react'

type ProfileBoxProps = {
  id: number
  name: string
}

const ProfileBox = ({ id, name }: ProfileBoxProps) => (
  <LinkBox
    as={WrapItem}
    _hover={{
      '&>div div:after': { borderColor: '#e5e5e5' },
      '&>div a': { color: '#e5e5e5' }
    }}
  >
    <VStack>
      <Box
        pos="relative"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: '4px solid transparent',
          borderRadius: '4px'
        }}
      >
        <Image
          boxSize="19.2rem"
          src={`/img/profile-${id}.png`}
          objectFit="cover"
          borderRadius={4}
        />
      </Box>
      <LinkOverlay href="" fontSize="2.4rem" color="grey">
        {name}
      </LinkOverlay>
    </VStack>
  </LinkBox>
)

export default ProfileBox
