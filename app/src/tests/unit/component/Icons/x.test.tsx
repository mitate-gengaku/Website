import { cleanup, render, type RenderResult } from "@testing-library/react";

import { XIcon } from "@/components/Icons/x";

describe("XIconコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  describe("propsが何もない状態", () => {
    beforeEach(() => {
      rendered = render(<XIcon />);
    });

    test("コンポーネントが正しくレンダリングされること", () => {
      expect(rendered.getByTestId("x")).toBeInTheDocument();
    });

    test("コンポーネントのタグ名は'svg'であること", () => {
      expect(rendered.getByTestId("x").tagName).toEqual("svg");
    });
  });

  describe("propsを渡した状態", () => {
    beforeEach(() => {
      rendered = render(<XIcon fill="#000" className="size-4" />);
    });

    test("classNameが正しく渡されること", () => {
      expect(rendered.getByTestId("x").className).toEqual("size-4");
    });

    test("fill属性を持っていること", () => {
      expect(rendered.getByTestId("x")).toHaveAttribute("fill");
      expect(rendered.getByTestId("x")).toHaveAttribute("fill", "#000");
    });
  });
});
