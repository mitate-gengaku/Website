import { render, cleanup, type RenderResult } from "@testing-library/react";

import type { AnyEntryMap, CollectionEntry } from "astro:content";

import { Blog } from "@/components/Sections/Blog";

vi.mock("@/components/Common/blog-link", () => ({
  BlogLink: ({ ...props }) => (
    <a
      data-testid="blog-link"
      href="https://zenn.dev/mitate_gengaku"
      {...props}
    />
  ),
}));

vi.mock("@/components/Sections/Blog/cards", () => ({
  Cards: ({ ...props }) => <div data-testid="cards" {...props} />,
}));

let mockArticles: CollectionEntry<keyof AnyEntryMap>[];

describe("Blogセクションコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    mockArticles = [];

    rendered = render(<Blog articles={mockArticles} />);
  });

  test("コンポーネントが正常に表示されること", () => {
    expect(rendered.getByTestId("blog")).toBeInTheDocument();
    expect(rendered.getByTestId("title")).toBeInTheDocument();
    expect(rendered.getByTestId("blog-link")).toBeInTheDocument();
    expect(rendered.getByTestId("cards")).toBeInTheDocument();
  });

  test("タイトルはBlogと表示されること", () => {
    expect(rendered.getByText("Blog")).toBeInTheDocument();
  });

  test("BlogLinkにはRead moreというテキストが表示され、hrefを持っていること", () => {
    expect(rendered.getByText("Read more")).toBeInTheDocument();
    expect(rendered.getByTestId("blog-link")).toHaveAttribute(
      "href",
      "https://zenn.dev/mitate_gengaku",
    );
  });
});
