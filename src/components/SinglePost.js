import React, { useState, useEffect } from "react";
import {
  // Stack,
  Flex,
  Text,
  VStack,
  // useBreakpointValue,
  HStack,
  Image
} from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";


export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={props.image}
        alt={props.name}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.publishedAt}</Text>
    </HStack>
  );
};

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          discription,
          publishedAt,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  // let mainImg= "src={singlePost.mainImage.asset.url}"
  if (!singlePost) return (<Flex h={'55vh'} justify={"center"} align={"center"}><Text fontSize={"xl"}>Loading...</Text></Flex>)

  return (
    <>
    <Flex
      w={'90%'}
      margin={'2rem auto 2rem auto'}
      h={'60vh'}
      border={'2px #6BA4A6 solid'}
      borderRadius={'5px'}
      backgroundImage={
        singlePost.mainImage.asset.url
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'100%'}
        justify={'center'}
        // px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
      </VStack>
    </Flex>
            <Text
              fontWeight={700}
              lineHeight={1.2}
              textAlign={'center'}
              margin={'0 0 30px 0px'}
              fontSize={'4xl'}
              >
              {singlePost.title}
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
        fontSize={'2xl'}
        >
        Discription:
      </Text>

      {/* //Discription or Short Intro*/}
     
      {/* <Text 
        margin={'0 auto 0 auto'}
        marginBottom={'30px'}
        fontSize={useBreakpointValue({ base: 'xl', md: 'xl' })}>
      
      </Text> */}
      <BlockContent blocks={singlePost.discription} projectId="41vjc7q7" dataset='production' />
      <Text margin={'0 0 20px 0px'}></Text>

      {/* Main Part */}
      <Text
        as='b'
        marginBottom={'10px'}
        fontSize={'2xl'}
        >
        Full Article:
      </Text>

      {/* <Text 
        margin={'0 auto 0 auto'}
        marginBottom={'30px'}
        fontSize={useBreakpointValue({ base: 'xl', md: 'xl' })}>
      Magnis dis parturient montes nascetur ridiculus mus mauris. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Ultricies tristique nulla aliquet enim tortor at auctor urna. Neque vitae tempus quam pellentesque nec nam. Lectus arcu bibendum at varius vel pharetra. Ullamcorper morbi tincidunt ornare massa eget egestas. Ultrices mi tempus imperdiet nulla. Quisque id diam vel quam. A condimentum vitae sapien pellentesque habitant morbi. Elit sed vulputate mi sit amet mauris. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Duis at tellus at urna condimentum. Elementum tempus egestas sed sed. Ut tristique et egestas quis ipsum suspendisse ultrices gravida.
      <br/>
      <br/>
Mattis vulputate enim nulla aliquet. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Ultrices vitae auctor eu augue ut lectus arcu. Ac tincidunt vitae semper quis lectus nulla at volutpat. Nullam non nisi est sit amet facilisis magna etiam. Ipsum dolor sit amet consectetur adipiscing. Phasellus faucibus scelerisque eleifend donec. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Vitae auctor eu augue ut. Aliquam ultrices sagittis orci a scelerisque. Quis commodo odio aenean sed adipiscing. Placerat in egestas erat imperdiet sed euismod. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae.
      </Text> */}
      <BlockContent blocks={singlePost.body} projectId="41vjc7q7" dataset='production' />

            {/* <BlogAuthor
              name={singlePost.name}
              margin={'0 200px 0 50%'}
              src={urlFor(singlePost.authorImage).url()}
              // date={new Date('2022-03-22T19:01:27Z')}
              publishedAt={singlePost.publishedAt}
            /> */}
            <Text margin={'0 0 20px 0px'}></Text>
              <BlogAuthor
              name={singlePost.name}
              publishedAt={singlePost.publishedAt.split('T')[0]}
              image={
                urlFor(singlePost.authorImage).url()
                // post.authorImage
                // .image.asset.url
              }
            />
    </Flex>

    </>
  );
}