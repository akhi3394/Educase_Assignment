import MobileFrame from "@/components/MobileFrame";
import { Camera } from "lucide-react";

const AccountSettings = () => {
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-6 pb-4">
          <h1 className="text-xl font-semibold text-foreground">
            Account Settings
          </h1>
        </div>

        {/* Profile Section */}
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            {/* Avatar with camera icon */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Camera className="w-3 h-3 text-primary-foreground" />
              </div>
            </div>

            {/* User Info */}
            <div>
              <h2 className="font-semibold text-foreground">Marry Doe</h2>
              <p className="text-sm text-muted-foreground">Marry@Gmail.Com</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 py-4 border-t border-dashed border-border">
          <p className="text-sm text-foreground leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* Bottom dashed border */}
        <div className="flex-1 border-b border-dashed border-border mx-6" />
      </div>
    </MobileFrame>
  );
};

export default AccountSettings;
