export default function Home() {
  const data = useAtomValue(coords);

  return (
    <>
      <PageHead />
      <Container>
        <Box css={{ position: "relative", height: "100vh" }}>
          <Box
            css={{
              position: "relative",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <MapWrapper />
          </Box>
          <Box
            css={{
              color: "$slate12",
              padding: "1rem",

              position: "absolute",
              bottom: "1rem",
              left: "1rem",
              right: "1rem",
              height: "min-content",
              width: "calc(100% - 2rem)",
              backgroundColor: "$slate1",

              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "$slate7",
              borderRadius: "4px",

              "@bp1": {
                height: "min-content",
                width: "min-content",
              },

              "@supports(backdrop-filter: saturate(150%) blur(20px))": {
                backdropFilter: "saturate(180%) blur(6px)",
                background: "none",
              },
            }}
          >
            <H1>
              The{" "}
              <abbr
                style={{ textUnderlineOffset: "3px" }}
                title="International Space Station"
              >
                ISS
              </abbr>{" "}
              is at:
            </H1>
            <Box
              css={{
                display: "flex",
                gap: "2rem",

                marginTop: "1rem",
              }}
            >
              <FullWidthBox>
                <H2>Latitude</H2>
                <Coord>{data[0].toFixed(3)}</Coord>
              </FullWidthBox>
              <FullWidthBox>
                <H2>Longitude</H2>
                <Coord>{data[1].toFixed(3)}</Coord>
              </FullWidthBox>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

const PageHead: React.FC = () => {
  const SEOData = {
    title: "Where's the ISS?",
    description:
      "Born from the human curiosity, the ISS is proof that not even the sky is a limit for us. See where the ISS is right now!",
  };

  const og: OpenGraph = {
    type: "website",
    url: `https://iss.igorbedesqui.com`,
    title: SEOData.title,
    description: SEOData.description,
    site_name: "Where's the iss?",
    images: [
      {
        url: `https://iss.igorbedesqui.com/images/og/ISS.png`,
        width: 1200,
        height: 627,
        alt: "Screenshot from the website",
      },
    ],
  };
  return (
    <NextSeo
      title={SEOData.title}
      description={SEOData.description}
      openGraph={og}
      twitter={{
        site: "@bedesqui",
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        {
          property: "viewport",
          content: "initial-scale=1.0, width=device-width",
        },
        {
          httpEquiv: "x-ua-compatible",
          content: "IE=edge; chrome=1",
        },
      ]}
    />
  );
};

const H1 = styled("h1", {
  fontWeight: "300",
  fontSize: "1.5rem",
});

const H2 = styled("h2", {
  fontWeight: "700",
  color: "$slate11",
});

const FullWidthBox = styled(Box, {
  width: "100%",
});

const Coord = styled("p", {
  fontSize: "2rem",
  lineHeight: "1em",
});

import { NextSeo } from "next-seo";
import { OpenGraph } from "next-seo/lib/types";

import Box from "@/ui/Box";
import Container from "../components/Container";
import MapWrapper from "../components/MapStuff/MapWrapper";
import { styled } from "stitches.config";
import { useAtomValue } from "jotai";
import { coords } from "lib/store";
