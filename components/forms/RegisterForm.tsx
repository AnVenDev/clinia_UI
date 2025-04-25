"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import { CustomFormField } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useEffect, useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
import { FormFieldType } from "./PatientForm";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Doctors, GenderOptions, PatientFormDefaultValues } from "@/constants";
import { Label } from "../ui/label";
import { SelectItem } from "@/components/ui/select";
import Image from "next/image";

// PATIENT LOGIN FORM
export const RegisterForm = ({ user }: { user: User }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      ...PatientFormDefaultValues,
      name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    const subscription = form.watch((values) => {
      console.log("Form values:", values);
    });
    form.reset();
    return () => subscription.unsubscribe();
  }, [form]);

  // REGISTER FORM onSubmit
  const onSubmit = async ({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const userData = { name, email, phone };
      const user = await createUser(userData);

      if (user) router.push(`/patients/${user.$id}/register`);
    } catch (error) {
      console.log(error);
    }
  };

  // DEFINE FORM FIELD STRUCTURE
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-[var(--color-light-200)]"
      >
        <section className="mb-12 space-y-4">
          <h1 className="header">Welcome to Clina 👋</h1>
          <p className="text-dark-700">Let us know more about yourself.</p>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>
        </section>

        {/* FULL NAME INPUT */}
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          placeholder="Andrea Venè"
          label="Full Name"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
          {/* EMAIL INPUT */}
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="email"
            label="Email"
            placeholder="andrea_vene@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />

          {/* PHONE NUMBER INPUT */}
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.PHONE_INPUT}
            name="phone"
            label="Phone number"
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          {/* BIRTH DATE PICKER INPUT */}
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.DATE_PICKER}
            name="birthDate"
            label="Date of Birth"
          />

          {/* GENDER INPUT */}
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.SKELETON}
            name="gender"
            label="Gender"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  className="flex h-11 gap-6 xl:justify-between"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {GenderOptions.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Medical Information</h2>
          </div>
        </section>

        {/* PRIMARY CARE PHYSICIAN */}
        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="primaryPhysician"
          label="Primary care physician"
          placeholder="Select a physician"
        >
          {Doctors.map((doctor) => (
            <SelectItem key={doctor.name} value={doctor.name}>
              <div className="flex cursor-pointer items-center gap-2 text-white p-2">
                <Image
                  src={doctor.image}
                  width={32}
                  height={32}
                  alt={doctor.name}
                  className="rounded-full border border-dark-500"
                />
                <p>{doctor.name}</p>
              </div>
            </SelectItem>
          ))}
        </CustomFormField>

        <div className="flex flex-col gap-6 xl:flex-row">
          {/* ADDRESS */}
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="address"
            label="Address"
            placeholder="14th Street, NY"
          />

          {/* OCCUPATION */}
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="occupation"
            label="Occupation"
            placeholder="Software Engineer"
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          {/* EMERGENCY CONTACT NAME */}
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="emergencyContactName"
            label="Emergency contact name"
            placeholder="Guardian's name"
          />

          {/* EMERGENCY CONTACT NUMBER*/}
          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="emergencyContactNumber"
            label="Emergency contact number"
            placeholder="(555) 123-4567"
          />
        </div>

        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};
