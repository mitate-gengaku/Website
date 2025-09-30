import { cleanup, render, type RenderResult } from "@testing-library/react";

import { Footer } from "@/components/Footer";

vi.mock("@/components/Footer/small", () => ({
  Small: () => (
    <small data-testid="small">
      <p>small</p>
    </small>
  ),
}));

vi.mock("@/components/Footer/title", () => ({
  Title: () => <div data-testid="title" />,
}));

vi.mock("@/components/Footer/sns", () => ({
  SNS: () => <div data-testid="sns" />,
}));

describe("Footerコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<Footer />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("footer")).toBeInTheDocument();
    expect(rendered.getByTestId("sns")).toBeInTheDocument();
    expect(rendered.getByTestId("title")).toBeInTheDocument();
    expect(rendered.getByTestId("small")).toBeInTheDocument();
  });
});
