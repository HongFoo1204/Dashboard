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
  Grid,
  GridItem,
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
  <GridItem>
    <VStack
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
        src={props.imgSrc}
        alt={props.title}
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
  </GridItem>
);

export default function MyBusinessSummary() {
  const businessEstimatesData = {
    projects: 200,
    assigned: 88,
    completed: 120,
    completionRate: 90,
    statRate: 2.3,
  };
  const teamHours = 82;

  return (
    <HStack
      w={'full'}
      h={'300px'}
      spacing={4}
      p={6}
      bgColor={'white'}
      borderRadius={'xl'}
      boxShadow={'md'}
    >
      <VStack w={'full'} spacing={6} alignItems={'flex-start'}>
        <HStack spacing={4}>
          <Icon as={TbNotes} boxSize={6} />
          <Heading as='h5' size='sm'>
            Business Estimates
          </Heading>
        </HStack>
        <Grid templateColumns='repeat(3, 1fr)' gap={4} w={'full'}>
          <BusinessEstimatesItem
            imgSrc='/icons/icon-13.png'
            title='Projects'
            count={businessEstimatesData.projects}
            bgColor='blackAlpha.700'
            titleColor='white'
            countColor='white'
          />
          <BusinessEstimatesItem
            imgSrc='/icons/icon-11.png'
            title='Assigned'
            count={businessEstimatesData.assigned}
            bgColor='primary.400'
            titleColor='white'
            countColor='white'
          />
          <BusinessEstimatesItem
            imgSrc='/icons/icon-12.png'
            title='Completed'
            count={businessEstimatesData.completed}
            bgColor='white'
            titleColor='black'
            countColor='primary.500'
            borderColor='primary.100'
          />
        </Grid>
        <Flex w={'full'} justifyContent={'space-between'}>
          <HStack spacing={1}>
            <Text fontSize={'sm'} color={'gray.400'}>
              On time completion rate:
            </Text>
            <Text as={'b'} fontSize={'md'} color={'primary.500'}>
              {businessEstimatesData.completionRate}%
            </Text>
          </HStack>
          <Button
            size='sm'
            colorScheme='primary'
            bgColor={'primary.300'}
            leftIcon={<Icon as={TfiStatsUp} />}
          >
            {businessEstimatesData.statRate}%
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
          w={'full'}
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
            {teamHours}
          </Text>
        </VStack>
      </VStack>
    </HStack>
  );
}
