import {Box, Image, SimpleGrid} from "@chakra-ui/react";

const projects = [
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    },
    {
        "title": "“Silence White” Mongolian Leading Dance Event",
        "image": "images/what-we-do/logo.png"
    }
]

export default function WhatWeDo() {
    return (
        <Box w={'100%'} bg={'white'}>
            <Box mx={'auto'} w={['90%', '60%']} display='flex' flexDirection={'column'} justifyContent={'center'}>
                <SimpleGrid columns={4} spacing={10}>
                    {projects.map(value => {
                        console.log(value)
                        return (
                            <Image src={value.image} key={value.title}/>
                        )
                    })}
                </SimpleGrid>
            </Box>
        </Box>
    )
}