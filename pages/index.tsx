export default function Home() {
  const { lat, lon } = useIssStore();

  const { t, lang } = useTranslation("home");
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
            <MapWrapper />
          </Box>
          <Box
            css={{
              color: "$slate12",
              padding: "1rem",
              fontSize: "3rem",

              position: "absolute",
              bottom: "1rem",
              left: "1rem",
              right: "1rem",
              height: "25%",
              width: "calc(100% - 2rem)",
              backgroundColor: "$slate1",

              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "$slate7",
              borderRadius: "4px",

              "@bp1": {
                height: "min-content",
                width: "calc(480px - 2rem)",

                right: "0rem",
                top: "1rem",
                bottom: "1rem",
              },

              "@supports(backdrop-filter: saturate(150%) blur(20px))": {
                backdropFilter: "saturate(180%) blur(8px)",
                background: "none",
              },
            }}
          >
            <h1>
              The <abbr title="International Space Station">ISS</abbr> is at:
            </h1>
            <ul>
              <li>Latitude: {lat.toFixed(3)}</li>
              <li>Longitude: {lon.toFixed(3)}</li>
            </ul>
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
        url: `https://iss.igorbedesqui.com/images/og/ISS_${lang}.jpg`,
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

import { NextSeo } from "next-seo";
import { OpenGraph } from "next-seo/lib/types";
import useTranslation from "next-translate/useTranslation";
import { Translate } from "next-translate";

import Box from "@/ui/Box";
import Container from "../components/Container";
import MapWrapper from "../components/MapStuff/MapWrapper";
import { useIssStore } from "@/components/store/useIssStore";
