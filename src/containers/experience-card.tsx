'use client'

import Accordion from '@/base-components/accordion';
import AccordionActivateIcon from '@/base-components/accordion-activate-icon';
import AccordionContext from '@/base-components/accordion-context';
import AccordionDesactivateIcon from '@/base-components/accordion-desactivate-icon';
import AccordionTitle from '@/base-components/accordion-title';
import Image from 'next/image';
import { ChevronDown, ChevronLeft } from 'lucide-react'
import { useState } from 'react';
import useClientInter from '@/utils/hooks/use-client-inter';

export default function ExperienceCard({ company, location, roles, img }: any) {
    const texts = useClientInter<any>("experiences")

    function calculateDuration(start: any, end: any) {
        const startDate = new Date(start);
        const endDate = end ? new Date(end) : new Date();

        let diffYears = endDate.getFullYear() - startDate.getFullYear();
        let diffMonths = endDate.getMonth() - startDate.getMonth();

        if (diffMonths < 0) {
            diffYears -= 1;
            diffMonths += 12;
        }

        let durationParts = [];

        if (diffYears > 0) {
            durationParts.push(`${diffYears} ${diffYears > 1 ? texts.years : texts.year}`);
        }

        if (diffMonths > 0) {
            durationParts.push(`${diffMonths} ${diffMonths > 1 ? texts.months : texts.month}`);
        }

        return durationParts.length > 0 ? durationParts.join(` ${texts.and} `) : `1 ${texts.month}`;
    }

    function calculateTotalDuration() {
        let minStart = new Date(roles[0]?.start);
        let maxEnd = roles[0]?.end ? new Date(roles[0].end) : new Date();

        roles.forEach((role: any) => {
            const startDate = new Date(role.start);
            const endDate = role.end ? new Date(role.end) : new Date();

            if (startDate < minStart) minStart = startDate;
            if (endDate > maxEnd) maxEnd = endDate;
        });

        return calculateDuration(minStart, maxEnd);
    }

    const totalDuration = calculateTotalDuration();

    return (
        <div className="w-full flex flex-col gap-6">
            <AccordionContext>
                <AccordionTitle className={' cursor-pointer'}>
                    <div className="flex items- justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full">
                                <Image className='rounded-full' src={img} alt={''} ></Image>
                            </div>
                            <div>
                                <h3 className="text-2xl ">{company} </h3>
                                <p className="text-sm ">{location} · {totalDuration}</p>
                            </div>
                        </div>
                        <AccordionActivateIcon>
                            <ChevronDown />
                        </AccordionActivateIcon>
                        <AccordionDesactivateIcon>
                            <ChevronLeft />
                        </AccordionDesactivateIcon>
                    </div>
                </AccordionTitle>
                <Accordion className={''}>
                    <div className="flex flex-col gap-6">
                        {roles.map((role: any, index: any) => {
                            const duration = calculateDuration(role.start, role.end);

                            return (
                                <div key={index} className='flex h-full'>
                                    <div className='flex flex-col gap-1 '>
                                    </div>
                                    <div>
                                        <h4 className="text-xl">{role.title}</h4>
                                        <p className="text-sm">{role.type}</p>
                                        <p className="text-sm">
                                            {role.start} - {role.end || texts.atTheMoment} · {duration}
                                        </p>
                                        <p className="text-sm mt-1"> {role.skills}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Accordion>
            </AccordionContext>
        </div>
    );
}
