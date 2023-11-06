import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { Simplify } from "../../../prismicio-types";

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

/**
 * Props for `AllPosts`.
 */
export type AllPostsProps = SliceComponentProps<Content.AllPostsSlice>;

const BlogPosts = async () => {
  const client = createClient();

  const blogPosts = (await client.getAllByType("blogpost")).map((post) =>
    post.data.slices.find((slice) => slice.slice_type === "hero")
  );

  console.log(JSON.stringify(blogPosts, undefined, 2));

  return <div>Megtörténik</div>;
};

type TBlogPostHero = Simplify<Content.HeroSlicePostHeroPrimary>;

/**
 * Component for "AllPosts" Slices.
 */
const AllPosts = async ({ slice }: AllPostsProps): Promise<JSX.Element> => {
  const client = createClient();

  const blogPostsHero = (await client.getAllByType("blogpost"))
    .map(
      (post) =>
        post.data.slices.find(
          (slice) =>
            slice.variation === "postHero" && slice.slice_type === "hero"
        )?.primary
    )
    .filter((data) => data !== undefined) as TBlogPostHero[];

  blogPostsHero.sort((a, b) => {
    if (a.date && b.date) {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
    }
    return 0;
  });

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-full gap-x-16 gap-y-12 mx-auto">
        {blogPostsHero.map((data) => (
          <div
            key={data.heading[0]?.text}
            className="flex flex-col w-auto justify-items-center md:justify-items-start"
          >
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
              <PrismicRichText
                field={data.description}
                components={components}
              />
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
        ))}
      </div>
    </Bounded>
  );
};

export default AllPosts;
