import Image from "next/image";
import { Navbar } from "./navbar";
// import {auth} from "../../../../auth";
import HeaderUserSection from "@/app/_components/header/header-user-section";

export const Header: React.FC = async () => {
  // const test = await auth() ==> if we use this line, all page converted to the dynamic rendering. because with this line
  // we have access to the cookies, make it dynamic rendering and this component used in main layout and convert all page
  // to the dynamic rendering

  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex items-center justify-between">
        <Image
          src={"/images/logo-light.svg"}
          alt="کلاسبن"
          width={100}
          height={36}
        />
        <Navbar />
        <span className="mr-auto">
          <HeaderUserSection/>
        </span>
      </div>
    </header>
  );
};
