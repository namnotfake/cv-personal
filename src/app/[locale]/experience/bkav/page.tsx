"use client";

import Back from "@/components/components_use/base/Back";
import { useI18n } from "@/locales/config/client";

const Page = () => {
  const t = useI18n();

  return (
    <div>
      <div className="pb-4">
        <Back title={`BKAV ${t("Joint Stock Company").toLocaleUpperCase()}`} />
      </div>
      <p className="text-2xl font-bold"> 09/2022 - 10/2023</p>
      <div id="vala_bkav" className="py-3">
        <p className="text-xl font-semibold">VALA</p>
        <ul className="list-disc list-inside text-lg">
          <li>
            {t(
              "Re-marketing is an auto inbox extension, simulate automatic user message sending"
            )}{" "}
          </li>
          <li>
            {t("Completion time")}: 1 {t("year")}
          </li>
          <li>
            {t("Team")}: 10 {t("members")}
          </li>
          <li>{t("Position in the team")}: Frontend developer</li>
          <li>
            {t("Technology used")}: ReactJs, ReactNative, Redux, Javascript
          </li>
          <li>{t("Main job")}: </li>
        </ul>
        <div className="pl-6">
          <ul className="list-square list-inside text-lg">
            <li>
              {t(
                "Participate in building and developing the company's internal BKAV VALA social network website and mobile"
              )}
            </li>
            <li>{t("Fix bugs, maintain code")}</li>
          </ul>
        </div>
      </div>
      <div id="vala_bkav" className="py-3">
        <p className="text-xl font-semibold">HOMEVN & VNREVIEW</p>
        <ul className="list-disc list-inside text-lg">
          <li>{t("Website to read news and events")} </li>
          <li>
            {t("Completion time")}: 6 {t("month")}
          </li>
          <li>
            {t("Team")}: 10 {t("members")}
          </li>
          <li>{t("Position in the team")}: Frontend developer</li>
          <li>{t("Technology used")}: ReactJs, Redux, Javascript</li>
          <li>{t("Main job")}: </li>
        </ul>
        <div className="pl-6">
          <ul className="list-square list-inside text-lg">
            <li>{t("Participate in building and developing the website")}</li>
            <li>{t("Fix bugs, maintain code")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
