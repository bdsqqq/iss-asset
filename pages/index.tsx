export default function Home() {
  const { t, lang } = useTranslation("home");
  return (
    <>
      <PageHead t={t} lang={lang} />
      <Container>
        <Band
          dark
          headline={{
            bold: "01",
            thin: "Wheres the iss?",
          }}
        >
          <div className="w-0 h-8 hidden md:block" />
          <MapWrapper />
        </Band>
        <Band
          headline={{
            bold: "02",
            thin: "What is it?",
          }}
        >
          <p className="text-2xl leading-7 md:text-3xl md:leading-8">
            Born from the human curiosity,<B> the ISS</B> is the biggest
            man-made object in space, yet it is only the <B> first step</B>.
            <br /> <br />
            It is our<B> first in-orbit laboratory</B>.
            <br /> <br />
            It is<B> a permanent observatory</B>.
            <br /> <br />
            It is the culmination of the work of hundreds of thousands of humans
            throughout history.
            <br /> <br />
            It is proof that<B> not even the sky is a limit for us</B>.
            <br /> <br />
            It is one step in our long and incredible journey
            <B> into the infinity and beyond.</B>
          </p>
        </Band>
        {/*<Band
          dark
          headline={{
            bold: "03",
            thin: "not your average lego set",
          }}
        >
          <p className="text-2xl leading-7 md:text-3xl md:leading-8">
            The different pieces of the Space Station were built in many
            locations around the globe.
            <br /> <br />
            Each piece, called module, was then launched into space and
            assembled there.
            <br /> <br />
            the whole construction took a bit over a decade before its
            completion.
          </p>
        </Band>
        <Band dark padless gridless id="timeline">
          <Wrapper />
        </Band>*/}
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
    site_name: "Where's the iss?",
    images: [
      {
        url: `https://iss.igorbedesqui.com/images/og/ISS-${lang}.jpg`,
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
        handle: "@igorbdsq",
        site: "@site",
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

import Container from "../components/Container";
import Band from "../components/Band";
import B from "../components/Bold";
import Wrapper from "../components/partsStuff/Wrapper";
import MapWrapper from "../components/MapStuff/MapWrapper";
