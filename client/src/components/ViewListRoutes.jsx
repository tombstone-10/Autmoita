import { Route, Routes } from "react-router-dom";
import ViewList from "./VerticalTabs";
import Timetable from "./Timetable";

const ViewListRoutes = () => {
  return (
    <>
      <ViewList>
        <Routes>
          <Route path="/view/class/timetable" element={<Timetable />} />
        </Routes>
      </ViewList>
    </>
  );
};

export default ViewListRoutes;
