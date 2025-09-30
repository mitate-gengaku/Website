import { cleanup, render, type RenderResult } from "@testing-library/react";

import { Title } from "@/components/Footer/title";

vi.mock("@/components/Icons/mitate-gengaku", () => ({
  MitateGengakuAscii: () => (
    <span data-testid="mitate-gengaku">Mitate Gengaku</span>
  ),
}));

describe("Title(Footer)コンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<Title />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("footer-title")).toBeInTheDocument();
    expect(rendered.getByTestId("footer-title").tagName).toEqual("H3");
  });

  test("MitateGengakuAsciiコンポーネントが存在すること", () => {
    expect(rendered.getByTestId("mitate-gengaku")).toBeInTheDocument();
  });
});
