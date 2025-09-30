import { cleanup, render, type RenderResult } from "@testing-library/react";

import { Small } from "@/components/Footer/small";

describe("Smallコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<Small />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("small")).toBeInTheDocument();
    expect(rendered.getByTestId("small").tagName).toEqual("P");
    expect(rendered.getByText("© 2025 Mitate Gengaku")).toBeInTheDocument();
  });
});
