import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `SpaceBetween`.
 */
export type SpaceBetweenProps = SliceComponentProps<Content.SpaceBetweenSlice>;

/**
 * Component for "SpaceBetween" Slices.
 */
const SpaceBetween = ({ slice }: SpaceBetweenProps): JSX.Element => {
  const thickness = `h-[${slice.primary.thickness}px]`;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{ height: `${slice.primary.thickness}px` }}
    ></section>
  );
};

export default SpaceBetween;
