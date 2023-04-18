import {
    Box,
    Button,
    Drawer, DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Image, Text,
    useDisclosure,
    Link, Input
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
                            <Box flexGrow={['0.5', '1']} display={'flex'} flexDirection={['column','row']} p={[5,20]}>
                                <Box flexGrow={'1'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} >
                                    <Link href={'/what-we-do'}><Text fontSize={['32px','68px']} textColor={'white'}>WHAT WE DO</Text></Link>
                                    <Link href={'/label'}><Text fontSize={['32px','68px']} textColor={'white'}>MMP LABEL</Text></Link>
                                    <Link href={'/link'}><Text fontSize={['32px','68px']} textColor={'white'}>MMP LINK</Text></Link>
                                    <Link href={'/merchandise'}><Text fontSize={['32px','68px']} textColor={'white'}>MERCHANDISE</Text></Link>
                                    <Link href={'/contact'}><Text fontSize={['32px','68px']} textColor={'white'}>CONTACT</Text></Link>
                                </Box>
                                <Box flexGrow={'1'} display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'end'}>
                                    <Box w={['100%', '70%']} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mb={'50px'}>
                                        <Link href={'#'}><Image boxSize={['36px','80px']} src={'/images/social/facebook.png'}/></Link>
                                        <Link href={'#'}><Image boxSize={['36px','80px']} src={'/images/social/instagram.png'}/></Link>
                                        <Link href={'#'}><Image boxSize={['36px','80px']} src={'/images/social/youtube.png'}/></Link>
                                        <Link href={'#'}><Image boxSize={['36px','80px']} src={'/images/social/sound-cloud.png'}/></Link>
                                        <Link href={'#'}><Image boxSize={['36px','80px']} src={'/images/social/idk.png'}/></Link>
                                        <Link href={'#'}><Image boxSize={['36px','80px']} src={'/images/social/twitter.png'}/></Link>
                                    </Box>
                                    <Box display='flex' flexDirection={'column'} justifyContent={'center'} gap={'10px'}>
                                        <Text fontSize={['20px', '32px']} fontWeight={'bold'} textAlign={'center'} textColor={'white'}>Subscribe to our Newsletter</Text>
                                        <Text mb={'50px'} fontSize={['14px', '16px']} textColor={'white'}>Get updates on releases, event and more...</Text>
                                        <Box display='flex' justifyContent={'start'}  w={['90%', '40%']}  w={'100%'}>
                                            <Input fontSize={['14px', '16px']} borderRadius={0} placeholder='Enter your email address' w={'60%'} />
                                            <Button borderRadius={0} w={'40%'}>
                                                <Text mr={'10px'} fontSize={['14px', '16px']}>Notify me</Text>
                                                <Image src={'/up-right.png'}/>
                                            </Button>
                                        </Box>
                                    </Box>
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