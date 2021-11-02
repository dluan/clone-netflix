import {
  Button,
  Center,
  Heading,
  keyframes,
  LinkBox,
  LinkOverlay,
  VStack,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import ProfileBox from 'components/ProfileBox'
import profiles from '../../utils/mocks/profiles'

const ProfileList = () => {
  const showUp = keyframes`
    from { opacity: 0; transform: scale(1.1); }
    to { opacity: 1; transform: scale(1); }
  `
  const animation = `${showUp} 450ms forwards`
  return (
    <VStack h="calc(100vh - 68px)" justify="center" animation={animation}>
      <Heading as="h1" fontSize="3.4vw" color="white" fontWeight={400} mb={16}>
        Quem está assistindo?
      </Heading>
      <Wrap spacing="2vw">
        {profiles.map((profile) => (
          <ProfileBox id={profile.id} name={profile.name} key={profile.id} />
        ))}
        <LinkBox
          as={WrapItem}
          _hover={{
            '&>div div': { background: '#e5e5e5' },
            '&>div a': { color: '#e5e5e5' }
          }}
        >
          <VStack>
            <Center
              className="icon-add-profile"
              pos="relative"
              borderRadius={4}
              w="19.2rem"
              h="19.2rem"
              fontSize="10rem"
              color="grey"
              _before={{ content: '"\\e716"' }}
            />
            <LinkOverlay href="" fontSize="2.4rem" color="grey">
              Adicionar perfil
            </LinkOverlay>
          </VStack>
        </LinkBox>
      </Wrap>
      <Button
        bg="transparent"
        fontSize="1.2vw"
        borderColor="grey"
        variant="outline"
        color="grey"
        marginTop="4.6rem !important"
        padding="0 3.45rem !important"
        minHeight="5.2rem"
      >
        Gerenciar perfis
      </Button>
    </VStack>
  )
}

export default ProfileList
