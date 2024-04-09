import {ChakraProvider, Stack} from '@chakra-ui/react'
import {RegistrationForm} from '../RegistrationForm';

function App() {
    return (
        <ChakraProvider>
            <Stack
                height="100vh"
                alignItems="center"
                justifyContent="center"
            >
                <RegistrationForm/>
            </Stack>
        </ChakraProvider>
    );
}

export default App;
