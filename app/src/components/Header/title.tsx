import { MitateGengakuAscii } from "@/components/Icons/mitate-gengaku";

export const Title = () => (
  <div
    className="font-semibold text-base lg:text-xl"
    data-testid="header-title"
  >
    <a href="/">
      <MitateGengakuAscii />
    </a>
  </div>
);
