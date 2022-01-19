export default function Home() {
  const { lat, lon } = useIssStore();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { t, lang } = useTranslation("home");

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 300 * 2,
      height: 300 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [lon, lat], size: 0.05 },
      ],
      onRender: (state: any) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <>
      <PageHead t={t} lang={lang} />
      <Container>
        <Box css={{ position: "relative", height: "100vh" }}>
          <Box
            css={{
              position: "relative",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <canvas ref={canvasRef} style={{ width: 300, height: 300 }} />
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
              <Trans
                i18nKey="home:floatingPane"
                components={{
                  abbr: <Abbr title={t("abrrText")} />,
                }}
              />
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
                <Coord>{lat.toFixed(3)}</Coord>
              </FullWidthBox>
              <FullWidthBox>
                <H2>Longitude</H2>
                <Coord>{lon.toFixed(3)}</Coord>
              </FullWidthBox>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
interface SEOProps {
  t: Translate;
  lang: string;
}

const PageHead: React.FC<SEOProps> = ({ t, lang }) => {
  const og: OpenGraph = {
    type: "website",
    url: `https://iss.igorbedesqui.com${lang != "en" ? "/" + lang : ""}`,
    title: t("title"),
    description: t("description"),
    site_name: t("siteName"),
    images: [
      {
        url: `https://iss.igorbedesqui.com/images/og/ISS_${lang}.png`,
        width: 1200,
        height: 627,
        alt: t("ogAlt"),
      },
    ],
  };
  return (
    <NextSeo
      title={t("title")}
      description={t("description")}
      openGraph={og}
      twitter={{
        site: "@bedesqui",
        cardType: "summary_large_image",
      }}
      languageAlternates={[
        {
          hrefLang: "pt",
          href: `https://iss.igorbedesqui.com/pt`,
        },
        {
          hrefLang: "en",
          href: `https://iss.igorbedesqui.com`,
        },
        {
          hrefLang: "x-default",
          href: `https://iss.igorbedesqui.com`,
        },
      ]}
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

const Abbr = styled("abbr", {
  textDecoration: "none !important",
});

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
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import { Translate } from "next-translate";

import Box from "@/ui/Box";
import Container from "../components/Container";
import MapWrapper from "../components/MapStuff/MapWrapper";
import { useIssStore } from "@/components/store/useIssStore";
import { styled } from "stitches.config";
import { useEffect, useRef } from "react";

import createGlobe from "cobe";
