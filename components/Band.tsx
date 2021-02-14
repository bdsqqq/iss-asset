interface BandPropsBasic {
  dark?: boolean;
  padless?: boolean;
  cta?:
    | {
        external?: boolean;
        target: string;
        text: string;
        child?: never;
      }
    | {
        external?: boolean;
        target: string;
        child: React.ReactNode;
        text?: never;
      };
}

interface BandWithGrid extends BandPropsBasic {
  headline: {
    bold: string;
    thin: string;
    additional?: React.ReactNode;
  };
  gridless?: never;
  id?: never;
}

interface BandGridless extends BandPropsBasic {
  headline?: never;
  gridless: true;
  id: string;
}

type BandProps = BandWithGrid | BandGridless;

const Band: React.FC<BandProps> = ({
  dark,
  padless,
  gridless,
  id,
  headline,
  cta,
  children,
}) => {
  let bandId: string = "";
  id && (bandId = id);
  headline && (bandId = headline.thin);

  cta && (cta.target = cta.target.replace(/\s+/g, "-").toLowerCase());

  return (
    <>
      <section
        id={bandId.replace(/\s+/g, "-").toLowerCase()}
        className={`relative w-full ${!padless && "py-16"} 
        ${dark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
      >
        <div
          className={`max-w-6xl mx-auto ${!padless && "px-8 md:px-16"} 
            ${!gridless && "md:grid grid-cols-4"}
        `}
        >
          {!gridless ? (
            <>
              <div className="mb-12 md:col-span-1">
                <h2>
                  <span className="font-bold">{headline?.bold}</span>
                  <br />
                  <div className="font-extralight max-w-32">
                    {headline?.thin}
                  </div>
                </h2>
                <div>{headline?.additional}</div>
              </div>
              <div className="md:col-span-3">{children}</div>
            </>
          ) : (
            <>{children}</>
          )}
        </div>
        {cta && (
          <div
            className={`flex justify-end w-full text-sm md:text-lg text-right mt-6 pr-8 md:pr-16 text-opacity-70 hover:text-opacity-90 focus-within:text-opacity-90 transition-all ${
              dark ? " text-gray-100" : " text-gray-500"
            }`}
          >
            {cta.external ? (
              <ExternalLink href={cta.target}>
                {cta.text ? "— " + cta.text : cta.child}
              </ExternalLink>
            ) : (
              <NextLink href={cta.target}>
                {cta.text ? "— " + cta.text : cta.child}
              </NextLink>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Band;

import ExternalLink from "./ExternalLink";
import NextLink from "next/link";
