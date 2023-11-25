import Editor from "../Components/Editor";
import Tags from "../Layouts/Tags";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div className="mainpage-layout">
      <Editor />
      <Tags/>
    </div>
  );
};
export default MainPage;
