import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import Bounded from "@/components/Bounded";
import Link from "next/link";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="text-lg font-body text-secondary mb-4">{children}</p>
  ),
  list: ({ children }) => <ul className="p-4">{children}</ul>,
  oList: ({ children }) => <ol className="p-4">{children}</ol>,
  listItem: ({ children }) => (
    <li className="list-disc pl-5 text-lg font-body text-secondary">
      {children}
    </li>
  ),
  oListItem: ({ children }) => (
    <li className="list-decimal pl-5 text-lg font-body text-secondary">
      {children}
    </li>
  ),
  hyperlink: ({ children, node }) => {
    const target = node.data.link_type === "Web" ? node.data.target : "";

    return (
      <>
        {node.data.url && (
          <Link
            href={node.data.url}
            target={target}
            className="hover:underline decoration-solid"
          >
            {children}
          </Link>
        )}
      </>
    );
  },
};
/**
 * Props for `ContinuousText`.
 */
export type ContinuousTextProps =
  SliceComponentProps<Content.ContinuousTextSlice>;

/**
 * Component for "ContinuousText" Slices.
 */
const ContinuousText = ({ slice }: ContinuousTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      variation="post"
    >
      <div className="grid grid-cols-1 justify-items-center">
        <div className="text-justify max-w-7xl">
          <PrismicRichText
            field={slice.primary.text_content}
            components={components}
          />
        </div>
      </div>
    </Bounded>
  );
};

export default ContinuousText;
