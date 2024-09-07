import { ITreeFile } from "../interface/Index";

export const ExistFile = (arr: ITreeFile[], id: string) => {
  return arr.some((item) => item.id === id);
};
