import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { Link, ShoppingBag, FileText, FileCheck, Calendar } from "lucide-react";
import Apps from '../assets/Apps.svg'

export const AppsMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          {/* <Grid3x3 className="w-4 h-4 mr-2" /> */}
          <img src={Apps} alt="" className="w-4 h-4" />
              <p className="text-[16px] pt-1 text-[#56616B] font-semibold">Apps</p>
          {/* Apps */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuItem>
          <div className="flex items-start gap-3 py-1">
            <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0">
              <Link className="w-4 h-4 text-pink-600" />
            </div>
            <div>
              <p className="font-medium text-sm">Link in Bio</p>
              <p className="text-xs text-muted-foreground">Manage your Link in Bio</p>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-start gap-3 py-1">
            <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <p className="font-medium text-sm">Store</p>
              <p className="text-xs text-muted-foreground">Manage your Store activities</p>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-start gap-3 py-1">
            <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4 text-teal-600" />
            </div>
            <div>
              <p className="font-medium text-sm">Media Kit</p>
              <p className="text-xs text-muted-foreground">Manage your Media Kit</p>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-start gap-3 py-1">
            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <p className="font-medium text-sm">Invoicing</p>
              <p className="text-xs text-muted-foreground">Manage your Invoices</p>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-start gap-3 py-1">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-sm">Bookings</p>
              <p className="text-xs text-muted-foreground">Manage your Bookings</p>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
