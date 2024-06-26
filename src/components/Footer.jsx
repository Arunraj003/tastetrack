import React from "react";
import { FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Button from "./Button";

export const Footer = () => {
  return (
    <footer className="text-white py-20 bg_gradient " id="contact">
      <div className="container mx-auto px-20 lg:px-20 py-20 flex felx-col gap-10 md:flex-row justify-between border-1 border-slate-800 ">
        <div className="flex">
          <p className="font-bold text-center">
            Taste <span className="text-green-500 text-xl">Tracker</span>
          </p>
        </div>

        <div className="flex flex-col text-start mb-4 md:mb-0">
          <p>QUICK LINKS</p>

          <div className="text-start mb-4 md:mb-0 flex flex-col">
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Home
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              About
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Services
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Contact
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Chiefs
            </a>
          </div>
        </div>

        <div>
          <p>LEGAL</p>
          <div className="flex flex-col text-start mb-4 md:mb-0 text-[14px]">
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              License Agreement
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Copyright Information
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Cookies Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <p>SOCIAL MEDIA</p>
          <div className="flex mt-4 gap-3">
            <a
              href="#"
              className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-green-500 hover:scale-110"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="#"
              className="bg-pink-500 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-green-400 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="#"
              className="bg-red-600 p-1.5 rounded-sm text-white hover:scale-110"
            >
              <FaYoutube size={18} />
            </a>
          </div>

          <Button
            title="Sign up"
            btnType="button"
            containerStyle="mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px]"
          />
        </div>
      </div>

      <div className="flex items-center justify-center py-10">
        <span className="text-gray-400 leading-10">Arun Raj R &copy; 2024</span>
      </div>
    </footer>
  );
};
