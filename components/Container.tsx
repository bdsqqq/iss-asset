const Container: React.FC = ({ children }) => {
  const childrenArray: any = Children.toArray(children);
  const dark: boolean | undefined =
    childrenArray[childrenArray.length - 1].props.dark;

  return (
    <div className="relative min-h-screen bg-slate1">
      <nav className="z-50 absolute flex justify-end items-start w-full px-4 py-4 my-0 md:pt-8 md:px-16 mx-auto">
        <div>
          <ChangeLang
            generalClasses="p-1 sm:p-2 text-slate12 lowercase"
            activeClasses="font-bold"
            inactiveClasses="text-slate11 hover:text-slate12 focus:text-slate12"
          />
        </div>
      </nav>
      <div className="relative w-full">
        <main className="flex flex-col justify-center">{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Container;

import { Children } from "react";

import Footer from "./Footer";
import ChangeLang from "./ChangeLang";
