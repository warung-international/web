import Head from 'next/head'
import { Flex, Heading, Text, Link } from "@chakra-ui/layout";

const Page = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      backgroundColor="blackAlpha.900"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title>Warung International</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Warung International" />
        <meta name="description" content="Warung International hanya menjual Soto Ayam terbaik di tata surya dan sudah teruji klinis di lab ITB dan IPB." />
        <meta name="keywords" content="warung, international, warung international, aku ganteng" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="mclemie" />
        <meta property="og:image" content="https://user-images.githubusercontent.com/27568445/167063748-4cf22a8e-0844-4d7e-8554-7166baa2957e.png" />
      </Head>
      <Link
        href="https://discord.gg/y4D5zbf4AQ"
        _hover={{ textDecoration: "none" }}
      >
        <Heading fontFamily="Inter">
          <Text
            as="span"
            sx={{
              color: "transparent",
              lineHeight: 1,
              margin: 0,
              py: "5em",
              px: "5em",
              animationPlayState: "paused",

              background: `linear-gradient(0deg, rgba(230,77,77,1) 0%, rgba(187,138,67,1) 10%, rgba(204,156,19,1) 20%, rgba(5,210,64,1) 30%, rgba(31,227,163,1) 40%, rgba(72,190,204,1) 50%, rgba(105,114,247,1) 60%, rgba(208,99,254,1) 70%, rgba(255,53,209,1) 80%, rgba(255,0,214,1) 90%, rgba(255,0,0,1) 100%)`,
              backgroundClip: "text",
              backgroundSize: "100% 100%",
            }}
            _hover={{
              animationDuration: "2s",
              animationName: "anim",
              animationIterationCount: "infinite",
              animationDirection: "alternate-reverse",
              animationPlayState: "running",
            }}
          >
            Warung International
          </Text>
        </Heading>
      </Link>

      <style jsx>{`
        @keyframes anim {
          from {
            background-position-y: 0;
          }
          to {
            background-position-y: 10em;
          }
        }
      `}</style>
    </Flex>
  );
};

export default Page;
