import { cleanup, render, type RenderResult } from "@testing-library/react";

import { XIcon } from "@/components/Icons/x";

describe("X Iconコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  describe("propsが何もない状態", () => {
    beforeEach(() => {
      rendered = render(<XIcon data-testid="x" />);
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
      rendered = render(
        <XIcon fill="#000" className="size-4" data-testid="x" />,
      );
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
