import { cleanup, render, type RenderResult } from "@testing-library/react";

import { Section } from "@/components/Common/section";

describe("Sectionコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  describe("propsが何もない状態", () => {
    beforeEach(() => {
      rendered = render(<Section data-testid="section" />);
    });

    test("コンポーネントが正しくレンダリングされること", () => {
      expect(rendered.getByTestId("section")).toBeInTheDocument();
    });

    test("デフォルトのclassNameが適用されること", () => {
      expect(rendered.getByTestId("section").className).toEqual(
        "px-4 py-24 lg:px-8",
      );
    });
  });

  describe("classNameを渡す", () => {
    beforeEach(() => {
      rendered = render(
        <Section data-testid="section" className="bg-red-500" />,
      );
    });

    test("デフォルトのclassNameとpropsのclassNameが正しく結合されること", () => {
      expect(rendered.getByTestId("section").className).toEqual(
        "px-4 py-24 lg:px-8 bg-red-500",
      );
    });
  });

  describe("classNameを渡す", () => {
    beforeEach(() => {
      rendered = render(
        <Section data-testid="section" className="bg-red-500">
          <h1 data-testid="heading-1">Hello World</h1>
        </Section>,
      );
    });

    test("子要素が正しく表示されること", () => {
      expect(rendered.getByTestId("section").className).toEqual(
        "px-4 py-24 lg:px-8 bg-red-500",
      );
      expect(rendered.getByTestId("heading-1")).toBeInTheDocument();
      expect(rendered.getByTestId("heading-1")).toHaveTextContent(
        "Hello World",
      );
    });
  });
});
