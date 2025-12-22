import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
}

const MobileFrame = ({ children }: MobileFrameProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-frame-bg">
      <div className="w-full max-w-[375px] min-h-[667px] max-h-[812px] h-[90vh] bg-background rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col relative">
        {children}
      </div>
    </div>
  );
};

export default MobileFrame;
