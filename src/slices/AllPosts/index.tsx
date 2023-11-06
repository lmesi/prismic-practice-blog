import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getAllBlogPostsOrderdByDate } from "@/utils";

import PostPreviewCard from "@/components/PostPreviewCard";
import Bounded from "@/components/Bounded";
/**
 * Props for `AllPosts`.
 */
export type AllPostsProps = SliceComponentProps<Content.AllPostsSlice>;

/**
 * Component for "AllPosts" Slices.
 */
const AllPosts = async ({ slice }: AllPostsProps): Promise<JSX.Element> => {
  const blogPostsHero = await getAllBlogPostsOrderdByDate();

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-full gap-x-16 gap-y-12 mx-auto">
        {blogPostsHero.map((data) => (
          <PostPreviewCard key={data.heading[0]?.text} data={data} />
        ))}
      </div>
    </Bounded>
  );
};

export default AllPosts;
