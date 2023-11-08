import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import Heading from "@/components/Heading";
import clsx from "clsx";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="text-center">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-xl text-lg font-body text-secondary text-justify">
      {children}
    </p>
  ),
};
/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  const isDefault =
    slice.variation === "default" || slice.variation === "imageRight";
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      variation={isDefault ? "default" : "post"}
      internalClassName={
        isDefault ? "" : "grid grid-cols-1 justify-items-center "
      }
    >
      <div className={isDefault ? "" : "max-w-7xl"}>
        <div
          className={clsx(
            "grid gap-8 md:grid-cols-2",
            isDefault
              ? "place-items-center"
              : "place-items-center md:justify-between md:items-center"
          )}
        >
          <PrismicNextImage
            field={slice.primary.image}
            className={clsx(
              "rounded-lg max-w-xs sm:max-w-sm lg:max-w-lg",
              (slice.variation === "imageRight" ||
                slice.variation === "imageRightPost") &&
                "md:order-2"
            )}
          />
          <div
            className={clsx("grid gap-4 ", !isDefault && "place-items-center")}
          >
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
            <PrismicRichText
              field={slice.primary.description}
              components={components}
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
