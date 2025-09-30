import { cleanup, render, type RenderResult } from "@testing-library/react";

import { MitateGengakuAscii } from "@/components/Icons/mitate-gengaku";

describe("MitateGengakuAscii コンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<MitateGengakuAscii />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("mitate-gengaku")).toBeInTheDocument();
  });

  test("コンポーネントのタグ名は'div'であること", () => {
    expect(rendered.getByTestId("mitate-gengaku").tagName).toEqual("DIV");
  });
});
