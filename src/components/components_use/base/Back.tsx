import { Button } from "@/components/ui/button";
import { IconArrowAutofitLeft, IconArrowBadgeLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const Back = ({ title }: { title: string }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div
      className="flex gap-3 items-center cursor-pointer"
      onClick={handleBack}
    >
      <Button
        variant={"outline"}
        size={"icon"}
        className="w-12 h-12 rounded-full"
      >
        <IconArrowBadgeLeft size={32} stroke={1.5} />
      </Button>
      <p className="text-3xl leading-8 font-bold">{title}</p>
    </div>
  );
};

export default Back;
