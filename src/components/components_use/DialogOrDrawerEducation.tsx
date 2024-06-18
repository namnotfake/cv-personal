import utilState from "@/lib/stores/utilState.store";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "../ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter } from "../ui/drawer";
import Image from "next/image";
import { useCurrentLocale, useI18n } from "@/locales/config/client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const StudentCard = () => {
  const t = useI18n();
  const currLang = useCurrentLocale();
  return (
    <div className="relative w-full rounded-lg">
      <div className="bg-blue-50 flex items-center rounded-t-lg p-2 gap-4">
        <Image
          src={"https://i.imgur.com/BHyOQRs.png"}
          alt="Logo DL"
          width={56}
          height={56}
          className="w-auto h-auto"
        />
        <div className={cn(currLang === "vi" ? "" : "flex flex-col-reverse")}>
          <p
            className={cn(
              currLang === "vi" ? "font-bold" : "text-sm font-semibold"
            )}
          >
            ĐẠI HỌC ĐIỆN LỰC
          </p>
          <p
            className={cn(
              currLang === "en" ? "font-bold" : "text-sm font-semibold"
            )}
          >
            {t("Electric Power University").toLocaleUpperCase()}
          </p>
        </div>
      </div>
      <div className="flex items-start bg-blue-700 text-white rounded-b-lg p-2">
        <div className="w-1/2">
          <Image
            src={"https://i.imgur.com/XLSBEB9.jpeg"}
            alt="Logo DL"
            width={96}
            height={144}
            className="w-auto h-auto"
          />
          <p className="text-sm">
            <span>{t("Code")}</span> <span>: 18810320715</span>
          </p>
        </div>
        <div className="w-full flex flex-col justify-center">
          <p className="text-center text-xl font-medium pb-2  ">{t("Card")}</p>
          <div className="flex flex-col gap-1">
            <div className="flex text-sm">
              <div className="w-1/4 mr-1">
                <p>{t("Full name").toLocaleUpperCase()}</p>
              </div>
              <p>: {t("Pham Duc Nam").toLocaleUpperCase()}</p>
            </div>
            <div className="flex text-sm">
              <div className="w-1/4 mr-1">
                <p>{t("Birth").toLocaleUpperCase()}</p>
              </div>
              <p>: 01 / 12 / 2000</p>
            </div>
            <div className="flex text-sm">
              <div className="w-1/4 mr-1">
                <p>{t("Class").toLocaleUpperCase()}</p>
              </div>
              <p>: D13QTNAM</p>
            </div>
            <div className="flex text-sm">
              <div className="w-1/4 mr-1">
                <p>{t("Course").toLocaleUpperCase()}</p>
              </div>
              <p>: 2018 - 2023</p>
            </div>
            <div className="flex text-sm">
              <div className="w-1/4 mr-1">
                <p>{t("Majors").toLocaleUpperCase()}</p>
              </div>
              <p> : {t("information technology").toLocaleUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute transform -rotate-45 bottom-4 right-2 border-2 border-rose-700">
        <div className="p-2">
          <p className="font-medium text-rose-700">
            {t("Graduated").toLocaleUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

const DialogEducation = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const t = useI18n();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent disableClose className="border-none ring-0">
        <StudentCard />
        <DialogFooter>
          <DialogClose asChild>
            <Button>{t("Close")}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const DrawerEducation = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const t = useI18n();
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent>
        <StudentCard />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>{t("Close")}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

type Ref = {
  open: () => void;
};

const DialogOrDrawerEducation = forwardRef<Ref, {}>(({}, ref) => {
  const { isMobile } = utilState();

  const [open, setOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        open: () => setOpen(true),
      };
    },
    []
  );

  if (isMobile) {
    return <DrawerEducation isOpen={open} setIsOpen={setOpen} />;
  }
  return <DialogEducation isOpen={open} setIsOpen={setOpen} />;
});

export default DialogOrDrawerEducation;
