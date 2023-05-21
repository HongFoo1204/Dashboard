import {
  HStack,
  VStack,
  Icon,
  Heading,
  Flex,
  Button,
  Image,
  Text,
  Divider,
  Avatar,
} from '@chakra-ui/react';
import { TbNotes, TbUser } from 'react-icons/tb';
import { TfiStatsUp } from 'react-icons/tfi';

interface BusinessEstimatesItemProps {
  imgSrc: string;
  title: string;
  count: number;
  bgColor: string;
  titleColor: string;
  countColor: string;
  borderColor?: string;
}

const BusinessEstimatesItem = (props: BusinessEstimatesItemProps) => (
  <VStack
    w={36}
    h={36}
    justifyContent={'center'}
    bgColor={props.bgColor}
    border={props.borderColor ? '2px' : 'unset'}
    borderColor={props.borderColor}
    borderRadius={'2xl'}
    p={4}
  >
    <Image
      boxSize='8'
      objectFit='cover'
      overflow='visible'
      src={props.imgSrc}
      alt=''
    />
    <Text fontSize={'sm'} color={props.titleColor} textAlign={'center'}>
      {props.title}
    </Text>
    <Text
      as={'b'}
      fontSize={'md'}
      color={props.countColor}
      textAlign={'center'}
    >
      {props.count}
    </Text>
  </VStack>
);

export default function MyBusinessSummary() {
  return (
    <HStack
      w={'100%'}
      h={'300px'}
      spacing={4}
      p={6}
      bgColor={'white'}
      borderRadius={'xl'}
    >
      <VStack spacing={6} alignItems={'flex-start'}>
        <HStack spacing={4}>
          <Icon as={TbNotes} boxSize={6} />
          <Heading as='h5' size='sm'>
            Business Estimates
          </Heading>
        </HStack>
        <HStack spacing={4}>
          <BusinessEstimatesItem
            imgSrc='/icons/icon-13.png'
            title='Projects'
            count={200}
            bgColor='blackAlpha.700'
            titleColor='white'
            countColor='white'
          />
          <BusinessEstimatesItem
            imgSrc='/icons/icon-11.png'
            title='Assigned'
            count={88}
            bgColor='primary.400'
            titleColor='white'
            countColor='white'
          />
          <BusinessEstimatesItem
            imgSrc='/icons/icon-12.png'
            title='Completed'
            count={120}
            bgColor='white'
            titleColor='black'
            countColor='primary.500'
            borderColor='primary.100'
          />
        </HStack>
        <Flex w={'100%'} justifyContent={'space-between'}>
          <HStack spacing={1}>
            <Text fontSize={'sm'} color={'gray.400'}>
              On time completion rate:
            </Text>
            <Text as={'b'} fontSize={'md'} color={'primary.500'}>
              90%
            </Text>
          </HStack>
          <Button
            size='sm'
            colorScheme='primary'
            bgColor={'primary.300'}
            leftIcon={<Icon as={TfiStatsUp} />}
          >
            2.3%
          </Button>
        </Flex>
      </VStack>
      <Divider orientation='vertical' borderColor={'gray.500'} />
      <VStack spacing={4} alignItems={'flex-start'}>
        <HStack spacing={4}>
          <Icon as={TbUser} boxSize={6} />
          <Heading as='h5' size='sm'>
            Get to know your team
          </Heading>
        </HStack>
        <Text fontSize={'sm'} color={'gray.500'}>
          Team members
        </Text>
        <HStack spacing={'-2'}>
          {/* TODO: Use Array Mapping*/}
          <Avatar
            size={'md'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
          <Avatar
            size={'md'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
          <Avatar
            size={'md'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
          <Avatar
            size={'md'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
          <Avatar
            size={'md'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
          <Avatar
            size={'md'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
        </HStack>
        <VStack
          w={'100%'}
          h={24}
          justifyContent={'center'}
          bgColor={'white'}
          border={'2px'}
          borderColor={'primary.100'}
          borderRadius={'2xl'}
        >
          <Text fontSize={'sm'} textAlign={'center'}>
            Hours
          </Text>
          <Text
            as={'b'}
            fontSize={'md'}
            color={'primary.500'}
            textAlign={'center'}
          >
            82
          </Text>
        </VStack>
      </VStack>
    </HStack>
  );
}
