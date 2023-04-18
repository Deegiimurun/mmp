import {Box, Image, SimpleGrid, Text, Button, Link} from "@chakra-ui/react";
import {useRouter} from "next/router";
import projects from "~/projects"



export default function WhatWeDo() {
    const router = useRouter();

    return (
        <Box w={'100%'} bg={'white'}>
            <Box py={['48px', '96px']} mx={'auto'} w={['90%', '60%']} display='flex' flexDirection={'column'}
                 justifyContent={'center'} gap={['48px', '96px']}>
                <Box>
                    <Button bg={'white'} onClick={(e) => {
                        e.preventDefault()
                        router.push('/');
                    }}>
                        <Image src={'/images/arrow-left.png'}></Image>
                        <Text fontSize={['20px', '32px']}>WHAT WE DO</Text>
                    </Button>
                </Box>
                <SimpleGrid columns={[2, 4]} spacing={10}>
                    {Object.entries(projects).map((project) => {
                        const key = project[0];
                        const value = project[1];
                        return (
                            <Link key={key} href={`what-we-do/${key}`}>
                                <Box>
                                    <Image src={value.image}/>
                                    <Text fontSize={['12px', "16px"]}>{value.title}</Text>
                                </Box>
                            </Link>
                        )
                    })}
                </SimpleGrid>
            </Box>
        </Box>
    )
}