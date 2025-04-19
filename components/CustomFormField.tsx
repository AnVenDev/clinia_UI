"use client"

import React from 'react';
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form';
import { FormFieldType } from './forms/PatientForm';
import Image from 'next/image';

interface CustomProps {
    control: Control<any>
    fieldType: FormFieldType
    name: string
    label?: string
    placeholder?: string
    iconSrc?: string
    iconAlt?: string
    disabled?: boolean
    dateFormat?: string
    showTimeSelect?: boolean
    children?: React.ReactNode
    renderSkeleton?: (field:any) => React.ReactNode
}

const RenderField = ({field, props}: {field:any; props:CustomProps}) => {
    const {fieldType, iconSrc, iconAlt, placeholder} = props;

    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className='flex rounded-md mt-2 border border-[var(--color-light-200)] bg-[var(--color-dark-400)]'>
                    {props.iconSrc && (
                        <Image 
                        src={iconSrc || 'SRC'}
                        alt={iconAlt || 'ICON'}
                        height={24}
                        width={24}
                        className='ml-2'/>
                    )}
                    <FormControl>
                        <Input 
                        placeholder={placeholder}
                        {...field}
                        className='shad-input border-0'/>
                    </FormControl>
                </div>
            )
        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput 
                    defaultCountry="IT"
                    placeholder={placeholder}
                    international
                    withCountryCallingCode
                    value={field.value as number | undefined}
                    onChange={field.onChange}
                    className="input-phone"
                    />
                </FormControl>
            )
        default:
            break;
    }
}

export const CustomFormField = (props: CustomProps) => {
    const {control, fieldType, name, label} = props;

    return (
        <FormField
              control={control}
              name={name}
              render={({ field }) => (
                <FormItem className='flex-1'>
                  {fieldType !== FormFieldType.CHECKBOX && label &&(
                    <FormLabel>{label}</FormLabel>
                  )}

                  <RenderField field={field} props={props}/>

                  <FormMessage className='shad-error'/>
                </FormItem>
              )}
        />
    )
}