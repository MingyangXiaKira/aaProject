import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "../i18n.js";
import { useTranslation } from "react-i18next";
const SchoolItem = ({ school }) => {
  const { name, acceptanceRate, level } = school;
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Card className="">
        <CardHeader>
          <CardTitle>
            {t("school.name")}: {name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            {t("school.AcceptanceRate")}: {acceptanceRate}%
          </p>
          <p>
            {t("school.level")}: {level}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolItem;
