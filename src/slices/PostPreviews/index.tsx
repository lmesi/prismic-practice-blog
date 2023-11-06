import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import Bounded from "@/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="mb-12">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-base font-medium font-body text-slate-600 text-justify mb-4">
      {children}
    </p>
  ),
};

/**
 * Props for `PostPreviews`.
 */
export type PostPreviewsProps = SliceComponentProps<Content.PostPreviewsSlice>;

/**
 * Component for "PostPreviews" Slices.
 */
const PostPreviews = ({ slice }: PostPreviewsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl gap-x-16 gap-y-12 mx-auto">
        {slice.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-auto justify-items-center md:justify-items-start"
          >
            <PrismicNextImage
              field={item.image}
              width={600}
              height={600}
              className="mb-4 hover:drop-shadow-xl"
              imgixParams={{ ar: "2:1", fit: "crop" }}
            />
            <div>
              <PrismicNextLink
                field={item.linktopost}
                className="font-bold leading-tight tracking-tight font-display text-slate-700 text-2xl md:text-3xl hover:underline decoration-solid"
              >
                {item.title}
              </PrismicNextLink>
              <p className="text-base font-medium font-body text-slate-600 text-justify mb-4">
                {item.datepicker}
              </p>
              <PrismicRichText
                field={item.description}
                components={components}
              />
              <div className="flex flex-row gap-3 items-center mt-6">
                <PrismicNextImage
                  field={item.author_image}
                  width={56}
                  height={56}
                  className="rounded-full"
                  imgixParams={{ ar: "1:1", fit: "crop" }}
                />
                <PrismicRichText field={item.author_name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default PostPreviews;
