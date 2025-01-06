import { FormFieldEnum } from "@/components/form/CustomForm";
import { Control } from "react-hook-form";

export interface CustomProps {
    control?: Control<any>;
    name: string;
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    className?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field: any) => React.ReactNode;
    fieldType: FormFieldEnum;
}

export interface SubmitBtnProps {
    isLoading?: boolean;
    className?: string;
    children: React.ReactNode;
}