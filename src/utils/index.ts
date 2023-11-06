import { createClient } from "@/prismicio";
import { HeroSlicePostHeroPrimary, Simplify } from "../../prismicio-types";

export type TBlogPostHero = Simplify<HeroSlicePostHeroPrimary>;

const getAllBlogPostsOrderdByDate = async () => {
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

  return blogPostsHero;
};

export { getAllBlogPostsOrderdByDate };
