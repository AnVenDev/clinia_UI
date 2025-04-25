import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params }: SearchParamProps) => {
  const prms = await params;
  const userId = prms.userId;
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen justify-between">
      {/* Login Page Left Side */}
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 Healthcare Ai Powered</p>
        </div>
      </section>

      {/* Login Page Right Side */}
      <Image
        src="/assets/images/register-img.png"
        width={1000}
        height={1000}
        alt="patient"
        className="side-img max-w-[30%]"
      />
    </div>
  );
};

export default Register;
