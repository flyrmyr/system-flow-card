export type SystemElementDef = {
  unit?: string;
  icon?: string;
  color?: string;
  extra?: string | {
    main?: string,
    left?: string,
    right?: string
  };
}

export type ElementDef = SystemElementDef & {
  value: string | {
    toSystem?: string;
    fromSystem?: string;
  };
  position: "top" | "left" | "bottom" | "right" | "middle";
  fill?: string;
  invert?: boolean;
  exclude?: boolean;
};

export type CalculatedElementDef = ElementDef & {
  extra?: undefined | {
    main?: string,
    left?: string,
    right?: string
  },
  calculations: {
    toSystem: number,
    fromSystem: number | null,
    systemTotal: number
  },
};