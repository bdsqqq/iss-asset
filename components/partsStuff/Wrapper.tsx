const Wrapper = () => {
  return (
    <div className="flex overflow-x-auto">
      {timeline.map((year, i) => {
        return (
          <article
            key={`part-${i}`}
            className="flex first:ml-8 first:md:ml-0 md:p-4"
          >
            <header
              id={year.yearNumber}
              className="t-writing-mode-vlr font-light text-4xl"
            >
              {year.yearNumber}
            </header>
            {year.months.map((month, j) => {
              return (
                <div key={`month-${i}-${j}`} className="flex mr-2">
                  <p
                    id={year.yearNumber + "_" + month.name}
                    className="t-writing-mode-vlr ml-2 mt-14"
                  >
                    — {month.name}
                  </p>
                  <div className="flex mt-4">
                    {month.parts.map(
                      ({ name, nationality, role, description }, k) => {
                        return (
                          <Part
                            key={`part-${i}-${j}-${k}`}
                            name={name}
                            nationality={nationality}
                            role={role}
                            description={description}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          </article>
        );
      })}
    </div>
  );
};

export default Wrapper;

import Part from "./Part";
import timeline from "./timeline";
