import { useDispatch, useSelector } from "react-redux";
import { ITreeFile } from "../interface/Index";
import { RenderIcon } from "./RenderIcon";
import { AppDispatch, RootState } from "../Store/Store";
import {
  addFileToTab,
  getAllDetails,
  removeFileWithClicked,
} from "../Store/Slice";

interface IFile {
  file: ITreeFile;
}

const TabLiComponent = ({ file }: IFile) => {
  const { addFileToArr, getDetails } = useSelector(
    (state: RootState) => state.Tree
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleClicked = (file: ITreeFile) => {
    dispatch(
      getAllDetails({
        setActive: file.id,
        filecontent: file.content,
        filename: file.name,
      })
    );
  };

  const handleDelete = (id: string) => {
    const Filtered = addFileToArr.filter((item) => item.id !== id);
    const Last = Filtered[Filtered.length - 1];

    dispatch(addFileToTab(Filtered));
    dispatch(
      getAllDetails({
        setActive: Last.id,
        filecontent: Last.content,
        filename: Last.name,
      })
    );
  };

  return (
    <div
      onClick={() => handleClicked(file)}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(removeFileWithClicked(file.id));
      }}
      className={`text-white flex items-center p-2 cursor-pointer hover:bg-[#64646437] transition ${
        file.id === getDetails.setActive
          ? `border-t-2 border-teal-400 bg-[#64646437]`
          : `border-t-2 border-transparent`
      }`}
    >
      <RenderIcon filename={file.name} />
      <li className="p-1 mx-3">{file.name}</li>
      <span
        className="p-1"
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(file.id);
        }}
      >
        X
      </span>
    </div>
  );
};

export default TabLiComponent;
