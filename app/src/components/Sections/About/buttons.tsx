import { BlogLink } from "@/components/Common/blog-link";
import { Button } from "@/components/ui/button";

export const Buttons = () => (
  <div
    className="flex items-center justify-center lg:justify-start gap-4"
    data-testid="buttons"
  >
    <BlogLink className="px-4">Read Blog</BlogLink>
    <Button
      size={"sm"}
      variant={"outline"}
      className="px-4 cursor-pointer"
      asChild
    >
      <a href="#projects">View Projects</a>
    </Button>
  </div>
);
