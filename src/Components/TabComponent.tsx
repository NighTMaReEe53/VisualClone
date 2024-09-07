import { useSelector } from "react-redux";
import TabLiComponent from "./TabLiComponent";
import { RootState } from "../Store/Store";
import { useState } from "react";
import Close from "./UI/Close";

const TabComponent = () => {
  const { addFileToArr } = useSelector((state: RootState) => state.Tree);

  const [isShow, setIsShow] = useState(false);

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  return (
    <ul
      className="flex items-center border-b-2 border-[#64646437]"
      onContextMenu={(e) => {
        e.preventDefault();
        setPosition({ x: e.clientX, y: e.clientY });
        setIsShow(true);
      }}
    >
      {addFileToArr.map((file) => (
        <TabLiComponent file={file} key={file.id} />
      ))}
      {isShow && <Close position={position} setIsShow={setIsShow} />}
    </ul>
  );
};

export default TabComponent;
