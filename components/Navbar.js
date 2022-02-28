import Link from 'next/link';
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi'

const Navbar = () => {

    return (
        <Flex p='2' borderBottom='1px' borderColor='gray.200'>
            <Box fontSize='3xl' color='blue.500' fontWeight='bold'>
                <Link href='/' paddingLeft='2'>Property Discovery</Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='blue.800' />
                    <MenuList>
                        <Link href='/' passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href='/search' passHref>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-sale' passHref>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-rent' passHref>
                            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
}

export default Navbar;