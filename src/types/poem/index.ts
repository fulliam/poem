export interface IPoemQuatrain {
  lines: string[];
  visible: boolean;
}

export interface IPoem {
  title: string;
  author: string;
  quatrains: IPoemQuatrain[];
}
