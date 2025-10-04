import { cleanup, render, type RenderResult } from "@testing-library/react";

import type React from "react";

import { About } from "@/components/Sections/About";

vi.mock("@/components/Common/description", () => ({
  Description: () => <div data-testid="description" />,
}));

vi.mock("@/components/Common/buttons", () => ({
  Buttons: () => <div data-testid="buttons" />,
}));

vi.mock("@/components/Sections/About/profile-ascii", () => ({
  ProfileAscii: () => <div data-testid="profile-ascii" />,
}));

describe("Aboutコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(<About />);
  });

  test("コンポーネントが正しくレンダリングされること", () => {
    expect(rendered.getByTestId("about")).toBeInTheDocument();
    expect(rendered.getByTestId("title")).toBeInTheDocument();
    expect(rendered.getByTestId("description")).toBeInTheDocument();
    expect(rendered.getByTestId("buttons")).toBeInTheDocument();
    expect(rendered.getByTestId("profile-ascii")).toBeInTheDocument();
  });
});
