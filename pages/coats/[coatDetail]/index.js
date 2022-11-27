import { useRouter } from "next/router";
import React from "react";

const CoatDetail = () => {
  const router = useRouter();

  return <div>this is coatDetail number : {router.query.coatDetail}</div>;
};
export default CoatDetail;
