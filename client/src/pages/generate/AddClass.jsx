import Add from "../../components/Add";
import Tabs from "../../components/Tabs";
import { generateTabs } from "../../data/TabsData";
import "./Generate.css";

const AddClass = () => {
  return (
    <>
      <div className="scroll-container">
        <Tabs tabs={generateTabs} />
        <div className="generateBtnContainer">
          <button>Generate</button>
        </div>
        <Add parentName={"addClass"} />
      </div>
    </>
  );
};

export default AddClass;
