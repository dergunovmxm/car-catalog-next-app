import React, { FC } from "react";
import { Titillium_Web } from "next/font/google";
import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/header/Header";

export const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const Home: FC = () => {
  return (
    <Layout>
      <h1 className={titillium.className}>Test font header</h1>
    </Layout>
  );
};

export default Home;
