export default function Home() {
  const { t } = useTranslation("home");
  return (
    <>
      <PageHead />
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

const PageHead = () => {
  return (
    <NextSeo
      title="The ISS | One Step closer to Infinity"
      description="Born from the human curiosity, the ISS It is proof that not even the sky is a limit for us. See how it was made and where it is right now!"
      canonical="https://iss-asset.vercel.app/"
      openGraph={{
        url: "https://iss-asset.vercel.app/",
        title: "The ISS | One Step closer to Infinity",
        description:
          "Born from the human curiosity, the ISS It is proof that not even the sky is a limit for us. See how it was made and where it is right now!",
        images: [
          {
            url: "",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
          },
        ],
      }}
      twitter={{
        handle: "@igorbdsq",
        site: "@igorbdsq",
        cardType: "summary_large_image",
      }}
    />
  );
};
import { NextSeo } from "next-seo";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import Container from "../components/Container";
import Band from "../components/Band";
import B from "../components/Bold";
import Wrapper from "../components/partsStuff/Wrapper";
import MapWrapper from "../components/MapStuff/MapWrapper";
