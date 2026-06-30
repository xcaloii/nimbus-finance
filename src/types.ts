import type { ComponentType, SVGProps } from "react";

export interface Product {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  /** Mini product-UI mock variant rendered in the card. */
  mock: "capital" | "automation" | "ledger";
}

export interface Story {
  company: string;
  metric: string;
  summary: string;
  gradient: string;
}

export interface Article {
  tag: string;
  date: string;
  title: string;
  gradient: string;
}
