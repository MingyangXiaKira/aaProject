import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SchoolItem = () => {
  return (
    <div>
      <Card className="">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolItem;
