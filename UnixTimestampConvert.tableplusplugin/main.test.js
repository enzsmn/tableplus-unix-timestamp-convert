const convertTimestamp = require("./library/convertTimestamp");

const timestamp = 1698418522;

test("It can convert unix ts to ISO", () => {
  expect(convertTimestamp(timestamp)).toEqual("2023-10-27T14:55:22.000Z");
  expect(convertTimestamp(timestamp.toString())).toEqual(
    "2023-10-27T14:55:22.000Z"
  );
});

test("It can convert unix ts to CET", () => {
  expect(convertTimestamp(timestamp, "cet")).toEqual("10/27/2023, 4:55:22 PM");
  expect(convertTimestamp(timestamp.toString(), "cet")).toEqual(
    "10/27/2023, 4:55:22 PM"
  );
});

test("It can convert unix ts to PST", () => {
  expect(convertTimestamp(timestamp, "pst")).toEqual("27/10/2023, 07:55:22");
  expect(convertTimestamp(timestamp.toString(), "pst")).toEqual(
    "27/10/2023, 07:55:22"
  );
});

test("It throws errors on fail", () => {
  expect(() => convertTimestamp("foo")).toThrow(Error);
  expect(() => convertTimestamp("foo")).toThrow("Could not generate date");
});
