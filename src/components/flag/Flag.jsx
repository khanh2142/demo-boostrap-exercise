import React from "react";

const Flag = ({ flag }) => {
  const listFlag = [
    {
      status: "Active",
      color: "#7bc043",
      currentFlag: 1,
    },
    {
      status: "Inactive",
      color: "#fdf498",
      currentFlag: 0,
    },
  ];

  const result = listFlag.find((item) => item.currentFlag == flag);

  return (
    <div
      style={{
        backgroundColor: result ? result.color : "#fff",
        height: 25,
        textAlign: "center",
      }}
    >
      {result && result.status}
    </div>
  );
};

export default Flag;
