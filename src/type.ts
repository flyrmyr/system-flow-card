export type SystemElementDef = {
  unit?: string;
  icon?: string;
  color?: string;
  extra?: string;
}

export type ElementDef = SystemElementDef & {
  value: string | {
    toSystem?: string;
    fromSystem?: string;
  };
  position: "top" | "left" | "bottom" | "right" | "middle";
  inverted?: boolean;
};

export type CalculatedElementDef = ElementDef & {
  calculations: {
    toSystem: number,
    fromSystem: number | null,
    systemTotal: number
  },
};