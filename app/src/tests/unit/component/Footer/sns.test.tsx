import { cleanup, render, type RenderResult } from "@testing-library/react";

import type { Button } from "@/components/ui/button";
import type React from "react";

import { SNS } from "@/components/Footer/sns";

vi.mock("@/components/ui/button", () => ({
  Button: (props: React.ComponentProps<typeof Button>) => <button {...props} />,
}));

vi.mock("@/components/Icons/github", () => ({
  GithubIcon: (props: React.ComponentProps<"svg">) => (
    <svg data-testid="github" {...props} />
  ),
}));

vi.mock("@/components/Icons/x", () => ({
  XIcon: (props: React.ComponentProps<"svg">) => (
    <svg data-testid="x" {...props} />
  ),
}));

vi.mock("@/components/Icons/zenn", () => ({
  ZennIcon: (props: React.ComponentProps<"svg">) => (
    <svg data-testid="zenn" {...props} />
  ),
}));

describe("SNSコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<SNS />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("sns")).toBeInTheDocument();
    expect(rendered.getByTestId("sns").tagName).toEqual("DIV");
  });

  test("タイトルが正しくレンダリングされること", () => {
    expect(rendered.getByRole("heading")).toBeInTheDocument();
    expect(rendered.getByRole("heading").textContent).toEqual("Follow");
  });

  test("アイコンが正しく表示されること", () => {
    expect(rendered.getByTestId("github")).toBeInTheDocument();
    expect(rendered.getByTestId("x")).toBeInTheDocument();
    expect(rendered.getByTestId("zenn")).toBeInTheDocument();
  });
});
