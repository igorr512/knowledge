import MyQuillEditor from "../Components/MyQuillEditor";
import Tags from "../Layouts/Tags";
import "./MainPage.css";
const MainPage = () => {
    const tagsAr = [1,2,3];
  return (
    <div className="mainpage-layout">
      <MyQuillEditor />
      <Tags/>
    </div>
  );
};
export default MainPage;
