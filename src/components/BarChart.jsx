import { useState } from "react";

export default function BarChart({
  height,
  width,
  data,
  drawValue,
  styleConfig: { color, hoverColor },
}) {
  const ratio = 10; // width to gap ratio
  const n = data.length + 1;
  const columnWidth = (ratio * width) / (n * ratio + n - 1);
  const gap = width / (n * ratio + n - 1);
  const maxValue = Math.max(...data.map((o) => o[drawValue]));

  const [num, setNum] = useState("");
  return (
    <>
      <span style={{ position: "absolute" }}>{num}</span>
      <svg key="chart" viewBox={`0 0 ${width} ${height}`}>
        {data.map((sample, i) => {
          const colHeight = (height * sample[drawValue]) / maxValue;

          return (
            <>
              <path
                d={`M${(i + 1) * (columnWidth + gap)} 0 L${(i + 1) * (columnWidth + gap)} ${height}`}
                style={{
                  strokeWidth: columnWidth,
                  stroke: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.target.nextSibling.style.stroke = hoverColor;
                  setNum(sample[drawValue]);
                }}
                onMouseLeave={(e) => {
                  e.target.nextSibling.style.stroke = color;
                  setNum("");
                }}
              />
              <path
                d={`M${(i + 1) * (columnWidth + gap)} ${height} L${(i + 1) * (columnWidth + gap)} ${height - colHeight}`}
                style={{
                  strokeWidth: columnWidth,
                  stroke: color,
                }}
                onMouseEnter={(e) => { e.target.style.stroke = hoverColor; setNum(sample[drawValue]); }}
                onMouseLeave={(e) => { e.target.style.stroke = color; setNum(""); }}
              />
            </>
          );
        })}
      </svg>
    </>
  );
}
