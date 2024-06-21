import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "BKAV",
  };
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-10">{children}</div>;
}
