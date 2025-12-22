import { useNavigate } from "react-router-dom";
import MobileFrame from "@/components/MobileFrame";

const Welcome = () => {
  const navigate = useNavigate();

  // Circle positions for the diagonal pattern
  const circles = [
    { number: 6, top: "15%", left: "28%" },
    { number: 1, top: "25%", left: "42%" },
    { number: 2, top: "32%", left: "38%" },
    { number: 3, top: "40%", left: "52%" },
    { number: 4, top: "48%", left: "58%" },
    { number: 5, top: "55%", left: "64%" },
  ];

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col relative">
        {/* Decorative circles */}
        <div className="flex-1 relative">
          {circles.map((circle, index) => (
            <div
              key={index}
              className="absolute w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-semibold text-accent-foreground animate-fade-in"
              style={{ 
                top: circle.top, 
                left: circle.left,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {circle.number}
            </div>
          ))}
        </div>

        {/* Bottom content */}
        <div className="p-6 pb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Welcome to PopX
          </h1>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>

          <div className="space-y-3">
            <button
              onClick={() => navigate("/create-account")}
              className="w-full py-3.5 px-4 bg-primary text-primary-foreground font-medium rounded-md transition-all hover:opacity-90 active:scale-[0.98]"
            >
              Create Account
            </button>
            <button
              onClick={() => navigate("/login")}
              className="w-full py-3.5 px-4 bg-secondary text-secondary-foreground font-medium rounded-md transition-all hover:bg-secondary/80 active:scale-[0.98]"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
};

export default Welcome;
