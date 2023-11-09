import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      internalClassName="flex flex-row flex-wrap gap-4 justify-center"
    >
      {slice.items.map((item) => (
        <PrismicNextImage
          key={item.image.alt}
          field={item.image}
          width={600}
          height={600}
          imgixParams={{ ar: "2:1", fit: "crop" }}
        />
      ))}
    </Bounded>
  );
};

export default Gallery;
