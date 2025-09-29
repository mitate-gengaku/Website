import { cleanup, render, type RenderResult } from "@testing-library/react";

import { Section } from "@/components/Common/header-title";
import { Title } from "@/components/Header/title";

describe("Title(Header)コンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<Title data-testid="header-title" />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("header-title")).toBeInTheDocument();
  });

  test("デフォルトのclassNameが適用されること", () => {
    expect(rendered.getByTestId("header-title").className).toEqual(
      "px-4 py-24 lg:px-8",
    );
  });
});
