import { wix } from '@/public/fonts/fonts';
import prices from '@/data/prices.json';

export default function Prices() {
    const tableHeads = prices.tableHeads.map(head => <th className='p-2 bg-brand md:text-2xl'>{head.text}</th>);
    const tableContent = prices.tableContent.map(item => {
        return (
            <tr>
                <td className='p-2 bg-pale md:text-xl'>{item.service}</td>
                <td className='p-2 text-center bg-slate-200 md:text-xl'>{item.price}</td>
            </tr>
        );
    })
    return (
        <table className={`${wix.className} pb-3 lg:mx-auto table-auto border-separate border-spacing-px`}>
            <thead>
            <tr>
                {tableHeads}
            </tr>
            </thead>
            <tbody>
                {tableContent}
            </tbody>
            </table>
    );
}