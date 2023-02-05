import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "@/typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

function ContactMe({pageInfo}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:sawan8492@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-xl md:text-4xl md:font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#2878B8]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-5 md:space-y-10">
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <PhoneIcon className="text-[#2878B8] animate-pulse h-5 md:h-7" />
            <p className="md:text-2xl">{pageInfo?.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <EnvelopeIcon className="text-[#2878B8] animate-pulse h-7 w-7" />
            <p className="md:text-2xl">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <MapPinIcon className="text-[#2878B8] animate-pulse h-7 w-7" />
            <p className="md:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 md:w-fit mx-auto md:items-stretch"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-80"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-80"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#2878B8] py-2 md:py-5 md:px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
