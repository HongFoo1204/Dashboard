import { CalendarIcon } from '@chakra-ui/icons';
import { Flex, VStack, Heading, HStack, Text, Image } from '@chakra-ui/react';
import moment from 'moment';

export default function WelcomeBanner() {
  const userName = 'John King';
  const taskCount = 25;
  const today = moment(new Date()).format('DD MMMM YYYY, h:mm a');

  return (
    <Flex
      flexDir={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      bg={'url(/banner-background.png)'}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'100% 100%'}
      w={'100%'}
      h={'200px'}
      p={8}
    >
      <VStack spacing={5} alignItems={'flex-start'}>
        <Heading as='h3' size='lg' color={'white'}>
          Welcome Back - {userName} !
        </Heading>
        <VStack spacing={0} alignItems={'flex-start'}>
          <Text
            fontSize='xs'
            display={'flex'}
            flexDir={'row'}
            alignItems={'baseline'}
            color={'white'}
          >
            You&apos;ve{' '}
            <Text as='b' fontSize='lg' mx={1}>
              {taskCount}
            </Text>{' '}
            task of your goal this month !
          </Text>
          <Text fontSize='xs' color={'white'}>
            Keep it up and improve your result!
          </Text>
        </VStack>
        <HStack spacing={2} color={'white'}>
          <CalendarIcon />
          <Text fontSize='sm'>{today}</Text>
        </HStack>
      </VStack>
      <Image
        display={{ base: 'none', sm: 'block' }}
        boxSize='180px'
        objectFit='cover'
        overflow='visible'
        src='/banner-foreground.png'
        alt='Welcome Banner'
      />
    </Flex>
  );
}
