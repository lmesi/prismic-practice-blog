import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Heading from "./Heading";
import { FC } from "react";
import type { TBlogPostHero } from "@/utils";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
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

type TPostPreviewCardProps = {
  data: TBlogPostHero;
};

const PostPreviewCard: FC<TPostPreviewCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-auto justify-items-center md:justify-items-start">
      <PrismicNextImage
        field={data.image}
        width={600}
        height={600}
        className="mb-4 hover:drop-shadow-xl"
        imgixParams={{ ar: "2:1", fit: "crop" }}
      />
      <div>
        <PrismicNextLink
          field={data.link_to_this_page}
          className="font-bold leading-tight tracking-tight font-display text-slate-700 text-2xl md:text-3xl hover:underline decoration-solid"
        >
          <PrismicRichText field={data.heading} />
        </PrismicNextLink>
        <p className="text-base font-medium font-body text-slate-600 text-justify mb-4">
          {data.date}
        </p>
        <PrismicRichText field={data.description} components={components} />
        <div className="flex flex-row gap-3 items-center mt-6">
          <PrismicNextImage
            field={data.author_image}
            width={56}
            height={56}
            className="rounded-full"
            imgixParams={{ ar: "1:1", fit: "crop" }}
          />
          <PrismicRichText field={data.author_name} />
        </div>
      </div>
    </div>
  );
};

export default PostPreviewCard;
