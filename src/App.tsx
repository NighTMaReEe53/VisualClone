import { useSelector } from "react-redux";
import RecrusiveComponent from "./Components/RecrusiveComponent";
import TabComponent from "./Components/TabComponent";
import { TreeFile } from "./data/Index";
import { RootState } from "./Store/Store";
import Content from "./Components/ContentWithHighLighter";
import ReizablePanel from "./Components/ReizablePanel";
import WelcomeComponent from "./Components/WelcomeComponent";

function App() {
  const { addFileToArr, getDetails } = useSelector(
    (state: RootState) => state.Tree
  );

  return (
    <div className="flex items-start h-screen">
      <ReizablePanel
        isShowPanelLeft
        LeftPanel={
          <div className="h-screen border-[#64646437] m-2">
            <RecrusiveComponent fileTree={TreeFile} />
          </div>
        }
        RightPanel={
          <div className="w-full">
            {addFileToArr.length ? (
              <>
                <TabComponent />
                <Content content={getDetails.filecontent} />
              </>
            ) : <WelcomeComponent />}
          </div>
        }
      />
    </div>
  );
}

export default App;
