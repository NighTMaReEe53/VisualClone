import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IPROPS {
  defaultLayout?: number[] | undefined;
  LeftPanel: ReactNode;
  RightPanel: ReactNode;
  isShowPanelLeft: boolean;
}

const ReizablePanel = ({
  defaultLayout = [33, 67],
  LeftPanel,
  RightPanel,
  isShowPanelLeft,
}: IPROPS) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId={"condition"}
    >
      {isShowPanelLeft && (
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible>
            {LeftPanel}
          </Panel>
          <PanelResizeHandle className="border-r border-[#64646437]" />
        </>
      )}
      <Panel defaultSize={defaultLayout[1]}>{RightPanel}</Panel>
    </PanelGroup>
  );
};

export default ReizablePanel;
