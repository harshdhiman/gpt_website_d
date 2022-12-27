import React, { Suspense } from "react";
import "./suspensed.scss";

export const Suspensed = (props: {
  children: React.ReactNode;
  height?: string | number;
  width?: string | number;
}) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            height: props.height || "100px",
            width: props.width || "100%",
          }}
          className="suspensed"
        >
          <div className="sp sp-loadbar"></div>
        </div>
      }
    >
      {props.children}
    </Suspense>
  );
};
