import React from "react";

const Page = ({ params: { type, id } }: SearchParamProps) => {
  console.log("id:", id);
  console.log("type:", type);
  return (
    <div>
      ID:{id}-{type}
    </div>
  );
};

export default Page;
