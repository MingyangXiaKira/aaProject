import React from "react";
import SchoolItem from "./SchoolItem";
import { useLocation } from "react-router-dom";
import ReactEcharts from 'echarts-for-react';
import '../i18n.js';
import { useTranslation } from 'react-i18next';
const SchoolList = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const data = location.state?.data;
    console.log("Received data:", data);

    const schools = data
        ? data.prediction
            .map(([name, acceptanceRate, level]) => ({
                name: name,
                acceptanceRate: parseFloat(acceptanceRate.replace("%", "")),
                level: level,
            }))
            .sort((a, b) => b.acceptanceRate - a.acceptanceRate)
        : [];

    const levelCounts = {
        High: 0,
        Medium: 0,
        Low: 0,
    };

    schools.forEach((school) => {
        levelCounts[school.level]++;
    });

    let option;
    option = {
        title: {
            text: `${t('school.RecommendedResults')}`,
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: '50%',
                data: Object.entries(levelCounts).map(([level, count]) => ({ value: count, name: level })),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return (
        <div style={{
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
        }}>
            <ReactEcharts option={option} />

            <div className="flex flex-wrap px-10">
                {schools.map((school,index)=>(
                    <SchoolItem key={index} school={school} />
                ))}

            </div>
        </div>
    );
};

export default SchoolList;
