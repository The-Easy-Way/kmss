// import SanityBlockContent from '@sanity/block-content-to-react';
import BlockContent from "@sanity/block-content-to-react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  // SpaceProps,
  // useColorModeValue,
  Container,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import imageUrlBuilder from "@sanity/image-url";

// interface IBlogTags {
//   tags: Array<string>;
//   marginTop?: SpaceProps['marginTop'];
// }

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" bg="red.500" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

// interface BlogAuthorProps {
//   date: Date;
//   name: string;
// }

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={props.image}
        alt={props.title}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.publishedAt.split('T')[0]}</Text>
    </HStack>
  );
};



const Post = () => {
  const [postData, setPost] = useState(null);
  // const [authorData, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        body,
        discription,
        publishedAt,
        tags,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        "name": author->name,
        "authorImage": author->image,
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type == "author"]{
  //       name,
  //       image{
  //         asset->{
  //           _id,
  //           url
  //         }
  //       },
  //     }`
  //     )
  //     .then((data) => setAuthor(data))
  //     .catch(console.error);
  // }, []);

  return (
    
    <Container maxW={'7xl'} 
    p="12"
    >
      {/* <Heading as="h1">Stories by KMSS</Heading>
      <article>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link to='/blog/test' textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                // borderRadius="lg"
                // src={post.mainImage.asset.url}
                // alt={post.mainImage.alt}
                // objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <BlogTags tags={['Math', 'Pi Day']} />
          <Heading marginTop="1">
            <Link to='/blog/test' textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {/* Pi in the Sky */}
              {/* {post.title} */}
            {/* </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            This is an article about google breaking the calculation record using google cloud in 14/3 2019 (Pi day).
          </Text>
          <BlogAuthor name="Manish Poudel" publishedAt={'2022-03-12T19:01:27Z'} />

        </Box>
      </Box>
      </article> */}
      

      <Heading as="h2" 
      // marginTop="5"
      marginTop="-10"
      >
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        

        {postData &&
          postData.map((post, index) => (
          // authorData.map((author, index) => (
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link href={"/blog/" + post.slug.current} key={post.slug.current} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt}
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={post.tags} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link href={"/blog/" + post.slug.current} key={post.slug.current} textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {post.title}
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">

            <BlockContent blocks={post.discription} projectId="41vjc7q7" dataset='production' />

            </Text>
            <BlogAuthor
              name={post.name}
              publishedAt={post.publishedAt}
              image={
                urlFor(post.authorImage).url()
                // post.authorImage
                // .image.asset.url
              }
            />
          </Box>
        </WrapItem>
        ))
        }
    
      </Wrap>

      
    </Container>
  );
};

export default Post;
