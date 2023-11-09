import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SpaceBetween`.
 */
export type SpaceBetweenProps = SliceComponentProps<Content.SpaceBetweenSlice>;

/**
 * Component for "SpaceBetween" Slices.
 */
const SpaceBetween = ({ slice }: SpaceBetweenProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`h-[${slice.primary.thickness}px]`}
    ></section>
  );
};

export default SpaceBetween;
