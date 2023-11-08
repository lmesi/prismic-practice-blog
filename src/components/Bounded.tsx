import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  internalClassName?: string;
  variation?: "default" | "post";
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  variation = "default",
  className,
  internalClassName,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "px-4 md:px-6 lg:px-8",
        variation === "default" && "py-10 md:py-14 lg:py-16",
        variation === "post" && "py-2 md:py-6 lg:py-10",
        className
      )}
      {...restProps}
    >
      <div
        className={clsx("mx-auto w-full max-w-screen-2xl", internalClassName)}
      >
        {children}
      </div>
    </Comp>
  );
}
