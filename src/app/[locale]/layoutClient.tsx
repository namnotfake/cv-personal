"use client";
import Footer from "@/components/components_use/Footer";
import Header from "@/components/components_use/Header";
import utilState from "@/lib/stores/utilState.store";
import { I18nProviderClient } from "@/locales/config/client";
import { useEffect } from "react";

const LayoutClient = ({
  params,
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) => {
  const { isMobile, setIsMobile } = utilState();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, [isMobile]);

  // useEffect(() => {
  //   const unblockEvents = () => {
  //     document.removeEventListener("keydown", blockF12);
  //     document.removeEventListener("keydown", blockCtrlU);
  //     document.removeEventListener("contextmenu", blockContextMenu);
  //   };

  //   const blockF12 = (event: any) => {
  //     if (event.key === "F12") {
  //       event.preventDefault();
  //     }
  //   };

  //   const blockCtrlU = (event: any) => {
  //     if (event.ctrlKey && event.key === "u") {
  //       event.preventDefault();
  //     }
  //   };

  //   const blockContextMenu = (event: any) => {
  //     event.preventDefault();
  //   };

  //   unblockEvents();
  //   document.addEventListener("keydown", blockF12);
  //   document.addEventListener("keydown", blockCtrlU);
  //   document.addEventListener("contextmenu", blockContextMenu);

  //   return () => {
  //     unblockEvents();
  //   };
  // }, []);

  return (
    <I18nProviderClient locale={params.locale}>
      <main
        className="flex flex-col justify-center items-center"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <Header />
        <div className="w-11/12 lg:w-2/3 mt-14">{children}</div>
        <Footer />
      </main>
    </I18nProviderClient>
  );
};

export default LayoutClient;
