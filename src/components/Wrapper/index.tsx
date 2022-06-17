import React from "react";
import Collapsible from "../Collapsible";

export default function Wrapper({ children }) {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (child.props.mdxType === "collapsible") {
          const title = child.props.children;
          const collapsed = child.props.open ? false : true;
          return (
            <Collapsible collapsed={collapsed}>
              {child.props.children}
            </Collapsible>
          );
        }
        return child;
      })}
    </>
  );
}
