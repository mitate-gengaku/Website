import { cleanup, render, type RenderResult } from "@testing-library/react";

import { ProfileAscii } from "@/components/Sections/About/profile-ascii";

describe("ProfileAscii コンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<ProfileAscii />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("profile-ascii")).toBeInTheDocument();
  });

  test("コンポーネントのタグ名は'div'であること", () => {
    expect(rendered.getByTestId("profile-ascii").tagName).toEqual("DIV");
  });
});
