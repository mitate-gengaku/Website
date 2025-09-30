import { cleanup, render, type RenderResult } from "@testing-library/react";

import { Title } from "@/components/Header/title";

vi.mock("@/components/Icons/mitate-gengaku", () => ({
  MitateGengakuAscii: () => (
    <span data-testid="mitate-gengaku">Mitate Gengaku</span>
  ),
}));

describe("Title(Header)コンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<Title />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("header-title")).toBeInTheDocument();
    expect(rendered.getByTestId("header-title").tagName).toEqual("DIV");
  });

  test("aタグがコンポーネント内に存在すること", () => {
    expect(rendered.container.querySelector("a")).toBeInTheDocument();
  });

  test("MitateGengakuAsciiコンポーネントが存在すること", () => {
    expect(rendered.getByTestId("mitate-gengaku")).toBeInTheDocument();
  });
});
