import { createClient } from "@/prismicio";
import Bounded from "@/components/Bounded";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <header className="pt-6 px-4 md:pt-8 md:px-6 lg:pt-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
          <Link href="/">Blog.</Link>
          <nav>
            <ul className="flex">
              {settings.data.navigation.map(({ link, label }) => (
                <li key={label}>
                  <PrismicNextLink field={link} className="p-3">
                    {label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

//px-4 py-10 md:py-14 md:px-6 lg:py-16
