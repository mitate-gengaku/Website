import type React from "react";

import { buttonVariants, Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

type Props = React.ComponentProps<"a"> & {
  size?: React.ComponentProps<typeof Button>["size"];
};

export const BlogLink = ({ className, children, size = "sm", ...props }: Props) => (
  <a
    className={cn(
      buttonVariants({ size: size }),
      "border border-neutral-300 bg-[#3EA8FF] hover:bg-[#3EA8FF]/85",
      className,
    )}
    data-testid="blog-link"
    href="https://zenn.dev/mitate_gengaku"
    {...props}
  >
    {children}
  </a>
);
