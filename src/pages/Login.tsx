import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "@/components/MobileFrame";
import FloatingInput from "@/components/FloatingInput";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const isFormValid = formData.email.length > 0 && formData.password.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/account-settings");
    }
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground leading-tight mb-2">
            Signin to your<br />PopX account
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="space-y-5">
            <FloatingInput
              id="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange("email")}
            />
            <FloatingInput
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleInputChange("password")}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3.5 px-4 font-medium rounded-md transition-all mt-6 ${
              isFormValid 
                ? "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98]" 
                : "bg-disabled text-disabled-foreground cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </MobileFrame>
  );
};

export default Login;
