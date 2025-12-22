import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "@/components/MobileFrame";
import FloatingInput from "@/components/FloatingInput";
import RadioOption from "@/components/RadioOption";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "Marry Doe",
    phone: "Marry Doe",
    email: "Marry Doe",
    password: "Marry Doe",
    company: "Marry Doe",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/account-settings");
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex items-start gap-2 mb-6">
          <h1 className="text-2xl font-bold text-foreground leading-tight">
            Create your<br />PopX account
          </h1>
          <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-xs font-semibold text-accent-foreground mt-1">
            1
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="space-y-5 flex-1">
            <FloatingInput
              id="fullName"
              label="Full Name"
              required
              value={formData.fullName}
              onChange={handleInputChange("fullName")}
            />
            <FloatingInput
              id="phone"
              label="Phone number"
              required
              value={formData.phone}
              onChange={handleInputChange("phone")}
            />
            <FloatingInput
              id="email"
              label="Email address"
              required
              type="email"
              value={formData.email}
              onChange={handleInputChange("email")}
            />
            <FloatingInput
              id="password"
              label="Password"
              required
              type="password"
              value={formData.password}
              onChange={handleInputChange("password")}
            />
            <FloatingInput
              id="company"
              label="Company name"
              value={formData.company}
              onChange={handleInputChange("company")}
            />

            {/* Agency Question */}
            <div className="pt-1">
              <p className="text-sm text-foreground mb-3">
                Are you an Agency?<span className="text-label">*</span>
              </p>
              <div className="flex items-center gap-6">
                <RadioOption
                  label="Yes"
                  selected={isAgency}
                  onClick={() => setIsAgency(true)}
                />
                <RadioOption
                  label="No"
                  selected={!isAgency}
                  onClick={() => setIsAgency(false)}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-primary text-primary-foreground font-medium rounded-md transition-all hover:opacity-90 active:scale-[0.98] mt-8"
          >
            Create Account
          </button>
        </form>
      </div>
    </MobileFrame>
  );
};

export default CreateAccount;
