module.exports = (value, timezone = null) => {
  if (value === "" || isNaN(value)) {
    throw new Error("Could not generate date");
  }
  const date = new Date(parseInt(value) * 1000);
  if (!date) {
    throw new Error("Could not generate date");
  }
  let str = date.toISOString();
  if (timezone === "cet") {
    str = date.toLocaleString("en-US", { timeZone: "cet" });
  }
  if (timezone === "pst") {
    str = date.toLocaleString("en-UK", { timeZone: "pst" });
  }
  return str;
};
