import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  root: {
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    background: "center center fixed",
    // Background by SVGBackgrounds.com
    backgroundColor: "#ff8683",
    backgroundImage: `url(${bg})`
  },
  heading: {
    fontSize: "2rem"
  },
  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white",
      fontFamily: "Roboto",
      fontSize: "1rem"
    },
    "& a:hover": {
      backgroundColor: "white",
      color: "#ff8683",
      textDecoration: "none"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    marginBottom: "1rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem"
    }
  }
};
