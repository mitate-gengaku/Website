import { cleanup, render, type RenderResult } from "@testing-library/react";

import type React from "react";

import { BlogLink } from "@/components/Common/blog-link";

const MockIcon = () => <svg data-testid="mock-zenn" />;

describe("BlogLinkコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(
      <BlogLink>
        <MockIcon />
      </BlogLink>,
    );
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("blog-link")).toBeInTheDocument();
  });

  test("aタグはhrefを持っていること", () => {
    expect(rendered.getByTestId("blog-link")).toHaveAttribute("href");
    expect(rendered.getByTestId("blog-link")).toHaveAttribute(
      "href",
      "https://zenn.dev/mitate_gengaku",
    );
  });
});
