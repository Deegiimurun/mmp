import {Box, Divider, Image, Text} from "@chakra-ui/react";

export default function WhatWeDo() {
    return (
        <Box w={'100%'} display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Image mt={['48px', '96px']} src={'images/label/label.png'}></Image>
            <Box w={['90%', '60%']} display='flex' flexDirection={'column'} justifyContent={'center'}>
                <Text fontSize={['14px', '20px']} mt={['48px', '96px']} textColor={'white'} textAlign={'center'}>MMP
                    LABEL, a pioneer electronic music label based in mongolia. mmp record label has been establishing
                    digital distribution, artist management, music marketing, sound and video recordings since 2000. our
                    artists and djs have its own style of music and events. the label releases music records, sets, live
                    music shows, podcasts by artists and djs.</Text>
                <Box mt={['48px', '96px']} display='flex' flexDirection={'column'} justifyContent={'center'}>
                    <Box display='flex' flexDirection={'column'} justifyContent={'center'}>
                        <Box display='flex' flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}
                             py={'24px'}>
                            <Text fontSize={['20px', '32px']} textColor={'white'}>RECORD LABEL</Text>
                            <Image h={'24px'} src={'images/label/eye.png'}/>
                        </Box>
                        <Text fontSize={['14px', '20px']} textColor={'white'}>MMP label, a pioneer electronic music
                            label was founded in the early 2000’s. Our artists and DJs have their own style of music and
                            events. The label release music records, DJ mix sets, live performances and podcasts.</Text>
                    </Box>
                    <Divider/>
                </Box>
                <Box mt={['48px', '96px']} display='flex' flexDirection={'column'} justifyContent={'center'}>
                    <Box display='flex' flexDirection={'column'} justifyContent={'center'}>
                        <Box display='flex' flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}
                             py={'24px'}>
                            <Text fontSize={['20px', '32px']} textColor={'white'}>RECORD LABEL</Text>
                            <Image h={'24px'} src={'images/label/eye.png'}/>
                        </Box>
                        <Text fontSize={['14px', '20px']} textColor={'white'}>MMP label, a pioneer electronic music
                            label was founded in the early 2000’s. Our artists and DJs have their own style of music and
                            events. The label release music records, DJ mix sets, live performances and podcasts.</Text>
                    </Box>
                    <Divider/>
                </Box>
                <Box mt={['48px', '96px']} display='flex' flexDirection={'column'} justifyContent={'center'}>
                    <Box display='flex' flexDirection={'column'} justifyContent={'center'}>
                        <Box display='flex' flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}
                             py={'24px'}>
                            <Text fontSize={['20px', '32px']} textColor={'white'}>RECORD LABEL</Text>
                            <Image h={'24px'} src={'images/label/eye.png'}/>
                        </Box>
                        <Text fontSize={['14px', '20px']} textColor={'white'}>MMP label, a pioneer electronic music
                            label was founded in the early 2000’s. Our artists and DJs have their own style of music and
                            events. The label release music records, DJ mix sets, live performances and podcasts.</Text>
                    </Box>
                    <Divider/>
                </Box>
                <Image mt={['48px', '96px']} src={'images/label/soundcloud.png'}></Image>
                <Image mt={['48px', '96px']} src={'images/label/soundcloud.png'}></Image>
                <Image mt={['48px', '96px']} src={'images/label/soundcloud.png'}></Image>
                <Image mt={['48px', '96px']} src={'images/label/soundcloud.png'}></Image>
            </Box>
        </Box>
    )
}