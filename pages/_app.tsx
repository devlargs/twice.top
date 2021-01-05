import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import { theme } from "styles/themes";
import "styles/globals.css";
import Header from "components/Header";

const App = ({ Component, pageProps }) => {
  return (
    <Box
      style={{
        backgroundColor: "#eeeeee",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23eeeeee' width='11' height='11'/%3E%3Crect fill='%23ececee' x='10' width='11' height='11'/%3E%3Crect fill='%23ebeaee' y='10' width='11' height='11'/%3E%3Crect fill='%23e9e8ee' x='20' width='11' height='11'/%3E%3Crect fill='%23e8e6ee' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23e6e4ee' y='20' width='11' height='11'/%3E%3Crect fill='%23e5e2ee' x='30' width='11' height='11'/%3E%3Crect fill='%23e3e1ee' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23e1dfef' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23e0ddef' y='30' width='11' height='11'/%3E%3Crect fill='%23dedbef' x='40' width='11' height='11'/%3E%3Crect fill='%23ddd9ef' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23dbd7ef' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23d9d5ef' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23d8d3ef' y='40' width='11' height='11'/%3E%3Crect fill='%23d6d1ef' x='50' width='11' height='11'/%3E%3Crect fill='%23d5cfef' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23d3cdef' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23d1ccef' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23d0caef' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23cec8ef' y='50' width='11' height='11'/%3E%3Crect fill='%23ccc6ef' x='60' width='11' height='11'/%3E%3Crect fill='%23cbc4ef' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23c9c2ef' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23c7c0ef' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23c6beef' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23c4bdef' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23c2bbef' x='70' width='11' height='11'/%3E%3Crect fill='%23c0b9ef' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23bfb7ef' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23bdb5ef' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23bbb3ef' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23b9b1ef' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23b8b0ef' x='80' width='11' height='11'/%3E%3Crect fill='%23b6aeef' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23b4acef' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23b2aaef' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23b1a8ef' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23afa6ef' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23ada5ef' x='90' width='11' height='11'/%3E%3Crect fill='%23aba3ef' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23a9a1ef' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23a79fef' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23a59def' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23a49cef' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23a29aef' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23a098ef' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%239e96ef' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%239c94ef' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%239a93ef' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%239891ef' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23968fee' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23948dee' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23928cee' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23908aee' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%238e88ee' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%238c86ee' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%238984ee' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%238783ee' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%238581ee' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </Box>
  );
};

export default App;
