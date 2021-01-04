export default () => () => {
  if (typeof window !== "undefined") {
    console.log(process.env.NODE_ENV, "node - env");
    return process.env.NODE_ENV === "development";
  } else {
    return (
      location.hostname === "localhost" || location.hostname === "127.0.0.1"
    );
  }
};
