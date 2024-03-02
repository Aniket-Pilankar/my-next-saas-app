import Header from "@/components/shared/Header";
// import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  // const { userId } = auth();
  console.log("type:", type);
  const transformation = transformationTypes[type];
  console.log("transformation:", transformation);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
    </>
  );
};

export default AddTransformationTypePage;
