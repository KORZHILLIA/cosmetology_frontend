import {useState, useEffect, ReactNode} from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Shopping } from '@/sections/Shopping/Shopping';
import ModalWindow from '@/components/shared/ModalWindow/ModalWindow';
import Slider from '@/components/shared/Slider/Slider';
import Button from '@/components/shared/Button/Button';

export default function ShopPage() {
    const [isModalWindowShown, setIsModalWindowShown] = useState<boolean>(false);
    const [images, setImages] = useState<ReactNode[]>([]);
    const [modalText, setModalText] = useState<string>('');

    const openModalWindow = (text: string, images: ReactNode[]) => {
        setIsModalWindowShown(true);
        setImages(images);
        setModalText(text);
    }

    const closeModalWindow = () => {
        setIsModalWindowShown(false);
        setModalText('');
    }

    return (
        <>
            <Head>
                <title>Крамничка</title>
            </Head>
            <Shopping modalWindowToggler={openModalWindow} />
            {isModalWindowShown && <ModalWindow onClose={closeModalWindow}>
                <div className='w-[280px] p-4 bg-brand rounded-lg'>
                    <Slider>{images}</Slider>
                    <div className='mt-4'>
                      <p className='mb-4 dark:text-semiPale'>{modalText}</p>
                      <Link href='/contacts'>
                        <Button text='Замовити' type='button' centered styles='p-4 text-white border border-2' />
                      </Link>
                    </div>
                </div>
                </ModalWindow>}
        </>
    );
}