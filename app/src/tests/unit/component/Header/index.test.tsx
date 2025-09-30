import { cleanup, render, type RenderResult } from "@testing-library/react";

import { Header } from "@/components/Header";

vi.mock("@/components/Header/nav", () => ({
  NavMenu: () => <nav data-testid="nav" />,
}));

vi.mock("@/components/Header/title", () => ({
  Title: () => <div data-testid="title" />,
}));

describe("Headerコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<Header />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("header")).toBeInTheDocument();
    expect(rendered.getByTestId("nav")).toBeInTheDocument();
    expect(rendered.getByTestId("title")).toBeInTheDocument();
  });
});
