import {
    Box,
    Button,
    Drawer, DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Image, Text,
    useDisclosure,
    Link
} from "@chakra-ui/react";

export default function Footer() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <Box h={'72px'} backgroundColor={'white'} display={'flex'} flexDirection={"row"} justifyContent={"center"}
             alignItems={"center"}>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
            >
                <DrawerOverlay/>
                <DrawerContent h={'100vh'} bg={'#222222'}>
                    <DrawerBody bg={'#222222'}>
                        <Box h={'100%'} display={'flex'} flexDirection={'column'}>
                            <Box h={'72px'} display={'flex'} flexDirection={"row"} justifyContent={"center"}>
                                <Button bg={'#222222'} onClick={onClose}>
                                    <Image src={'/up.png'}></Image>
                                </Button>
                            </Box>
                            <Box flexGrow={'1'} display={'flex'} flexDirection={['column','row']} p={[10,20]}>
                                <Box flexGrow={'1'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} >
                                    <Link href={'/what-we-do'}><Text fontSize={['32px','68px']} textColor={'white'}>WHAT WE DO</Text></Link>
                                    <Link href={'/label'}><Text fontSize={['32px','68px']} textColor={'white'}>MMP LABEL</Text></Link>
                                    <Link href={'/link'}><Text fontSize={['32px','68px']} textColor={'white'}>MMP LINK</Text></Link>
                                    <Link href={'/merchandise'}><Text fontSize={['32px','68px']} textColor={'white'}>MERCHANDISE</Text></Link>
                                    <Link href={'/contact'}><Text fontSize={['32px','68px']} textColor={'white'}>CONTACT</Text></Link>
                                </Box>
                                <Box flexGrow={'1'} display={'flex'} flexDirection={'column'}>
                                </Box>
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Button bg={'white'} onClick={onOpen}>
                <Image src={'/down.png'}></Image>
            </Button>
        </Box>
    )
}