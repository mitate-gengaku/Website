import { cleanup, render, type RenderResult } from "@testing-library/react";

import { NavMenu } from "@/components/Header/nav";

describe("NavMenuコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<NavMenu />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("nav")).toBeInTheDocument();
    expect(rendered.getByTestId("nav").tagName).toEqual("NAV");
  });

  test("Navメニューにはaタグが3つ含まれること", () => {
    const aTags = rendered.getByTestId("nav").querySelectorAll("a");

    expect(aTags.length).toEqual(3);
  });

  test("NavメニューにはAbout, Projects, Blogのテキストが表示される", () => {
    const assertTexts = ["About", "Projects", "Blog"];
    const aTags = rendered.getByTestId("nav").querySelectorAll("a");

    aTags.forEach((tag, i) => {
      expect(tag).toBeInTheDocument();
      expect(tag.textContent).toEqual(assertTexts[i]);
      expect(tag).toHaveAttribute("href", `#${assertTexts[i].toLowerCase()}`);
    });
  });
});
