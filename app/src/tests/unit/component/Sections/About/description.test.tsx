import { cleanup, render, type RenderResult } from "@testing-library/react";

import { Description } from "@/components/Sections/About/description";

describe("Descriptionコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<Description />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("description")).toBeInTheDocument();
  });

  test("コンポーネント内のテキストが正しく表示されること", () => {
    expect(
      rendered.getByText(
        "I am a junior engineer in the computer infrastructure area.",
      ),
    ).toBeInTheDocument();

    expect(
      rendered.getByText(
        "I became interested in programming in my late teens, and I'm currently enjoying around with Linux.",
      ),
    ).toBeInTheDocument();
  });
});
