const Container: React.FC = ({ children }) => {
  return (
    <Box
      css={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "$slate1",
      }}
    >
      <Nav>
        <Box>
          <ChangeLang />
        </Box>
      </Nav>
      <div className="relative w-full">
        <main className="flex flex-col justify-center">{children}</main>
        {/* <Footer /> */}
      </div>
    </Box>
  );
};

const Nav = styled("nav", {
  position: "absolute",
  zIndex: "1",
  right: "1rem",
  top: "1rem",
  padding: "0 0.5rem",

  backgroundColor: "$slate1",

  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "$slate7",
  borderRadius: "4px",

  "@supports(backdrop-filter: saturate(150%) blur(20px))": {
    backdropFilter: "saturate(180%) blur(6px)",
    background: "none",
  },
});

export default Container;

import { styled } from "stitches.config";
import Box from "@/ui/Box";
import Footer from "./Footer";
import ChangeLang from "./ChangeLang";
