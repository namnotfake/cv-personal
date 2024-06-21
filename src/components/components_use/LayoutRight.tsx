"use client";
import { useI18n } from "@/locales/config/client";
import { Button } from "../ui/button";
import Masonry from "./base/masonry/Masonry";
import utilState from "@/lib/stores/utilState.store";
import { useRouter } from "next/navigation";
import DialogOrDrawerEducation from "./DialogOrDrawerEducation";
import { useRef } from "react";

const LineBase = ({ text }: { text: string }) => {
  return (
    <>
      <div className="flex justify-end pb-1">
        <p className="text-2xl font-medium">{text}</p>
      </div>
      <div className="w-full h-[1.5px] bg-black mb-1" />
      <div className="w-full h-1 bg-black" />
    </>
  );
};

const Experience = () => {
  const t = useI18n();
  const router = useRouter();

  return (
    <div className="w-full">
      <LineBase text={t("EXPERIENCE")} />
      <div
        className="py-4 border-b-[1px] border-b-slate-300 cursor-pointer hover:bg-slate-100"
        onClick={() => router.push("/experience/vivoo-global")}
      >
        <div className="flex justify-between items-start">
          <p className="font-semibold">VivooGlobal</p>
          <div className="flex flex-col justify-end items-end">
            <p className="font-semibold">05/2021 - 01/2022</p>
            <p className="font-semibold"> 10/2023 - {t("PRESENT")}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <p className="text-sm font-semibold">FRONTEND DEVELOPER</p>
        </div>
        <div>
          <p className="text-justify py-2">
            {t(
              "Create and edit outsource projects as required, and research customer experience with products. I also constantly learn and apply new technologies to improve the quality of work."
            )}
          </p>
        </div>
      </div>
      <div
        className="py-4 cursor-pointer hover:bg-slate-100"
        onClick={() => router.push("/experience/bkav")}
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold">BKAV</p>
          <p className="font-semibold">01/2022 - 10/2023</p>
        </div>
        <div className="flex justify-end">
          <p className="text-sm font-semibold">FRONTEND DEVELOPER</p>
        </div>
        <div>
          <p className="text-justify py-2">
            {t(
              "Creating projects for product. Develop individual modules, integrate and test to ensure quality and performance."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const Education = ({ onClick }: { onClick: any }) => {
  const t = useI18n();
  return (
    <div className="w-full" onClick={onClick}>
      <LineBase text={t("EDUCATION")} />
      <div className="pt-4 hover:bg-slate-100 cursor-pointer">
        <div className="flex justify-between items-center">
          <p className="font-medium">{t("Electric Power University")}</p>
          <p className="font-medium">2018-2023</p>
        </div>
        <p className="py-3">
          <span className="font-medium">{t("Major:")}</span>{" "}
          <span>{t("Network security management")}</span>
        </p>
        <p className="py-3">
          <span className="font-medium">GPA: </span> <span>2.96/4.00</span>
        </p>
      </div>
    </div>
  );
};

const Skills = () => {
  const t = useI18n();
  return (
    <div className="w-full">
      <LineBase text={t("SKILLS")} />
      <div className="mt-4">
        <ul className="list-disc list-inside">
          <li>{t("Strong proficiency in HTML, JavaScript/TypeScript.")}</li>
          <li>
            {t(
              "Demonstrated experience with React.js, ReactNative, Next.js frameworks."
            )}
          </li>
          <li>
            {t(
              "Have good knowledge of layout techniques and framework Material UI, Shadcn UI, Ant design, TailwindCss..."
            )}
          </li>
          <li>{t("Experienced in handling responsive browsers.")}</li>
          <li>
            {t("Some other technologies may be used")} Zustand, TanstakQuery,
            ExpressJS,...
          </li>
          <li>
            {t("Website interface construction, read and search documents.")}
          </li>
          <li>{t("English reading and writing ability is at a good level")}</li>
        </ul>
      </div>
    </div>
  );
};

const Hobby = () => {
  const t = useI18n();
  return (
    <div className="w-full">
      <LineBase text={t("HOBBY")} />
      <div className="pt-4">
        <p className="text-justify text-sm leading-6">
          {t(
            "I am a person who likes challenges and undertakes the most advanced projects for learning and commitment."
          )}
        </p>
        <div className="pt-4 flex flex-wrap items-center gap-2">
          <Button
            variant={"outline"}
            className="h-6 font-medium rounded-full cursor-default hover:bg-inherit"
          >
            {t("FOOTBALL")}
          </Button>
          <Button
            variant={"outline"}
            className="h-6 font-medium rounded-full cursor-default hover:bg-inherit"
          >
            {t("RAP MUSIC")}
          </Button>
          <Button
            variant={"outline"}
            className="h-6 font-medium rounded-full cursor-default hover:bg-inherit"
          >
            {t("DEVELOPMENT")}
          </Button>
          <Button
            variant={"outline"}
            className="h-6 font-medium rounded-full cursor-default hover:bg-inherit"
          >
            {t("TECHNOLOGY")}
          </Button>
          <Button variant={"outline"} className="h-6 font-medium">
            {t("INVESTMENTS")}
          </Button>
          <Button variant={"outline"} className="h-6 font-medium">
            {t("PLAY GAME")}
          </Button>
        </div>
      </div>
    </div>
  );
};

const LayoutRight = () => {
  const t = useI18n();
  const { isMobile } = utilState();

  const showStudentCartRef = useRef<any>(null);

  const handleShowStudentCart = () => {
    showStudentCartRef.current?.open();
  };

  return (
    <>
      <DialogOrDrawerEducation ref={showStudentCartRef} />
      <div className="w-full md:w-2/3 pt-10 md:pt-0 md:pl-20">
        <Experience />
        {isMobile ? (
          <>
            <Education onClick={handleShowStudentCart} />
            <Skills />
            <Hobby />
          </>
        ) : (
          <Masonry columnsCount={2} gutter="24px">
            <Education onClick={handleShowStudentCart} />
            <Hobby />
            <Skills />
          </Masonry>
        )}
      </div>
    </>
  );
};

export default LayoutRight;
