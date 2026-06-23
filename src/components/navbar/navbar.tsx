import { FormEvent } from "react";
import Link from "next/link";
import { atom, useAtom } from "jotai";
import { Input, InputGroup } from "@heroui/react";

import { ThemeSwitcher } from "@/components";
import { AppLogo } from "@/icons/app-logo";
import { SearchIcon } from "@/icons/search-icon";
import { useRouter } from "next/router";

export const searchAtom = atom("");

export const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useAtom(searchAtom);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        q: search
      }
    });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-default bg-surface/80 backdrop-blur">
      <div className="container mx-auto max-w-5xl px-6 h-16 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="flex gap-4 items-center justify-center shrink-0"
        >
          <AppLogo className="h-10 w-fit" />
          <p className="font-bold text-inherit text-xl">RMDB</p>
        </Link>
        <form onSubmit={handleSearch} className="flex-1 flex justify-center">
          <InputGroup className="max-w-full sm:max-w-[16rem] h-full font-normal text-muted bg-default/20 dark:bg-default/20 rounded-lg">
            <InputGroup.Prefix>
              <SearchIcon size={18} />
            </InputGroup.Prefix>
            <Input
              className="text-sm h-full"
              placeholder="Search movies"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </form>
        <div className="flex items-center justify-end">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};
