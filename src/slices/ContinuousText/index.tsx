import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import Bounded from "@/components/Bounded";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="text-base font-medium font-body text-slate-600 mb-4">
      {children}
    </p>
  ),
  list: ({ children }) => <ul className="p-4">{children}</ul>,
  oList: ({ children }) => <ol className="p-4">{children}</ol>,
  listItem: ({ children }) => (
    <li className="list-disc pl-5 text-base font-medium font-body text-slate-600">
      {children}
    </li>
  ),
  oListItem: ({ children }) => (
    <li className="list-decimal pl-5 text-base font-medium font-body text-slate-600">
      {children}
    </li>
  ),
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
    >
      <div className="grid grid-cols-1 w-full justify-items-center">
        <div className="max-w-3xl text-justify">
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
