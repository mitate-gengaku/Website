import { cleanup, render, type RenderResult } from "@testing-library/react";

import { GithubIcon } from "@/components/Icons/github";

describe("GithubIconコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  describe("propsが何もない状態", () => {
    beforeEach(() => {
      rendered = render(<GithubIcon />);
    });

    test("コンポーネントが正しくレンダリングされること", () => {
      expect(rendered.getByTestId("github")).toBeInTheDocument();
    });

    test("コンポーネントのタグ名は'svg'であること", () => {
      expect(rendered.getByTestId("github").tagName).toEqual("svg");
    });
  });

  describe("propsを渡した状態", () => {
    beforeEach(() => {
      rendered = render(<GithubIcon fill="#181717" className="size-4" />);
    });

    test("classNameが正しく渡されること", () => {
      expect(rendered.getByTestId("github").className).toEqual("size-4");
    });

    test("fill属性を持っていること", () => {
      expect(rendered.getByTestId("github")).toHaveAttribute("fill");
      expect(rendered.getByTestId("github")).toHaveAttribute("fill", "#181717");
    });
  });
});
