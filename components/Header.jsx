'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Главная', href: '#' },
  { label: 'Продукт', href: '#product' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)
  const [isFirstScreen, setIsFirstScreen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const inactivityTimeout = useRef(null)

  // Показывать шапку на первом экране и при скролле вверх
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setIsFirstScreen(scrollY < window.innerHeight * 0.7)
      // Появление при скролле вверх или в самом верху
      if (scrollY < lastScroll || scrollY < 10) {
        setVisible(true)
      } else {
        setVisible(false)
      }
      setLastScroll(scrollY)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScroll])

  // Скрывать шапку при бездействии
  useEffect(() => {
    const onActivity = () => {
      setVisible(true)
      clearTimeout(inactivityTimeout.current)
      inactivityTimeout.current = setTimeout(() => {
        setVisible(false)
      }, 2000) // 2 секунды бездействия
    }
    window.addEventListener('mousemove', onActivity)
    window.addEventListener('keydown', onActivity)
    window.addEventListener('touchstart', onActivity)
    return () => {
      window.removeEventListener('mousemove', onActivity)
      window.removeEventListener('keydown', onActivity)
      window.removeEventListener('touchstart', onActivity)
      clearTimeout(inactivityTimeout.current)
    }
  }, [])

  // Блокировка скролла при открытом мобильном меню
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Всегда показывать на первом экране
  const showHeader = visible || isFirstScreen

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } bg-[#101829] py-[0.207vw] px-[0.414vw] md:px-[0.828vw] max-md:flex max-md:mb-[8.14vw]`}
    >
      <div className="mx-auto flex items-center justify-between max-md:mx-[0]">
        {/* Логотип */}
        <div className="flex items-center mt-[0.56vw] mb-[1vw]">
          <img
            src="./img/icons/Logo.svg"
            alt="Логотип"
            className="h-[5.28vww] w-[5.63vw] object-contain ml-[2.4vw] max-md:w-[15.01vw] max-md:h-[13.99vw] max-md:mt-[1.78vw] max-md:ml-[5.09vw]"
          />
        </div>
        {/* Навигация */}
        <nav className="hidden md:flex space-x-[2.78vw]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[1.042vw] font-bebas-regular transition-colors ${
                pathname === item.href
                  ? 'text-[#B47A4C]'
                  : 'text-white hover:text-[#B47A4C]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        {/* Кнопка */}
        <div className="hidden md:block">
          <a
            href="#Form"
            className="bg-[#293A54]  text-white mr-[3.19vw] px-[1.67vw] py-[0.83vw] rounded-full mt-rounded-[9.07vw] text-[1.39vw] max-md-[4.53vw] font-bebas-regular hover:bg-[#2c3a5a] transition-colors"
          >
            Связаться
          </a>
        </div>
        {/* Бургер-меню для мобилки */}
        <button
          className="hidden max-md:flex max-md:ml-[64.12vw] max-md:mt-[3.31vw]"
          aria-label="Открыть меню"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg className='max-md:w-[10.69vw] md:w-[7.2vw] max-md:h-[10.69vw] md:h-[7.2vw]' xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path d="M36.75 13.5625H5.25C4.5325 13.5625 3.9375 12.9675 3.9375 12.25C3.9375 11.5325 4.5325 10.9375 5.25 10.9375H36.75C37.4675 10.9375 38.0625 11.5325 38.0625 12.25C38.0625 12.9675 37.4675 13.5625 36.75 13.5625Z" fill="white"/>
            <path d="M36.75 22.3125H5.25C4.5325 22.3125 3.9375 21.7175 3.9375 21C3.9375 20.2825 4.5325 19.6875 5.25 19.6875H36.75C37.4675 19.6875 38.0625 20.2825 38.0625 21C38.0625 21.7175 37.4675 22.3125 36.75 22.3125Z" fill="white"/>
            <path d="M36.75 31.0625H5.25C4.5325 31.0625 3.9375 30.4675 3.9375 29.75C3.9375 29.0325 4.5325 28.4375 5.25 28.4375H36.75C37.4675 28.4375 38.0625 29.0325 38.0625 29.75C38.0625 30.4675 37.4675 31.0625 36.75 31.0625Z" fill="white"/>
          </svg>
        </button>
      </div>
      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="fixed max-md:h-[1000vw] inset-0 z-50 bg-[#101829] flex flex-col px-[7vw] pt-[7vw] animate-fade-in">
          <button
            className="self-end text-white text-[6vw] mb-[8vw]"
            aria-label="Закрыть меню"
            onClick={() => setMobileMenuOpen(false)}
          >
            &#10005;
          </button>
          <nav className="flex flex-col gap-[4vw] mt-[2vw]">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white text-[4.5vw] border-b border-[#232B3A] pb-[3vw]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}