"use client";

import { tailwindColors } from "../../../../tailwind.config";
import { colord } from "colord";

const getTextColor = (backgroundColor: string): string =>
  colord(backgroundColor).isDark() ? "#dddddd" : "#333333";

const ColorBox: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => {
  return (
    <div
      className="w-96 h-60 flex flex-col justify-center items-center uppercase text-center"
      style={{ backgroundColor: color, color: getTextColor(color) }}
    >
      <span>{name}</span>
      <span>{color}</span>
    </div>
  );
};
export const Colors: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center" lang="en" dir="ltr">
      {Object.entries(tailwindColors).map(([name, color]) => (
        <ColorBox key={name} name={name} color={color} />
      ))}
    </div>
  );
};
