import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LineDivider`.
 */
export type LineDividerProps = SliceComponentProps<Content.LineDividerSlice>;

/**
 * Component for "LineDivider" Slices.
 */
const LineDivider = ({ slice }: LineDividerProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      variation="post"
    >
      <hr
        className={`h-[${slice.primary.line_thickness}px] m-8 rounded border-slate-300`}
      />
    </Bounded>
  );
};

export default LineDivider;
