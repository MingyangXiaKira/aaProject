import React, {useEffect} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import '../i18n.js';
import { useTranslation } from 'react-i18next';
const SchoolItem = ({ school }) => {
  const { name, acceptanceRate, level } = school;
  const { t,i18n } = useTranslation();


  return (
      <div className="w-1/2 p-4 ">
        <Card style={{
          backgroundImage: `linear-gradient(
          310deg,
          hsl(244deg 100% 94%) 0%,
          hsl(276deg 82% 93%) 14%,
          hsl(313deg 86% 93%) 31%,
          hsl(330deg 100% 94%) 48%,
          hsl(348deg 100% 94%) 63%,
          hsl(9deg 100% 94%) 75%,
          hsl(24deg 100% 93%) 85%,
          hsl(36deg 100% 93%) 92%,
          hsl(45deg 100% 93%) 97%,
          hsl(54deg 100% 94%) 100%
        )`,
        }} >
          <CardHeader>
            <CardTitle>{t('school.name')}: {name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{t('school.AcceptanceRate')}: {acceptanceRate}%</p>
            <p>{t('school.level')}: {level}</p>
          </CardContent>
        </Card>
      </div>
  );
};

export default SchoolItem;

