type ConnectorType = {
  id: number;
  label: string;
  status: string;
};

export type ConnectorListType = ConnectorType[];

type ColorType = {
  id: number;
  label: string;
  hex_color_code: string;
  status: string;
};

export type ColorListType = ColorType[];
