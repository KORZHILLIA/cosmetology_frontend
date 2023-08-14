import SpinnerIcon from '@/public/assets/svg/spinner.svg';

export default function Spinner() {
    return <div className='fixed w-[36px] md:w-[52px] xl:w-[80px] h-[36px] md:h-[52px] xl:h-[80px] top-[50%] left-[50%] -transform-x-[50%] -transform-y-[50%] fill-brand z-10'>
        <SpinnerIcon className='animate-spin'/>
    </div>
}