import { AddIcon } from '@chakra-ui/icons';
import {
  VStack,
  Button,
  Menu,
  MenuButton,
  Icon,
  Image,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsThreeDots } from 'react-icons/bs';

export default function MyGoals() {
  return (
    <VStack
      w={'100%'}
      h={'300px'}
      bgGradient='linear(to-r, primary.300, primary.500)'
      borderRadius={'xl'}
      px={24}
      py={6}
      gap={2}
      position={'relative'}
    >
      <Image
        display={{ base: 'none', sm: 'block' }}
        boxSize='180px'
        objectFit='cover'
        overflow='visible'
        mt={'-90px'}
        mb={'-10px'}
        src='/icons/icon-rocket.png'
        alt='Dan Abramov'
      />
      <Text as={'b'} fontSize={'md'} color={'white'} textAlign={'center'}>
        There are no milestones for today 🤓
      </Text>
      <Text fontSize={'sm'} color={'white'} textAlign={'center'}>
        You can create milestones.
      </Text>
      <Button
        colorScheme='primary'
        variant={'ghost'}
        color={'primary.400'}
        bgColor={'white'}
        borderRadius={'xl'}
        leftIcon={<AddIcon />}
      >
        Create Milestone
      </Button>
      <Menu>
        <MenuButton
          as={Button}
          variant={'link'}
          cursor={'pointer'}
          pos={'absolute'}
          top={0}
          right={0}
        >
          <Icon as={BsThreeDots} color='white' />
        </MenuButton>
        <MenuList>
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
        </MenuList>
      </Menu>
    </VStack>
  );
}
