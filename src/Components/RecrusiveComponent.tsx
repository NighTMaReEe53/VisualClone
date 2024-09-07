import { useState } from "react";
import { ITreeFile } from "../interface/Index";
import { RenderIcon } from "./RenderIcon";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store/Store";
import { addFileToTab, getAllDetails } from "../Store/Slice";
import { ExistFile } from "../Utils/Index";
import BottomComponent from "./SVG/BottomComponent";
import RightComponent from "./SVG/RightComponent";

interface IRecursive {
  fileTree: ITreeFile;
}

const RecrusiveComponent = ({ fileTree }: IRecursive) => {
  const [isOpen, setisOpen] = useState(false);

  const { addFileToArr } = useSelector((state: RootState) => state.Tree);

  const dispatch = useDispatch<AppDispatch>();

  // ! Handler

  const HandleClick = () => setisOpen((prev) => !prev);

  const handleClickedFile = (fileTree: ITreeFile) => {
    const Exists = ExistFile(addFileToArr, fileTree.id);

    dispatch(
      getAllDetails({
        filename: fileTree.name,
        filecontent: fileTree.content,
        setActive: fileTree.id,
      })
    );

    if (Exists) return;
    dispatch(addFileToTab([...addFileToArr, fileTree]));
  };

  return (
    <div>
      <div className="mb-1.5">
        {fileTree.isFolder ? (
          <div
            onClick={HandleClick}
            className="flex gap-2 cursor-pointer items-center text-white ml-4"
          >
            {isOpen ? <BottomComponent /> : <RightComponent />}
            <RenderIcon
              filename={fileTree.name}
              isFolder={fileTree.isFolder}
              isOpen={isOpen}
            />
            <span>{fileTree.name}</span>
          </div>
        ) : (
          <div
            className="ml-10 flex items-center gap-2 text-white cursor-pointer"
            onClick={() => handleClickedFile(fileTree)}
          >
            <RenderIcon filename={fileTree.name} />
            <span>{fileTree.name}</span>
          </div>
        )}
      </div>
      {isOpen &&
        fileTree.children?.map((file, indx) => (
          <RecrusiveComponent fileTree={file} key={indx} />
        ))}
    </div>
  );
};

export default RecrusiveComponent;
