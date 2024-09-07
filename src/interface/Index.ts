export interface ITreeFile {
  id: string;
  name: string;
  isFolder: boolean;

  children?: ITreeFile[];

  content: string;
}

export interface IInitialState {
  addFileToArr: ITreeFile[];
  fileRemove: string;
  getDetails: {
    filename: string;
    filecontent: string;
    setActive: string;
  };
}
