import { cleanup, render, type RenderResult } from "@testing-library/react";

import { Title } from "@/components/Common/title";

describe("Title(Common)コンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<Title title="Hello. I am 【御楯玄嶽】" />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("title")).toBeInTheDocument();
    expect(rendered.getByTestId("title").tagName).toEqual("H2");
  });

  test("タイトルコンポーネントのテキストが正しく表示されること", () => {
    expect(rendered.getByText("Hello. I am 【御楯玄嶽】")).toBeInTheDocument();
  });
});
