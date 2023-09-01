import { useState } from 'react';

import type { NextRouter } from 'next/dist/client/router';
import type { NavInstance } from '@/constants/interfaces';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import commonNav from '@/data/commonNav.json';

interface CommonNavTabsProps {
    linksArr: NavInstance[];
    router: NextRouter;
    pathName: string;
}

export default function CommonNavTabs({linksArr, pathName, router}: CommonNavTabsProps) {
    const initialValue = linksArr.findIndex(link => link.address === pathName);
    let isRouterPathMatches = true;
    if (initialValue === -1) {
        isRouterPathMatches = false;
    }
    const [value, setValue] = useState<number>(isRouterPathMatches ? initialValue : 0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        router.push(linksArr[newValue].address);
    };

    const setRouterPathMatchesAsTrue = () => {
        if (!isRouterPathMatches) {
            isRouterPathMatches = true;
            router.push(linksArr[value].address);
        }
    }
    
    const elements = commonNav.links.map(link => <Tab key={link.text} label={link.text} />)
    return (
        <div onClick={setRouterPathMatchesAsTrue}>
            <Tabs id={isRouterPathMatches ? "nav-tabs" : "nav-tabs-no-indicator"} value={value} onChange={handleChange}>
              {elements}
            </Tabs>
        </div>
        );
}