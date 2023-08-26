import React from "react";

export interface TitleProps {
  title: string;
  textColor: string;
}

export default function Title({ title, textColor }: TitleProps) {
  return <h1 style={{ color: textColor }}>{title}</h1>;
}
