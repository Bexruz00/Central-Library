"use client";
import React, { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { usePathname, useRouter } from "@/i18n/navigation";
import { getCookie } from "cookies-next/client";

const LangConfig = () => {
  const [lang, setLang] = useState<"uz" | "ru" | "en" | null>(null); 
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const locale = getCookie("NEXT_LOCALE") || "ru";
    if (locale === "uz" || locale === "ru" || locale === "en") {
      setLang(locale);
    }
  }, []);

  function changeLang(value: "uz" | "ru" | "en") {
    setLang(value);
    router.push(pathname, { locale: value });
  }

  if (!lang) return null; 

  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <div className="flex items-center hover:cursor-pointer rounded-full !px-[13px] !py-[10px] bg-white">
          <span className="text-[16px] font-medium text-[#17181c] uppercase"> {lang} </span>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-[46px] !p-2 uppercase cursor-pointer bg-white text-[#17181c] text-center rounded-md overflow-hidden">
          <div onClick={() => changeLang("ru")} className="text-[16px] !p-1 font-medium hover:bg-[#d7bc70] hover:text-white rounded-md">ru</div>
          <div onClick={() => changeLang("en")} className="text-[16px] !p-1 font-medium hover:bg-[#d7bc70] hover:text-white rounded-md" >en</div>
          <div onClick={() => changeLang("uz")} className="text-[16px] !p-1 font-medium hover:bg-[#d7bc70] hover:text-white rounded-md" > uz</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LangConfig;