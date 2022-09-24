export default function Home() {
  const data = useAtomValue(coords);

  return (
    <>
      <Head>
        <PageHead />
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <script
          async
          defer
          data-website-id="1bca272f-1b2d-45e7-831d-281bc0a07e7a"
          src="https://umami.igorbedesqui.com/umami.js"
          type="text/partytown"
        />
      </Head>

      <div className="relative h-screen bg-slate1">
        <div className="relative h-full overflow-hidden">
          <MapWrapper />
        </div>
        <main className="flex flex-col gap-2 text-slate12 p-4 absolute bottom-4 right-4 left-4 h-min w-min border border-slate7 rounded-sm transition-all bg-slate1 glass">
          <h1 className="text-2xl text-slate11 w-max">
            The{" "}
            <abbr
              className="underline-offset-2"
              title="International Space Station"
            >
              ISS
            </abbr>{" "}
            is at:
          </h1>
          <div className="flex flex-col">
            <div className="w-full">
              <h2>
                <span className="text-slate11 text-xs font-bold tracking-widest">
                  Latitude
                </span>
                <br />
                <span className="text-4xl tabular-nums block text-right">
                  {data[0].toFixed(3)}
                </span>
              </h2>
            </div>
            <div className="w-full">
              <h2>
                <span className="text-slate11 text-xs font-bold tracking-widest">
                  Longitude
                </span>
                <br />
                <span className="text-4xl tabular-nums block text-right">
                  {data[1].toFixed(3)}
                </span>
              </h2>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

const PageHead: React.FC = () => {
  const SEOData = {
    title: "Where's the ISS?",
    description:
      "Born from the human curiosity, the ISS is proof that not even the sky is a limit for us. See where the ISS is right now!",
  };

  return (
    <NextSeo
      title={SEOData.title}
      description={SEOData.description}
      openGraph={{
        type: "website",
        url: `https://iss.igorbedesqui.com`,
        title: SEOData.title,
        description: SEOData.description,
        site_name: "Where's the iss?",
        images: [
          {
            url: `https://iss.igorbedesqui.com/images/og/iss_facebook.jpg`,
            width: 1200,
            height: 630,
            alt: "Globe marking the current location of the International Space Station",
            type: "image/jpeg",
          },
          {
            url: `https://iss.igorbedesqui.com/images/og/iss.jpg`,
            width: 1080,
            height: 540,
            alt: "Globe marking the current location of the International Space Station",
            type: "image/jpeg",
          },
        ],
      }}
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

import Head from "next/head";
import { NextSeo } from "next-seo";
import { Partytown } from "@builder.io/partytown/react";
import { useAtomValue } from "jotai";

import MapWrapper from "../components/MapStuff/MapWrapper";
import { coords } from "lib/store";
