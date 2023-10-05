import { titillium } from "@/components/screens/home/Home";
import { NextPage } from "next";
import { Titillium_Web } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <main className={"notFound"}>
        <Image
          priority
          src="/404.png"
          alt="Not Found"
          width={450}
          height={433}
        />
        <Link href={"/"} className={titillium.className}>
          <h3>Вернуться домой</h3>
        </Link>
      </main>
    </>
  );
};

export default NotFound;
