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
      <Band
        headline={{
          bold: "01",
          thin: "What is it?",
        }}
      >
        <p className="text-2xl leading-7 md:text-3xl md:leading-8">
          Born from the human curiosity, the ISS is the biggest man-made object
          in space, yet it is only the <B> first step</B>.
          <br /> <br />
          It is our first in-orbit laboratory.
          <br /> <br />
          It is a permanent observatory.
          <br /> <br />
          It is the culmination of the work of hundreds of thousands of humans
          throughout history.
          <br /> <br />
          It is proof that not even the sky is a limit for us.
          <br /> <br />
          It is one step in our long and incredible journey into the infinity
          and beyond.
        </p>
      </Band>
      <Band
        dark
        headline={{
          bold: "02",
          thin: "not your average lego set",
        }}
        cta={{ target: "pieces", text: "see how it was built" }}
      >
        <p className="text-2xl leading-7 md:text-3xl md:leading-8">
          The different pieces of the Space Station were built in many locations
          around the globe. Each piece, called module, was then launched into
          space and assembled there. the whole construction took a bit over a
          decade before its completion.
        </p>
      </Band>
      <Band
        headline={{
          bold: "03",
          thin: "Wheres the iss?",
        }}
      ></Band>
    </Container>
  );
}

import Container from "../components/Container";
import Band from "../components/Band";
import B from "../components/Bold";
import Image from "next/image";
