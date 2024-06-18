"use client";
import { useI18n } from "@/locales/config/client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "../ui/button";
import DialogOrDrawerEducation from "./DialogOrDrawerEducation";

const Text = ({ text }: { text: string }) => {
  return <p className="text-base font-medium leading-3">{text}</p>;
};

const LayoutLeft = () => {
  const t = useI18n();

  const showStudentCartRef = useRef<any>(null);

  const handleShowStudentCart = () => {
    showStudentCartRef.current?.open();
  };

  return (
    <>
      <DialogOrDrawerEducation ref={showStudentCartRef} />
      <div className="w-full md:w-1/3">
        <div className="w-full flex justify-center">
          <div className="w-full md:w-48 h-48 rounded-lg md:rounded-full relative overflow-hidden">
            <Image
              src={"https://i.imgur.com/sokxluE.jpeg"}
              alt="Picture of the author"
              priority
              fill
              sizes="(max-width: 640px) 100vw, 150px"
              className="absolute inset-0 object-cover"
            />
          </div>
        </div>
        <p className="text-2xl font-medium py-4">{t("Pham Duc Nam")}</p>
        <p className="text-justify text-slate-600 py-3 border-b-[2px] border-b-black">
          {t(
            "I'm a passionate and experienced Front-End Developer with a keen eye for design and usability. I specialize in creating responsive and interactive web applications using the latest technologies. My goal is to deliver exceptional user experiences"
          )}
        </p>
        <div className="border-b-[2px] border-b-black">
          <div className="py-3 flex justify-between items-center">
            <Text text={t("PROFESSION")} />
            <Text text="FRONTEND DEVELOPER" />
          </div>
        </div>
        <div className="border-b-[2px] border-b-black">
          <div className="py-3 flex justify-between items-center">
            <Text text={t("DATE OF BIRTH")} />
            <Text text={t("01 DECEMBER 2000")} />
          </div>
        </div>
        <div className="border-b-[2px] border-b-black">
          <div
            className="py-3 flex justify-between items-center cursor-pointer hover:bg-slate-200"
            onClick={handleShowStudentCart}
          >
            <Text text={t("EDUCATION")} />
            <Text text={t("HIGHER EDUCATION")} />
          </div>
        </div>
        <Button
          variant={"outline"}
          className="w-full rounded-none flex justify-center border-2 border-black mt-4"
        >
          <Link
            href={"https://www.messenger.com/t/100040664353145"}
            target="_blank"
          >
            {t("SEND MESSAGE")}
          </Link>
        </Button>
      </div>
    </>
  );
};

export default LayoutLeft;
