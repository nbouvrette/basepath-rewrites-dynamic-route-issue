import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

const Issue: NextPage = () => {
  return <div>Works!</div>;
};

export default Issue;

type MultilingualStaticPath = {
  /** Key/values object representing parameters. */
  params: ParsedUrlQuery;
  /** The locale of the path. */
  locale: string;
};

/**
 * Populate the different city names as route parameter by locale.
 */
export const getStaticPaths: GetStaticPaths = async (context) => {
  const cities: {
    [locale: string]: string[];
  } = {
    "en-US": ["london", "barcelona", "milano"],
    "fr-FR": ["londres", "barcelone", "milan"],
  };
  const locales = context.locales as string[];
  const paths: MultilingualStaticPath[] = [];

  locales.forEach((locale) => {
    cities[locale].forEach((city) => {
      paths.push({
        params: {
          city,
        },
        locale,
      });
    });
  });
  console.dir(paths);
  return {
    paths,
    fallback: false,
  };
};

/**
 * `getStaticProps` is required for `getStaticPaths` to work.
 *
 * @returns Empty properties, since we are only using this for the static paths.
 */
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
