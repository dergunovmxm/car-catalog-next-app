import { titillium } from "@/components/screens/home/Home";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <main className={"notFound"}>
      <Image priority src="/500.jpg" alt="Not Found" width={450} height={433} />
      <Link href={"/"} className={titillium.className}>
        Вернуться домой
      </Link>
    </main>
  );
};

export default NotFound;
