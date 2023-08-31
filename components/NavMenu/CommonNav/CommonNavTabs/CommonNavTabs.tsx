import { useState } from 'react';
import { useRouter } from 'next/router';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import commonNav from '@/data/commonNav.json';

export default function CommonNavTabs() {
    const router = useRouter();
    const initialValue = commonNav.links.findIndex(link => link.linkAddress === router.pathname);
    
    const [value, setValue] = useState<number>(initialValue);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        router.push(commonNav.links[newValue].linkAddress)
    };
    
    const elements = commonNav.links.map(link => <Tab label={link.linkLabel} />)
    return (
        <Tabs id="nav-tabs" value={value} onChange={handleChange}>
            {elements}
        </Tabs>);
}