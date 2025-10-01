import { cleanup, render, type RenderResult } from "@testing-library/react";

import { Buttons } from "@/components/Sections/About/buttons";

describe("Buttonsコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<Buttons />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("buttons")).toBeInTheDocument();
  });

  test("aタグが2つ表示されること", () => {
    expect(
      rendered.getByTestId("buttons").querySelectorAll("a").length,
    ).toEqual(2);
  });

  test("aタグ内のテキストが正しく表示されること", () => {
    expect(rendered.getByText("Read Blog")).toBeInTheDocument();
    expect(rendered.getByText("View Projects")).toBeInTheDocument();
  });
});
