import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}>
              KMSS
            </Text>
            <br />{' '}
            <Text color={'green.400'} as={'span'}>
              Maths Club
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          We are a community of students passionate about numbers, problem-solving, and exploring the fascinating world of mathematics. We offer guest lectures, workshops, and competitions that provide a supportive and collaborative environment to develop your skills and connect with other math enthusiasts. We encourage you to check back with us soon for updates on future opportunities to get involved and take your math skills to the next level!
          
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link to={"/blog/"}>
              <Button
                rounded={'full'}
                bg={'green.400'}
                color={'white'}
                alt={"Our blog button"}
                _hover={{
                  bg: 'green.500',
                }}>
                Our Blog
              </Button>
            </Link >
            <Link to={'/contact'}>
              <Button rounded={'full'} alt={"contact us button"}>
              Contact Us
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Teams Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
