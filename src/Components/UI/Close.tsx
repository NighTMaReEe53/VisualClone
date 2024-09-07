import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { addFileToTab } from "../../Store/Slice";

interface IClose {
  position: {
    x: number;
    y: number;
  };
  setIsShow: (isShow: boolean) => void;
}

const Close = ({ position, setIsShow }: IClose) => {
  const { addFileToArr, fileRemove } = useSelector(
    (state: RootState) => state.Tree
  );

  const dispatch = useDispatch<AppDispatch>();

  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClicked = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsShow(false);
      }
    };

    document.addEventListener("click", (e) => handleClicked(e));

    return () => {
      document.addEventListener("click", (e) => handleClicked(e));
    };
  }, [setIsShow]);

  const handleRemoveAll = () => {
    dispatch(addFileToTab([]));
    setIsShow(false);
  };

  const handleRemove = () => {
    const Filter = addFileToArr.filter((item) => item.id !== fileRemove);
    dispatch(addFileToTab(Filter));
    setIsShow(false);
  };

  return (
    <ul
      ref={menuRef}
      className="absolute w-fit text-white z-10 p-2 bg-[#1c1c1c] rounded-md "
      style={{ left: position.x, top: position.y }}
    >
      <li
        className="cursor-pointer px-7 py-2 rounded-md transition hover:bg-zinc-500"
        onClick={(e) => {
          handleRemove();
          e.stopPropagation();
        }}
      >
        Close
      </li>
      <li
        className="cursor-pointer px-7 py-2 transition rounded-md hover:bg-zinc-500"
        onClick={handleRemoveAll}
      >
        Close All
      </li>
    </ul>
  );
};

export default Close;
