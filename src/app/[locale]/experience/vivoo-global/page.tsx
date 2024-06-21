"use client";

import Back from "@/components/components_use/base/Back";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useI18n } from "@/locales/config/client";
import Image from "next/image";

// re:marketing
// https://i.imgur.com/9dPxyvR.jpeg
// https://i.imgur.com/g8WJgUL.jpeg
// https://i.imgur.com/vdfSQ3F.jpeg

// 1 art
// https://i.imgur.com/RDfEddY.jpeg
// https://i.imgur.com/tVnKqIw.png
// https://i.imgur.com/tTQriMD.png

const remarketingPics: { url: string; alt: string }[] = [
  { url: "https://i.imgur.com/9dPxyvR.jpeg", alt: "remarketing" },
  { url: "https://i.imgur.com/g8WJgUL.jpeg", alt: "remarketing" },
  { url: "https://i.imgur.com/vdfSQ3F.jpeg", alt: "remarketing" },
];
const artPics: { url: string; alt: string }[] = [
  { url: "https://i.imgur.com/RDfEddY.jpeg", alt: "1art" },
  { url: "https://i.imgur.com/tVnKqIw.png", alt: "1art" },
  { url: "https://i.imgur.com/tTQriMD.png", alt: "1art" },
];

const Page = () => {
  const t = useI18n();

  return (
    <div>
      <div id="persent">
        <div className="pb-4">
          <Back title="VIVOO GLOBAL" />
        </div>
        <p className="text-2xl font-bold"> 10/2023 - {t("PRESENT")}</p>
        <div id="re_marketing" className="py-3">
          <p className="text-xl font-semibold">RE:MAKETING</p>
          <ul className="list-disc list-inside text-lg">
            <li>
              {t(
                "Re-marketing is an auto inbox extension, simulate automatic user message sending"
              )}{" "}
            </li>
            <li>
              {t("Completion time")}: 3 {t("month")}
            </li>
            <li>
              {t("Team")}: 2 {t("members")}
            </li>
            <li>{t("Position in the team")}: Frontend developer</li>
            <li>{t("Technology used")}: ReactJs, Javascript, Tailwind Css</li>
            <li>
              {t("Main job")}:{" "}
              {t(
                "Build user interface, build interface and handle dashboard operations (used by admin), maintain"
              )}
            </li>
          </ul>
          <Carousel className="w-full max-w-full bg-inherit mt-3">
            <CarouselContent className="w-full h-80 bg-inherit cursor-grab active:cursor-grabbing">
              {remarketingPics.map((e) => (
                <CarouselItem key={e.url}>
                  <div
                    className="w-full h-96 bg-inherit"
                    style={{
                      background: `url(${e.url})`,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#fff",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      objectFit: "fill",
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div id="1art" className="py-3">
          <p className="text-xl font-semibold">1ART</p>
          <ul className="list-disc list-inside text-lg">
            <li>
              {t(
                "1Art is a project to build a website selling paintings with a user-friendly interface. Integrate current payment methods such as paypal, banking,..."
              )}{" "}
            </li>
            <li>
              {t("Completion time")}: 3 {t("month")}
            </li>
            <li>
              {t("Team")}: 3 {t("members")}
            </li>
            <li>{t("Position in the team")}: Fullstack developer (NodeJs)</li>
            <li>
              {t("Technology used (main)")}: Nextjs, TypeScript, Tailwind Css,
              ExpressJs
            </li>
            <li>{t("Main job")}: </li>
          </ul>
          <div className="pl-6">
            <ul className="list-square list-inside text-lg">
              <li>
                Backend:{" "}
                {t(
                  "Build the function of adding, editing, and deleting paintings, handling payment operations, handling painting ordering operations, adding paintings to cart, creating bills, and handling search"
                )}
              </li>
              <li>
                Frontend:{" "}
                {t(
                  "Build user interfaces based on existing designs, handle operations related to user experience, connect and exchange with backend to handle operations"
                )}
              </li>
            </ul>
          </div>
          <Carousel className="w-full max-w-full bg-inherit mt-3">
            <CarouselContent className="w-full h-80 bg-inherit cursor-grab active:cursor-grabbing">
              {artPics.map((e) => (
                <CarouselItem key={e.url}>
                  <div
                    className="w-full h-96 bg-inherit"
                    style={{
                      background: `url(${e.url})`,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#fff",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      objectFit: "fill",
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div id="prev">
        <p className="text-2xl font-bold">05/2021 - 01/2022</p>
        <ul className="list-disc list-inside text-lg">
          <li className="text-lg">
            {t("This is the internship period at the company")}
          </li>
          <li className="text-lg">
            {t("Learn and work with Javascript, HTML/CSS")}
          </li>
          <li>{t("Designing websites using AdobeXD")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
