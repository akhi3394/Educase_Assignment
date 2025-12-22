import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface MobileFrameProps {
  children: ReactNode;
}

const MobileFrame = ({ children }: MobileFrameProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-frame-bg">
      {/* Back button outside the frame - bottom */}
      {!isHome && (
        <button
          onClick={() => navigate("/")}
          className="absolute left-4 top-1/2 -translate-y-1/2 md:left-[calc(50%-230px)] w-10 h-10 rounded-full bg-background shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-all hover:scale-105 active:scale-95"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
      )}
      
      <div className="w-full max-w-[375px] min-h-[667px] max-h-[812px] h-[90vh] bg-background rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col relative">
        {children}
      </div>
    </div>
  );
};

export default MobileFrame;
