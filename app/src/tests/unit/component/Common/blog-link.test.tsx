import { cleanup, render, type RenderResult } from "@testing-library/react";

import type { Button } from "@/components/ui/button";
import type React from "react";

import { BlogLinkButton } from "@/components/Common/blog-link";

vi.mock("@/components/button", () => ({
  Button: (props: React.ComponentProps<typeof Button>) => (
    <button data-testid="button" {...props} />
  ),
}));

const MockIcon = () => <svg data-testid="mock-zenn" />;

describe("BlogLinkButtonコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(
      <BlogLinkButton>
        <MockIcon />
      </BlogLinkButton>,
    );
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("blog-link-button")).toBeInTheDocument();
  });

  test("aタグはhrefを持っていること", () => {
    expect(rendered.getByTestId("blog-link-button")).toHaveAttribute("href");
    expect(rendered.getByTestId("blog-link-button")).toHaveAttribute(
      "href",
      "https://zenn.dev/mitate_gengaku",
    );
  });
});
