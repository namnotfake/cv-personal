"use client";

import { cn } from "@/lib/utils";
import React, {
  useCallback,
  useLayoutEffect,
  useEffect,
  useMemo,
  useState,
} from "react";

interface MasonryResponsiveProps {
  children: React.ReactNode | React.ReactNode[];
  columnsCountBreakPoints?: { [key: number]: number };
  className?: string;
  style?: React.CSSProperties;
}

const DEFAULT_COLUMNS_COUNT = 6;

const MasonryResponsive: React.FC<MasonryResponsiveProps> = ({
  columnsCountBreakPoints = {
    768: 2,
    769: 6,
    1441: 8,
  },
  children,
  className,
  style,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  const useHasMounted = () => {
    const [hasMounted, setHasMounted] = useState(false);
    useIsomorphicLayoutEffect(() => {
      setIsLoading(false);
      setHasMounted(true);
    }, []);
    return hasMounted;
  };

  const useWindowWidth = () => {
    if (typeof window !== "undefined") {
      const hasMounted = useHasMounted();
      const [width, setWidth] = useState(window.innerWidth);

      const handleResize = useCallback(() => {
        if (!hasMounted && isLoading) return;
        setWidth(window.innerWidth);
      }, [hasMounted, isLoading]);

      useIsomorphicLayoutEffect(() => {
        if (hasMounted && !isLoading) {
          window.addEventListener("resize", handleResize);
          handleResize();
          return () => window.removeEventListener("resize", handleResize);
        }
      }, [hasMounted, handleResize, isLoading]);
      return width;
    }
  };
  const windowWidth = useWindowWidth();
  const columnsCount = useMemo(() => {
    const breakPoints = Object.keys(columnsCountBreakPoints).sort(
      (a: any, b: any) => a - b
    );

    let count =
      breakPoints.length > 0
        ? columnsCountBreakPoints[parseInt(breakPoints[0])]
        : DEFAULT_COLUMNS_COUNT;

    breakPoints.forEach((breakPoint) => {
      if (parseInt(breakPoint) <= windowWidth!) {
        count = columnsCountBreakPoints[parseInt(breakPoint)];
      }
    });

    return count;
  }, [windowWidth, columnsCountBreakPoints]);

  if (isLoading) return;

  return (
    <div className={cn(className)} style={style}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<any>, {
          key: index,
          columnsCount: columnsCount,
        })
      )}
    </div>
  );
};

export default MasonryResponsive;
