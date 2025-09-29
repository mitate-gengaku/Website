import { cleanup, render, type RenderResult } from "@testing-library/react";

import { ZennIcon } from "@/components/Icons/zenn";

describe("ZennIconコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  describe("propsが何もない状態", () => {
    beforeEach(() => {
      rendered = render(<ZennIcon data-testid="zenn" />);
    });

    test("コンポーネントが正しくレンダリングされること", () => {
      expect(rendered.getByTestId("zenn")).toBeInTheDocument();
    });

    test("コンポーネントのタグ名は'svg'であること", () => {
      expect(rendered.getByTestId("zenn").tagName).toEqual("svg");
    });
  });

  describe("propsを渡した状態", () => {
    beforeEach(() => {
      rendered = render(
        <ZennIcon fill="#3EA8FF" className="size-4" data-testid="zenn" />,
      );
    });

    test("classNameが正しく渡されること", () => {
      expect(rendered.getByTestId("zenn").className).toEqual("size-4");
    });

    test("fill属性を持っていること", () => {
      expect(rendered.getByTestId("zenn")).toHaveAttribute("fill");
      expect(rendered.getByTestId("zenn")).toHaveAttribute("fill", "#3EA8FF");
    });
  });
});
