const convertTimestamp = require("./library/convertTimestamp");

const setContent = function (context, timezone = null) {
  let row = context.clickedRow();
  let col = context.clickedColumn();
  let item = context.currentItem();

  if (row === null || col === null || item === null) {
    context.alert("Error", "No item clicked");
    return;
  }

  const value = context.clickedRowValue();

  let str;
  try {
    str = convertTimestamp(value, timezone);
  } catch (err) {
    context.alert("Error", "Could not convert timestamp");
    return;
  }

  row.setConstant(col.name, "");
  row.update(col.name, str);

  item.addUpdate(row);

  context.update();
};

global.toISO = function (context) {
  try {
    setContent(context);
  } catch (err) {
    context.alert("Error", err);
  }
};

global.toCET = function (context) {
  try {
    setContent(context, "cet");
  } catch (err) {
    context.alert("Error", err);
  }
};

global.toPST = function (context) {
  try {
    setContent(context, "pst");
  } catch (err) {
    context.alert("Error", err);
  }
};

module.exports = {
  toISO,
  toCET,
  toPST,
};
