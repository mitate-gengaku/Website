import { cleanup, render, type RenderResult } from "@testing-library/react";

import { MitateGengakuAscii } from "@/components/Icons/mitate-gengaku";

describe("MitateGengakuAscii コンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  describe("モックデータを使用しない", () => {
    beforeEach(() => {
      rendered = render(<MitateGengakuAscii data-testid="mitate-gengaku" />);
    });

    test("コンポーネントが正しくレンダリングされること", () => {
      expect(rendered.getByTestId("mitate-gengaku")).toBeInTheDocument();
    });

    test("コンポーネントのタグ名は'div'であること", () => {
      expect(rendered.getByTestId("mitate-gengaku").tagName).toEqual("DIV");
    });

    test("コンポーネント内の'span'タグはclassNameを持っていること", () => {
      const spans = rendered.container.querySelectorAll("span");

      for (let i = 0; i < spans.length; i++) {
        expect(spans[i].className).toEqual("block h-4 w-2 [zoom:0.2]");
      }
    });
  });
});
