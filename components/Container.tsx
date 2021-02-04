const Container: React.FC = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <nav className="z-10 absolute flex justify-between items-start w-full px-8 py-8 my-0 md:pt-8 md:px-16 mx-auto">
        <div>
          <h1 className="font-bold text-xl md:text-2xl my-auto tracking-tight text-gray-700"></h1>
        </div>
        <div>
          <ChangeLang
            generalClasses="p-1 sm:p-2 lowercase"
            activeClasses="font-bold text-gray-100"
            inactiveClasses="text-gray-500"
          />
        </div>
      </nav>
      <div className="relative w-full">
        <main className="flex flex-col justify-center">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Container;

import Footer from "./Footer";
import ChangeLang from "./ChangeLang";
