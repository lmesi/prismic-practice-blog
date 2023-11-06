import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import PostPreviewCard from "@/components/PostPreviewCard";
import { getAllBlogPostsOrderdByDate } from "@/utils";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="mb-12">
      {children}
    </Heading>
  ),
};

/**
 * Props for `LatestPosts`.
 */
export type LatestPostsProps = SliceComponentProps<Content.LatestPostsSlice>;

/**
 * Component for "LatestPosts" Slices.
 */
const LatestPosts = async ({
  slice,
}: LatestPostsProps): Promise<JSX.Element> => {
  const blogPostsHero = (await getAllBlogPostsOrderdByDate()).slice(0, 4);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl gap-x-16 gap-y-12 mx-auto">
        {blogPostsHero.map((data) => (
          <PostPreviewCard key={data.heading[0]?.text} data={data} />
        ))}
      </div>
    </Bounded>
  );
};

export default LatestPosts;
