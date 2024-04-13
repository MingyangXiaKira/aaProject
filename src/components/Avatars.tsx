import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Avatars = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none cursor-pointer">
              Settings
            </h4>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium leading-none cursor-pointer">Log out</h4>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Avatars;
