import Image from "./Image";
import FileComponent from "./SVG/FileComponent";

interface IRenderIcon {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

export const RenderIcon = ({ filename, isFolder, isOpen }: IRenderIcon) => {
  const Extenstion = filename.split(".").pop();

  const My_Object: Record<string, string> = {
    // ! File

    tsx: "/icons/react_ts",
    jsx: "/icons/react",
    js: "/icons/javascript",
    ts: "/icons/typescript",
    html: "/icons/html",
    css: "/icons/css",
    svg: "/icons/svg",

    // ! Folder

    node_module: "/icons/folder-node",
    src: "/icons/folder-src",
    styles: "/icons/folder-css",
    Components: "/icons/folder-components",
    interface: "/icons/folder-interface",
  };

  if (
    Extenstion &&
    Object.prototype.hasOwnProperty.call(My_Object, Extenstion)
  ) {
    const PATH = isFolder
      ? isOpen
        ? `${My_Object[Extenstion]}-open.svg`
        : `${My_Object[Extenstion]}.svg`
      : `${My_Object[Extenstion]}.svg`;

    return <Image src={PATH} />;
  }

  if (isFolder && isOpen) return <Image src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <Image src="/icons/folder-default.svg" />;

  return <FileComponent />;
};
