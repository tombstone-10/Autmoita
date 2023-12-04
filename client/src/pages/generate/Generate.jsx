import DefaultPage from "../../components/DefaultPage";
import Tabs from "../../components/Tabs";
import { generateTabs } from "../../data/TabsData";
import { generatePage } from "../../data/PageData";

const Generate = () => {
  return (
    <>
      <Tabs tabs={generateTabs} parentName={"generate"} />
      <DefaultPage currentPage={generatePage} parentName={"generate"} />
    </>
  );
};

export default Generate;
