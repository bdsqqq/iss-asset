export default function Home() {
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
              padding: "3rem",
              fontSize: "3rem",

              position: "absolute",
              bottom: 0,
              height: "25%",
              width: "100%",
              backgroundColor: "$slate1",

              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "$slate7",

              "@bp1": {
                height: "100%",
                width: "25%",
              },

              "@supports(backdrop-filter: saturate(150%) blur(20px))": {
                backdropFilter: "saturate(180%) blur(8px)",
                background: "none",
              },
            }}
          >
            Muito brabo
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
