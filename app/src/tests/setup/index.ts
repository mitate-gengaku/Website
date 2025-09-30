import "@testing-library/jest-dom/vitest";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

vi.mock("@/utils/cn", () => ({
  cn: (...inputs: ClassValue[]) => twMerge(clsx(inputs)),
}));
