import { useState, useEffect } from 'react';
import type { NextRouter } from 'next/dist/client/router';

import type { NavInstance } from '@/constants/interfaces';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface CommonNavTabsProps {
    linksArr: NavInstance[];
    router: NextRouter;
    pathName: string;
}

export default function CommonNavTabs({ linksArr, pathName, router }: CommonNavTabsProps) {
    const initialValue = linksArr.findIndex(link => {
        return link.address === pathName || pathName.split('/').filter(word => word).some(word => word === link.address.slice(1));
    });

    const lastLinksArrIdx = linksArr.length;

    let isRouterPathMatches = true;

    if (initialValue === -1) {
        isRouterPathMatches = false;
    }
    const [value, setValue] = useState<number>(isRouterPathMatches ? initialValue : lastLinksArrIdx);
    
    useEffect(() => {
        if (router.pathname === '/' && value !== 0) {
                setValue(0);
            }
    }, [router.pathname]
    );

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        router.push(linksArr[newValue].address);
    };

    const setRouterPathMatchesAsTrue = (idx: number) => {
        if (isRouterPathMatches) {
            return;
        }
            isRouterPathMatches = true;
            router.push(linksArr[idx].address);
    }
    const elements = linksArr.map((link, idx) => <Tab key={link.text} label={link.text} onClick={() => setRouterPathMatchesAsTrue(idx)} />);

    return (
            <Tabs id={isRouterPathMatches ? "nav-tabs" : "nav-tabs-no-indicator"} value={value} onChange={handleChange}>
              {elements}
            </Tabs>
        );
}