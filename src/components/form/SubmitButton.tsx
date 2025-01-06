import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { SubmitBtnProps } from '@/types'

const SubmitButton = ({ isLoading, className, children }: SubmitBtnProps) => {
    return (
        <Button type='submit' disabled={isLoading} className={className}>
            {isLoading ? (<div className='flex items-center gap-4'>
                <Image src="/assets/icons/loader.svg"
                    alt='loader'
                    width={20}
                    height={20}
                    className='animate-spin'
                />
                Sending...
            </div>) : (children)}
        </Button>
    )
}

export default SubmitButton;
