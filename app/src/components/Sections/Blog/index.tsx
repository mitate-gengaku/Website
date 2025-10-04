import type { AnyEntryMap, CollectionEntry } from "astro:content";

import { BlogLink } from "@/components/Common/blog-link";
import { Section } from "@/components/Common/section";
import { Title } from "@/components/Common/title";
import { Cards } from "@/components/Sections/Blog/cards";

type Props = {
  articles: CollectionEntry<keyof AnyEntryMap>[];
};

export const Blog = ({ articles }: Props) => (
  <Section id="blog" data-testid="blog">
    <div className="mx-auto gap-y-8 max-w-5xl flex flex-col">
      <Title title="Blog" className="text-center lg:text-left" />
      <Cards articles={articles} />
      <BlogLink className="mx-auto">Read more</BlogLink>
    </div>
  </Section>
);
