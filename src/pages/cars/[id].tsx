import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage = () => {
  const { push, replace } = useRouter();

  return (
    <div>
      CarPage
      <button onClick={() => push("/")}>go Home</button>
      <button onClick={() => replace("/")}>go Home</button>
    </div>
  );
};

export default CarPage;
