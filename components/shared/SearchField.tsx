"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

export const SearchField = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log("query:", query);
      if (query) {
        console.log("In if block", query);
        const newUrl = formUrlQuery({
          searchParams: searchParams.toString(),
          key: "query",
          value: query,
        });
        console.log("newUrl:", newUrl);

        router.push(newUrl, { scroll: false });
      } else {
        console.log("In else block");
        const newUrl = removeKeysFromQuery({
          searchParams: searchParams.toString(),
          keysToRemove: ["query"],
        });
        console.log("newUrl: else block", newUrl);

        router.push(newUrl, { scroll: false });
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [router, searchParams, query]);

  return (
    <div className="search">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
      />

      <Input
        className="search-field"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
