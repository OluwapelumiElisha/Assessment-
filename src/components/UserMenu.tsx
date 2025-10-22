import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Settings, ShoppingBag, Gift, Plug, Bug, RefreshCw, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import menu from '../assets/menu.svg'
import { useEffect, useState } from "react";
export const UserMenu = () => {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("https://fe-task-api.mainstack.io/user");
        if (!res.ok) throw new Error("Failed to fetch user");
        const data: User = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) return <p>Loading user...</p>;
  if (!user) return <p>No user data found.</p>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center gap-2 bg-[#EFF1F6] hover:opacity-80 transition-opacity rounded-full px-3 py-2">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm flex items-center justify-center">
              OJ
            </AvatarFallback>
          </Avatar>
          <img src={menu} alt="comment" className="w-6 h-6 object-cover" />
        </button>

      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72 mt-3">
        <div className="px-2 py-3 border-border">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user
                  ? `${user.first_name[0]}${user.last_name[0]}`.toUpperCase()
                  : ""}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium"> {user?.first_name} {user?.last_name} </p>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span className="font-medium">Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShoppingBag className="mr-2 h-4 w-4" />
            <span>Purchase History</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Gift className="mr-2 h-4 w-4" />
            <span>Refer and Earn</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Plug className="mr-2 h-4 w-4" />
            <span>Integrations</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bug className="mr-2 h-4 w-4" />
            <span>Report Bug</span>
          </DropdownMenuItem>
          {/* <DropdownMenuSeparator /> */}
          <DropdownMenuItem>
            <RefreshCw className="mr-2 h-4 w-4" />
            <span>Switch Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </div>

      </DropdownMenuContent>
    </DropdownMenu>
  );
};
