export default function Home() {
  return (
    <Container>
      <section
        className="relative w-full h-75vh bg-gray-900 text-gray-100"
        id="hero"
      >
        <div className="flex items-center justify-center w-full h-full absolute z-10">
          <h1 className="font-bold uppercase text-2xl md:text-4xl text-center">
            <span className="text-lg md:text-xl">The ISS:</span> <br />
            <br />
            One step closer to <br />{" "}
            <span className="text-7xl md:text-8xl">infinity</span>
          </h1>
        </div>
        <div className="h-full w-full my-0 mx-auto">
          <Image
            priority
            className="p-16-caralho md:p-24-caralho"
            src="/images/iss-view.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
          />
          <div className="absolute h-full w-full bg-gray-800 bg-opacity-60" />
        </div>
      </section>
      <Band dark gridless id="disclaimer">
        <div className="w-full bg-gray-800  p-16 rounded-lg">
          <span className="font-mono leading-snug">
            <B>Staging only:</B>
            <br />
            Probably a lot of the copy and design specific stuff will change,
            this is meant to show the general idea of this asset. <br />
            Thanks for taking the time to look at it :)
          </span>
        </div>
      </Band>
      <Band
        headline={{
          bold: "01",
          thin: "What is it?",
        }}
      >
        <p className="text-2xl leading-7 md:text-3xl md:leading-8">
          Born from the human curiosity,<B> the ISS</B> is the biggest man-made
          object in space, yet it is only the <B> first step</B>.
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
      <Band
        dark
        headline={{
          bold: "02",
          thin: "not your average lego set",
        }}
      >
        <p className="text-2xl leading-7 md:text-3xl md:leading-8">
          The different pieces of the Space Station were built in many locations
          around the globe.
          <br /> <br />
          Each piece, called module, was then launched into space and assembled
          there.
          <br /> <br />
          the whole construction took a bit over a decade before its completion.
        </p>
        <div className="w-full h-84 my-8 bg-gray-800 font-mono leading-snug p-4 rounded-lg">
          <B>Staging only:</B>
          <br />
          accordeon will go here option 1
        </div>
      </Band>
      <Band dark gridless id="accordeon">
        <div className="w-full h-96 bg-gray-800  p-16 rounded-lg">
          <span className="font-mono leading-snug">
            <B>Staging only:</B>
            <br />
            accordeon will go here option 2
          </span>
        </div>
      </Band>
      <Band
        dark
        headline={{
          bold: "03",
          thin: "Wheres the iss?",
          additional: (
            <div className="my-4 mr-8">
              currently it is in
              <br />
              <br />
              <div className="bg-gray-800 font-mono leading-snug p-4 rounded-lg">
                <B>WIP:</B> trying to add the name of the place the iss is
                hovering over. currently strugling to find something that would
                be easy for internationalization and can be quickly updated with
                Lat and Lon
              </div>
            </div>
          ),
        }}
      >
        <MapWrapper />
      </Band>
    </Container>
  );
}

import Container from "../components/Container";
import Band from "../components/Band";
import B from "../components/Bold";
import MapWrapper from "../components/MapStuff/MapWrapper";
import Image from "next/image";
