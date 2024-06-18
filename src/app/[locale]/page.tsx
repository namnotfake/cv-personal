"use client";
import LayoutLeft from "@/components/components_use/LayoutLeft";
import LayoutRight from "@/components/components_use/LayoutRight";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/locales/config/client";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  const t = useI18n();
  return (
    <div className="mt-6">
      <h1 className="text-4xl font-medium">FRONTEND DEVELOPER</h1>
      <div className="flex flex-col justify-start md:flex-row  md:justify-between md:items-center">
        <p>
          <span className="text-4xl font-medium">{t("PASSION AND")}</span>{" "}
          <span className="italic underline text-4xl font-semibold">
            {t("EXPERIENCE.")}
          </span>
        </p>
        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full"
            asChild
          >
            <Link
              href={"https://www.facebook.com/nam.notfake/"}
              target="_blank"
            >
              <IconBrandFacebook size={24} stroke={1} />
            </Link>
          </Button>
          <Button variant={"outline"} size={"icon"} className="rounded-full">
            <Link href={"https://s.net.vn/IemP"} target="_blank">
              <IconBrandGoogle size={24} stroke={1} />
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-start mt-6">
        <LayoutLeft />
        <LayoutRight />
      </div>
    </div>
  );
}
