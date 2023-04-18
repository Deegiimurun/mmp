import '~/styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider, ChakraProviderProps, extendTheme} from "@chakra-ui/react";
import Header from "~/components/header";
import Footer from "~/components/footer";

const theme = extendTheme({
    styles: {
        global: (props: ChakraProviderProps) => ({
            'html, body': {
                backgroundColor: '#222222'
            }
        }),
    },
    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },
})

export default function App({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </ChakraProvider>
    )
}
