import React from "react";
import { fadeUpObserver } from "../../utils/scrollAnimation";

type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  const titleRef = React.useRef<any>(null);

  React.useEffect(() => {
    fadeUpObserver.observe(titleRef.current);
  }, []);

  return (
    <h1
      ref={titleRef}
      className="fade-up-hidden	mb-10 flex justify-center font-Inter text-3xl font-semibold md:text-4xl lg:text-5xl xl:mb-20 xl:text-5xl"
    >
      {children}
    </h1>
  );
}
