import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider, Container, extendTheme, Text } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Eventos from "./pages/Eventos/Eventos";

//Definição das cores do projeto
const theme = extendTheme({
  colors: {
    primary: "#F2FFE9",
    secondary: "#A6CF98",
    tertiary: "#557C55",
    quaternary: "#FA7070",
  },
});

//Rotas da aplicação
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/eventos",
    element: <Eventos />,
  },
]);

function App() {
  // Arquivo de configuração do projeto, onde tudo está centralizado
  return (
    <ChakraProvider theme={theme}>
      <Container minW="100%" minHeight="100vh" p={0} background="secondary">
        <RouterProvider router={router} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
