import {ReactNode} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Button from '../shared/Button/Button';

import type { StaticImageData } from 'next/dist/shared/lib/get-img-props';

import Priorin from '@/public/assets/img/shop/priorin-1.jpg';
import Priorin_1 from '@/public/assets/img/shop/priorin-2.jpg';

interface ShoppingCardProps {
    headerText: string;
    shortText: string;
    fullText?: string;
    course: string;
    price: number;
    imageLinks: StaticImageData[];
    cardClickHandler: (text: string, images: ReactNode[]) => void;
}

export default function ShoppingCard({headerText, shortText, fullText, course, price, imageLinks, cardClickHandler}: ShoppingCardProps) {
    const router = useRouter();

    const clickHandler = () => router.push('/contacts');
    
    const images = imageLinks.map((image, idx) => {
      return (
        <div key={`${idx}`} className="keen-slider__slide">
          <Image src={image} alt={headerText} />
        </div>
      );
    });

    return (
        <li className='p-2 border border-brand rounded-lg'>
            <div className='relative w-full h-[300px] mb-2 rounded-lg overflow-hidden'>
              <Image className='object-cover' fill sizes='' priority src={imageLinks[0]} alt={shortText} />
            </div>
            <p className='text-brand text-xl font-semibold'>{headerText}</p>
            <p className='mb-2 font-bold'>{shortText}</p>
            <p>Курс: {course}</p>
            <p className='mb-4'>Ціна: <span className='text-brand text-lg'>{price}</span> грн</p>
            <div className='grid grid-cols-2 gap-x-4'>
              <Button text='Докладніше' type='button' styles='p-4 text-white' onClick={() => cardClickHandler(fullText!, images)} />
              <Button text='Замовити' type='button' styles='p-2 text-white' onClick={clickHandler} />
            </div>
        </li>
    );
}