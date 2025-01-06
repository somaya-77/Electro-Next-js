"use client"

import { FiSearch } from "react-icons/fi";
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { emailFooterSchema } from '@/lib/validation/validationSchema'
import { emailFooterValue } from '@/lib/validation/defaultValues'
import CustomForm, { FormFieldEnum } from './CustomForm'
import SubmitButton from './SubmitButton'

const InputButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof emailFooterSchema>>({
        resolver: zodResolver(emailFooterSchema),
        defaultValues: emailFooterValue,
    })

    const onSubmit = async ({ email }: z.infer<typeof emailFooterSchema>) => {
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex justify-end'>
                <div className="flex items-start w-full">
                    <CustomForm
                        fieldType={FormFieldEnum.INPUT}
                        control={form.control}
                        name="email"
                        placeholder="Search..."
                        className='input-rounded'
                    />

                    <SubmitButton className='btn' isLoading={isLoading}><FiSearch /></SubmitButton>
                </div>
            </form>
        </Form>

    )
}

export default InputButton