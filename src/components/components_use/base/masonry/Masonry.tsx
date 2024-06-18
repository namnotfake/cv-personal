import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MasonryProps = {
  children: ReactNode;
  columnsCount?: number;
  gutter?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Masonry: React.FC<MasonryProps> = ({
  children,
  columnsCount = 6,
  gutter = "0",
  className,
  style,
}) => {
  const getColumns = () => {
    const columns: ReactNode[][] = Array.from(
      { length: columnsCount! },
      () => []
    );
    let validIndex = 0;
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        columns[validIndex % columnsCount!].push(child);
        validIndex++;
      }
    });
    return columns;
  };

  const renderColumns = () => {
    const column = getColumns();
    return column.map((column, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "stretch",
          flex: 1,
          width: 0,
          gap: gutter,
        }}
      >
        {column.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    ));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "stretch",
        boxSizing: "border-box",
        width: "100%",
        gap: gutter,
        ...style,
      }}
      className={cn(className)}
    >
      {renderColumns()}
    </div>
  );
};

export default Masonry;
