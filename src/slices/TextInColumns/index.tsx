import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";
import Link from "next/link";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="text-lg font-body text-secondary mb-4 text-justify">
      {children}
    </p>
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
 * Props for `TextInColumns`.
 */
export type TextInColumnsProps =
  SliceComponentProps<Content.TextInColumnsSlice>;

/**
 * Component for "TextInColumns" Slices.
 */
const TextInColumns = ({ slice }: TextInColumnsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      internalClassName="flex justify-center"
      variation="post"
    >
      <div
        className={clsx(
          "grid grid-cols-1 max-w-7xl",
          slice.variation === "default"
            ? "md:grid-cols-2 md:gap-16"
            : "md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-10"
        )}
      >
        <div>
          <PrismicRichText
            field={slice.primary.column1}
            components={components}
          />
        </div>
        <div>
          <PrismicRichText
            field={slice.primary.column2}
            components={components}
          />
        </div>
        {slice.variation === "3Colums" && (
          <div>
            <PrismicRichText
              field={slice.primary.column3}
              components={components}
            />
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default TextInColumns;
