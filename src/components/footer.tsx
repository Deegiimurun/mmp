import {Box, Grid, GridItem, Image, Link, Text} from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box h={'100vh'} w={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
             gap={20}>
            <Grid
                w={['90%','70%']}
                templateRows='repeat(4, 1fr)'
                templateColumns='repeat(2, 1fr)'
                gap={10}
            >
                <GridItem colSpan={2}>
                    <Text textColor={'white'} fontWeight={'bold'} fontSize={['16px','32px']}>CONTACT US</Text>
                    <Text textColor={'white'} fontSize={['12px','24px']}>Tell: +976 72112271</Text>
                </GridItem>
                <GridItem>
                    <Text textColor={'white'} fontWeight={'bold'} fontSize={['16px','32px']}>MUSIC LABEL</Text>
                    <Text textColor={'white'} fontSize={['12px','24px']}>booking@mmp.mn</Text>
                </GridItem>
                <GridItem>
                    <Text textColor={'white'} fontWeight={'bold'} fontSize={['16px','32px']}>EVENTS</Text>
                    <Text textColor={'white'} fontSize={['12px','24px']}>event@mmp.mn</Text>
                </GridItem>
                <GridItem>
                    <Text textColor={'white'} fontWeight={'bold'} fontSize={['16px','32px']}>ANYTHING ELSE</Text>
                    <Text textColor={'white'} fontSize={['12px','24px']}>management@mmp.mn</Text>
                </GridItem>
                <GridItem>
                    <Text textColor={'white'} fontWeight={'bold'} fontSize={['16px','32px']}>MMP RECRUITE</Text>
                    <Text textColor={'white'} fontSize={['12px','24px']}>management@mmp.mn</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text textColor={'white'} fontWeight={'bold'} fontSize={['16px','32px']}>Address</Text>
                    <Text textColor={'white'} fontSize={['12px','24px']}>11A, Usnii gudam, 3 Khoroo, Sukhbaatar district
                        Ulaanbaatar, Mongolia</Text>
                </GridItem>
            </Grid>
            <Box w={['90%', '70%']} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={['24px','96px']}>
                <Link href={'#'}><Image boxSize={['36px','80px']} src={'/images/social/facebook.png'}/></Link>
                <Link href={'#'}><Image boxSize={['36px','80px']} src={'/images/social/instagram.png'}/></Link>
                <Link href={'#'}><Image boxSize={['36px','80px']} src={'/images/social/youtube.png'}/></Link>
                <Link href={'#'}><Image boxSize={['36px','80px']} src={'/images/social/sound-cloud.png'}/></Link>
                <Link href={'#'}><Image boxSize={['36px','80px']} src={'/images/social/idk.png'}/></Link>
                <Link href={'#'}><Image boxSize={['36px','80px']} src={'/images/social/twitter.png'}/></Link>
            </Box>
            <Text textColor={'white'} fontSize={['12px','24px']}>© 2023 Mongol Mix Project</Text>
        </Box>
    )
}