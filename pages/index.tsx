export default function Home() {
  const data = useAtomValue(coords);

  return (
    <>
      <PageHead />

      <div className="relative h-screen bg-slate1">
        <div className="relative h-full overflow-hidden">
          <MapWrapper />
        </div>
        <div className="text-slate12 p-4 absolute bottom-4 right-4 left-4 h-min w-min  border border-slate7 rounded-sm transition-all backdrop-blur-xl backdrop-saturate-[180%]">
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
          <div className="flex flex-col gap-2 mt-4">
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
        </div>
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

import { NextSeo } from "next-seo";
import { OpenGraph } from "next-seo/lib/types";

import Container from "../components/Container";
import MapWrapper from "../components/MapStuff/MapWrapper";
import { useAtomValue } from "jotai";
import { coords } from "lib/store";
