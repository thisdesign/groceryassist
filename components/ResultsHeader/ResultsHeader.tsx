import React from "react";
import { OrderRes } from "../../types";
import { UIBox } from "..";

const ResultsHeader: React.FC<{ data: OrderRes }> = ({ data }) => {
  return <UIBox>open order</UIBox>;
};

export default ResultsHeader;
