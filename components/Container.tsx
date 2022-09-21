const Container: React.FC = ({ children }) => {
  return (
    <Box
      css={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "$slate1",
      }}
    >
      <div className="relative w-full">
        <main className="flex flex-col justify-center">{children}</main>
        {/* <Footer /> */}
      </div>
    </Box>
  );
};

export default Container;

import Box from "@/ui/Box";
