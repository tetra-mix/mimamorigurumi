import { Container,Center, Icon, Flex, Button, Image, Drawer, DrawerHeader, DrawerFooter, DrawerBody, useDisclosure } from '@yamada-ui/react';
import { IoMdMenu } from "react-icons/io";
import { History }  from '../atom/History.tsx';
import Logo from '../assets/logo.png';


export const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Container p={0} m={0} borderBottom="1px solid" borderColor="gray.200">
                <Flex justifyContent="space-between" alignItems="center" pl={4} pt={2} pb={2}>
                    <Button w="10%" onClick={onOpen} variant="ghost" text="5xl">
                        <Icon as={IoMdMenu} />
                    </Button>
                    <Center w="90%">
                        <Image h={"8vh"} src={Logo} alt="みまもりぐるみ" />
                    </Center>
                </Flex>
            </Container>
            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerHeader>会話履歴</DrawerHeader>
                <DrawerBody>
                    <History />
                </DrawerBody>
                <DrawerFooter>
                    <Button variant="ghost" onClick={onClose}>
                        とじる
                    </Button>
                </DrawerFooter>
            </Drawer>
        </>
    )
}