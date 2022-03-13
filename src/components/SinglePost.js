import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  HStack,
  Image
} from '@chakra-ui/react';
import image from '../components/img/7.jpg'

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://ozgrozer.github.io/100k-faces/0/2/002577.jpg"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

export default function SinglePost() {
  return (
    <>
    <Flex
      w={'90%'}
      margin={'2rem auto 2rem auto'}
      h={'60vh'}
      border={'2px #6BA4A6 solid'}
      borderRadius={'5px'}
      backgroundImage={
        image
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'100%'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        {/* <Stack maxW={'2xl'} align={'flex-end'} spacing={6}>
          

        </Stack> */}
      </VStack>
    </Flex>
            <Text
              fontWeight={700}
              lineHeight={1.2}
              textAlign={'center'}
              margin={'0 0 30px 0px'}
              fontSize={useBreakpointValue({ base: '4xl', md: '4xl' })}>
              <span>💻</span>Mathematical Computational
            </Text>
          
    <Flex 
      direction={'column'}
      w={'80%'}
      margin={'0 auto 0 auto'}
      marginBottom={'50px'}
    >
      <Text
        as='b'
        marginBottom={'10px'}
        fontSize={useBreakpointValue({ base: '2xl', md: '2xl' })}>
        Summary:
      </Text>
      {/* //Discription or Short Intro*/}
      <Text 
        // fontSize='lg'
        margin={'0 auto 0 auto'}
        marginBottom={'30px'}
        fontSize={useBreakpointValue({ base: 'xl', md: 'xl' })}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus in metus. Feugiat sed lectus vestibulum mattis ullamcorper. Placerat vestibulum lectus mauris ultrices eros in. Libero id faucibus nisl tincidunt. Egestas congue quisque egestas diam in arcu cursus. Sit amet dictum sit amet justo. Eget nunc lobortis mattis aliquam faucibus purus in. Magna fermentum iaculis eu non diam. Nunc sed velit dignissim sodales ut eu sem integer vitae. Elementum facilisis leo vel fringilla est ullamcorper eget. Vel eros donec ac odio tempor.
      </Text>

      {/* Main Part */}
      <Text
        as='b'
        marginBottom={'10px'}
        fontSize={useBreakpointValue({ base: '2xl', md: '2xl' })}>
        Full Article:
      </Text>
      <Text 
        margin={'0 auto 0 auto'}
        marginBottom={'30px'}
        fontSize={useBreakpointValue({ base: 'xl', md: 'xl' })}>
      Magnis dis parturient montes nascetur ridiculus mus mauris. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Ultricies tristique nulla aliquet enim tortor at auctor urna. Neque vitae tempus quam pellentesque nec nam. Lectus arcu bibendum at varius vel pharetra. Ullamcorper morbi tincidunt ornare massa eget egestas. Ultrices mi tempus imperdiet nulla. Quisque id diam vel quam. A condimentum vitae sapien pellentesque habitant morbi. Elit sed vulputate mi sit amet mauris. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Duis at tellus at urna condimentum. Elementum tempus egestas sed sed. Ut tristique et egestas quis ipsum suspendisse ultrices gravida.
      <br/>
      <br/>
Mattis vulputate enim nulla aliquet. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Ultrices vitae auctor eu augue ut lectus arcu. Ac tincidunt vitae semper quis lectus nulla at volutpat. Nullam non nisi est sit amet facilisis magna etiam. Ipsum dolor sit amet consectetur adipiscing. Phasellus faucibus scelerisque eleifend donec. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Vitae auctor eu augue ut. Aliquam ultrices sagittis orci a scelerisque. Quis commodo odio aenean sed adipiscing. Placerat in egestas erat imperdiet sed euismod. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae.
      </Text>

            <BlogAuthor
              name="Samrid Pandit"
              margin={'0 200px 0 50%'}
              date={new Date('2022-03-22T19:01:27Z')}
            />
    </Flex>

    </>
  );
}