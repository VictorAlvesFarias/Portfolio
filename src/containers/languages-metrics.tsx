"use client"

import React, { useEffect, useState } from 'react';
import Gradientline from '@/components/gradient-line';
import { Languages } from '../../i18n.config';
import useClientInter from '@/utils/hooks/use-client-inter';
import Dictionaries from '../dictionaries/analytics.json';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import Section from '@/components/section';
import { paddingPropDefs } from '@radix-ui/themes';

Chart.register(ArcElement);

function LanguagesMetrics() {
    const language: Languages = useClientInter()
    const texts = Dictionaries[language]

    function generatePastelColorsArray(quantity: number) {
        const violetPastelColorsArray = [];
        const minHue = 257;
        const maxHue = 348;
        const minSaturation = 70;
        const maxSaturation = 83;
        const minLightness = 60;
        const maxLightness = 72;

        for (let i = 0; i < quantity; i++) {
            const hue = Math.floor(Math.random() * (maxHue - minHue + 1)) + minHue; // Matiz entre 257 e 348
            const saturation = Math.floor(Math.random() * (maxSaturation - minSaturation + 1)) + minSaturation; // Saturação entre 70 e 83
            const lightness = Math.floor(Math.random() * (maxLightness - minLightness + 1)) + minLightness; // Luminosidade entre 60 e 72

            const pastelVioletColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            violetPastelColorsArray.push(pastelVioletColor);
        }

        return violetPastelColorsArray;
    }
    function reduceOpacityByHalf(colorList: any[]) {
        return colorList.map(color => {
            const hslMatch = color.match(/hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/);

            if (hslMatch) {
                const [, hue, saturation, lightness] = hslMatch;
                return `hsla(${hue}, ${saturation}%, ${lightness}%, 0.5)`;
            }

            // Caso não seja HSL válido, retornar a cor original.
            return color;
        });
    }
    function convertData(inputData: any): any {
        const labels = inputData.map((item: any) => item.name);
        const data = inputData.map((item: any) => item.percentage);
        const colors = generatePastelColorsArray(inputData.length)

        const outputData = {
            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: reduceOpacityByHalf(colors),
                    backgroundOpacity: "",
                    borderWidth: 2,
                    borderColor: colors
                },
            ],
        };

        return outputData;
    }

    const [data, setData]: any = useState({
        labels: [],
        datasets: [
        ],
    })

    useEffect(() => {
        fetch("https://victoralves-portfolio-backend.vercel.app/api/profile")
            .then(response => response.json())
            .then((item: any) => {
                setData(convertData(item.languages))
            })

    }, [])

    return (
        <Section>
            <div className='flex flex-col'>
                <div className=" pb-12 w-fit text-lg lg:text-2xl dark:text-white">
                    <h1 >{texts.title}</h1>
                    <Gradientline />
                </div>
                <div className='flex flex-col p-6 items-center justify-center dark:text-white  gap-6 md:flex-row bg-zinc-100  dark:bg-zinc-800 shadow-sm  rounded-sm'>
                    <div className=" md:w-1/2 items-start w-full  gap-y-1 flex flex-col">
                        <p className='w-full font-semibold'>
                            {texts.paragraph}
                        </p>
                    </div>
                    <div className=' flex md:w-1/3 w-full flex-col gap-3  justify-center items-center'>
                        <div className='flex gap-3 flex-wrap justify-center'>
                            {
                                data.labels.map((item: any, index: any) =>
                                    <div style={{ backgroundColor: data.datasets[0].backgroundColor[index] }} className=' dark:text-zinc-50 font-semibold flex p-1 px-3 gap-3 items-center rounded' key={index}>
                                        {item}: {Math.floor(data.datasets[0].data[index])}%
                                    </div>
                                )
                            }
                        </div>
                        <Doughnut
                            className='p-6'
                            data={data}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </Section>

    )
}

export default LanguagesMetrics