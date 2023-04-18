import {useRouter} from "next/router";
import {Box, Button, Divider, Image, Text} from "@chakra-ui/react";
import projects from "~/projects";
import {Gallery, ProductImage} from "~/components/gallery";

export default function ProjectName() {
    const router = useRouter();
    let {projectName} = router.query;
    projectName = projectName as string

    if (!projectName) {
        return
    }

    const project = projects[projectName];


    return (
        <Box w={'100%'} bg={'white'}>
            <Box py={['48px', '96px']} mx={'auto'} w={['90%', '60%']} display='flex' flexDirection={'column'}
                 justifyContent={'center'} gap={['48px', '96px']}>
                <Box>
                    <Button bg={'white'} onClick={(e) => {
                        e.preventDefault()
                        router.push('/what-we-do');
                    }}>
                        <Image src={'/images/arrow-left.png'}></Image>
                        <Text fontSize={['20px', '32px']}>{projectName?.toUpperCase()}</Text>
                    </Button>
                </Box>
                <Divider colorScheme={'gray'}/>
                <Image src={project.mainImage}></Image>
                <Text pt={['48px', '96px']} fontSize={['14px', '20px']} textAlign={'center'}>
                    {project.introduction}
                </Text>

                {project.slides.map((value, i) => {
                    const images: Array<ProductImage> = []

                    value.forEach((value1, index) => {
                        images.push({
                            id: value1,
                            src: `/images/what-we-do/projects/${value1}`,
                        })
                    })

                    return (
                        <Gallery key={i} images={images}/>
                    )
                })}
                {project.texts?.map((value, i) => {
                    return (
                        <Text key={i} pt={['48px', '96px']} fontSize={['14px', '20px']} textAlign={'center'}>
                            {value}
                        </Text>
                    )
                })}
                {project.iframes.map((value, i) => {
                    return (
                        <div key={i} dangerouslySetInnerHTML={{__html:value}}></div>
                    )
                })}
            </Box>
        </Box>
    )
}