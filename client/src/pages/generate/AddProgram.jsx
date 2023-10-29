import Add from "../../components/Add";
import Tabs from "../../components/Tabs";
import { generateTabs } from "../../data/TabsData";

const AddProgram = () => {
  return (
    <>
      <Tabs tabs={generateTabs} />
      <Add parentName={"addProgram"} />
    </>
  );
};

export default AddProgram;
