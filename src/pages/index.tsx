import {Box, Image, Link, Text} from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>MMP</title>
            </Head>

            <Box h={'100vh'} display='flex' flexDirection={'column'} justifyContent={'center'}
                 alignItems={'center'} gap={['30px', '50px']}>
                <Image w={['50%','30%']} src={'what-we-do.png'}/>
                <Text fontSize={['14px', '16px']} textAlign={'center'} w={['90%', '47%']} textColor={'white'}>A group of
                    young music lovers founded MMP community in 1999. In 2005, we expanded our activities to event
                    organising, stage design, music label, content production, and branding.</Text>
                <Link href={'what-we-do'}>
                    <Image h={['80%', '90%']} src={'button.png'}/>
                </Link>
            </Box>
            <Box h={'100vh'} display='flex' flexDirection={'column'} justifyContent={'center'}
                 alignItems={'center'} gap={['30px', '50px']}>
                <Image w={['50%','30%']}  src={'mmp-label.png'}/>

                <Text fontSize={['14px', '16px']} textAlign={'center'} w={['90%', '47%']} textColor={'white'}>Mongol Mix
                    Project record label, a pioneer electronic music label based in Ulaanbaatar, Mongolia. MMP music
                    label has been establishing digital distribution, artist management, music marketing, sound and
                    video recordings since 2018. The label releases music records, sets, live music shows, podcasts by
                    artists and DJs. </Text>
                <Link href={'label'}>
                    <Image h={['80%', '90%']} src={'button.png'}/>
                </Link>
            </Box>
            <Box h={'100vh'} display='flex' flexDirection={'column'} justifyContent={'center'}
                 alignItems={'center'} gap={['30px', '50px']}>
                <Image w={['50%','30%']}  src={'mmp-link.png'}/>
                <Text fontSize={['14px', '16px']} textAlign={'center'} w={['90%', '47%']} textColor={'white'}>MMP LINK
                    manages the best strategies for any outdoor or indoor events, forums, conferences, and brand
                    openings. Creating the precise set-up to generate a successful event by managing all stage
                    installments, sound systems, lightings and on-screen visuals.</Text>
                <Link href={'/link'}>
                    <Image h={['80%', '90%']} src={'button.png'}/>
                </Link>
            </Box>
            <Box h={'100vh'} display='flex' flexDirection={'column'} justifyContent={'center'}
                 alignItems={'center'} gap={['30px', '50px']}>
                <Image w={['50%','20%']}  src={'logo.png'}/>
                <Image w={['80%','30%']}  src={'merchandise.png'}/>
                <Link href={'/merchandise'}>
                    <Image h={['80%', '90%']} src={'button.png'}/>
                </Link>
            </Box>
        </>
    )
}