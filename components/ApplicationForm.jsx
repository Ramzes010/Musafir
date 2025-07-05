import React, { useState } from "react";
import dynamic from 'next/dynamic';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });

export default function ApplicationForm() {
  const [phone, setPhone] = useState("");

  return (
    <div className="w-[93.61vw] h-[30.21vw] bg-[#293A54] rounded-[1.67vw] pt-[6.53vw] pl-[6.25vw] ml-[3.19vw] text-white flex max-w-full relative top-[14vw]
    max-md:top-[20vw] max-md:flex-col max-md:w-[100vw] max-md:h-[155.47vw] max-md:ml-[0] max-md:rounded-[6.11vw] max-md:mb-[15.27vw]">
      <div className="w-1/2 max-md:w-full pr-2.78vw">
        <h2 className="text-[4.86vw] BNB-font leading-[4.86vw] max-md:leading-[10vw] max-md:w-full mb-[1.67vw] max-md:text-[10.43vw] max-md:mb-[2.54vw]">
          Оставьте заявку —<br /> мы свяжемся с вами
        </h2>
        <p className=" text-[1.25vw] text-[#BBBBC7] leading-[2.01vw] font-thin OS-front
        max-md:text-[3.82vw] max-md:leading-[5.01vw] max-md:mb-[7.63vw]">
          Мы ответим на ваши вопросы, подберём оптимальные <br className="max-md:hidden"></br>
          условия поставки и расскажем о партнёрстве. Просто <br className="max-md:hidden"></br>
          заполните форму — и <br className="hidden max-md:block"></br> наша команда свяжется с вами в <br className="max-md:hidden"></br> ближайшее время.
        </p>
      </div>

      {/* Замените action на ваш Formspree endpoint! */}
      <form
        action="https://formspree.io/f/xqabjknb" 
        method="POST"
        className="w-1/2 space-y-4 max-md:w-full"
      >
        <input
          type="text"
          name="name"
          placeholder="ФИО"
          className="w-[40.9vw] h-[3.89vw] px-[1.39vw] mb-[1.67vw] rounded-full bg-[#FFFFFF] text-[#585E77] placeholder-[#585E77]
                    max-md:w-[89.82vw] max-md:h-[12.72vw] max-md:px-[4.33vw] max-md:py-[3.82vw] max-md:text-[3.56vw] max-md:mb-[5.34vw]"
          required
        />
        <div className="flex mb-0 max-md:flex-col">
          <div className="w-[20.14vw]">
            <PhoneInput
              country={'ru'}
              value={phone}
              onChange={setPhone}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false,
                placeholder: '(999) 999 99 99',
                className: 'w-full h-[3.89vw] rounded-full bg-[#FFFFFF] text-[#585E77] text-[1.25vw] pl-[4vw] placeholder-[#585E77] max-md:w-[89.82vw] max-md:h-[12.72vw] max-md:px-[4.33vw] max-md:py-[3.82vw] max-md:text-[3.56vw] max-md:mb-[5.34vw]'
              }}
              buttonStyle={{
                border: 'none',
                background: 'transparent',
                marginLeft: '0vw',
                paddingLeft: '1vw',
                borderRadius: '9999px',
              }}
              dropdownStyle={{
                borderRadius: '1vw',
                fontSize: '1vw',
              }}
              containerStyle={{
                borderRadius: '9999px',
                background: '#fff',
              }}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-[20.14vw] h-[3.89vw] px-[1.39vw] rounded-full bg-[#FFFFFF] text-[#585E77] ml-[0.63vw] placeholder-[#585E77]
            max-md:w-[89.82vw] max-md:h-[12.72vw] max-md:px-[4.33vw] max-md:py-[3.82vw] max-md:text-[3.56vw] max-md:mb-[5.34vw]"
            required
          />
        </div>
        <button
          type="submit"
          className="w-[40.9vw] h-[3.89vw] mt-[1.67vw] mb-[0.83vw] bg-[#B47A4C] text-white  text-[1.39vw] cursor-pointer rounded-full
                    max-md:w-[89.82vw] max-md:h-[12.72vw] max-md:px-[4.33vw] max-md:py-[1.82vw] max-md:text-[5.09vw] max-md:mb-[5.34vw]"
        >
          Отправить заявку
        </button>
        <label className="flex items-center cursor-pointer select-none max-md:mb-[7.63vw]">
          <input
            type="checkbox"
            className="peer sr-only "
            required
          />
          <span className="w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center peer-checked:bg-blue-500 ">
            <svg
              className="w-[1.5vw] h-[1.5vw] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none
              max-md:w-[4vw] max-md:h-[2vw]"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="ml-[0.7vw] text-[1.04vw] mt-[0.83vw] OSL-font max-md:text-[3vw] max-md:ml-[2vw]">
            Нажимая на кнопку, я согласен с обработкой своих персональных <br className="max-md:hidden"/>
            данных и политикой обработки <br className="hidden max-md:block"/> персональных данных.
          </span>
        </label>
      </form>
    </div>
  );
}
