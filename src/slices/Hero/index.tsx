import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p
      className={`text-2xl font-normal leading-10 font-body \
      text-secondary max-w-2xl text-center`}
    >
      {children}
    </p>
  ),
};

type Context = {
  createdAt: string;
  updatedAt: string;
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice, Context>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice, context }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && (
        <div className="grid grid-cols-1 place-items-center">
          <div className="flex flex-col md:flex-row justify-between w-full mb-4 md:mb-16 items-center">
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
            <PrismicRichText
              field={slice.primary.description}
              components={components}
            />
          </div>
          <PrismicNextImage
            field={slice.primary.image}
            className="shadow-2xl dark:shadow-yellow-100/30 max-w-xs sm:max-w-lg  md:max-w-3xl lg:max-w-5xl"
          />
        </div>
      )}
      {slice.variation === "postHero" && (
        <div className="grid grid-cols-1 place-items-center text-center">
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <div className="flex flex-col sm:flex-row justify-between w-full mb-16 items-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <PrismicNextImage
                field={slice.primary.author_image}
                width={72}
                className="rounded-full"
                imgixParams={{ ar: "1:1", fit: "crop" }}
              />
              <PrismicRichText
                field={slice.primary.author_name}
                components={components}
              />
            </div>
            <p
              className={`text-2xl font-normal leading-10 font-body \
              text-secondary max-w-2xl`}
            >
              {new Intl.DateTimeFormat("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }).format(new Date(context.createdAt))}
            </p>
          </div>
          <PrismicNextImage
            field={slice.primary.image}
            className="shadow-2xl dark:shadow-yellow-100/30 max-w-xs sm:max-w-lg  md:max-w-3xl lg:max-w-5xl"
          />
        </div>
      )}
    </Bounded>
  );
};

export default Hero;
