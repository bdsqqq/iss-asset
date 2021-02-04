interface ChangeLangProps {
  generalClasses: string;
  inactiveClasses?: string;
  activeClasses?: string;
}

const { locales } = i18nConfig;

const ChangeLang: React.FC<ChangeLangProps> = ({
  generalClasses,
  inactiveClasses,
  activeClasses,
}) => {
  const { t, lang } = useTranslation();

  let count = 0;
  return (
    <>
      {locales.map((lng: string) => {
        count++;

        if (lng === lang)
          return (
            <Fragment key={lng}>
              <span
                className={
                  generalClasses.concat(" " + activeClasses) + " select-none"
                }
              >
                {t(`${lng}`)}
              </span>
              {count < locales.length && (
                <span className={generalClasses + " text-gray-500"}>|</span>
              )}
            </Fragment>
          );

        return (
          <Fragment key={lng}>
            <Link href="/" locale={lng}>
              <span
                className={generalClasses.concat(
                  " " + inactiveClasses + " cursor-pointer select-none"
                )}
              >
                {t(`${lng}`)}
              </span>
            </Link>
            {count < locales.length && (
              <span className={generalClasses + " text-gray-500"}>|</span>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default ChangeLang;

import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../i18n.json";
import { Fragment } from "react";
