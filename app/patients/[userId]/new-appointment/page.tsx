import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

const NewAppointment = () => {
  return (
    <div className="flex h-screen max-h-screen">
      {/* Login Page Left Side */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm />

          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 Healthcare Ai Powered
          </p>
        </div>
      </section>

      {/* Login Page Right Side */}
      <Image
        src="/assets/images/appointment-img.png"
        width={1000}
        height={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default NewAppointment;
