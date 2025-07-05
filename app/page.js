"use client"
import Header from '../components/Header'
import InfiniteRibbon from '../components/InfiniteRibbon';
import LogoSlider from "../components/LogoSlider";
import ApplicationForm from "../components/ApplicationForm";
import { Fragment } from 'react';

const scrollToAbout = (e) => {
  e.preventDefault();
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
};

const scrollToAbout2 = (e) => {
  e.preventDefault();
  const aboutSection = document.getElementById('Form');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
};

export default function HomePage() {
  const brandImages = [
    '/img/logo-1.svg',
    '/img/logo-2.svg',
    '/img/logo-3.svg',
    '/img/logo-4.svg',
    '/img/logo-5.svg',
    '/img/logo-6.svg'
  ];

  const cardsData = [
    {
      bgImage: 'bgCardUp.svg',
      value: '12+',
      text: 'Лет на рынке продуктов и напитков.| С 2013 года работаем как надёжный | поставщик.',
      separator: '|',
      pt: '3.56vw'
    },
    {
      bgImage: 'bgCardDown.svg',
      value: '6',
      text: 'Регионов охвата по России и СНГ.| Склады в Грозном, Крыму,| Астрахани, Дагестане, Ингушетии,| Херсонской области',
      separator: '|',
      pt: '0.51vw'
    },
    {
      bgImage: 'bgCardUp.svg',
      value: '20',
      text: 'Автомобилей в собственной | логистике. Обеспечиваем доставку | без задержек по всем | направлениям',
      separator: '|',
      pt: '3.56vw'
    },
    {
      bgImage: 'bgCardDown.svg',
      value: '300+',
      text: 'Сотрудников и 6 супермаркетов | «Мусафир». | Растущая сеть и команда | профессионалов.',
      separator: '|',
      pt: '0.51vw'
    }
  ];

  const cardsDataMob = [
    {
      bgImage: 'bgCardUpMob.svg',
      value: '12+',
      text: 'Лет на рынке продуктов и напитков.| С 2013 года работаем как надёжный | поставщик.',
      separator: '|',
      ptMobile: '8vw',
      ptW: '10vw',
      pt: '12.21vw',
    
    },
    {
      bgImage: 'bgCardDownMob.svg',
      value: '6',
      text: 'Регионов охвата по России и СНГ.| Склады в Грозном, Крыму,| Астрахани, Дагестане, Ингушетии,| Херсонской области',
      separator: '|',
      
    },
    {
      bgImage: 'bgCardUpMob.svg',
      value: '20',
      text: 'Автомобилей в собственной | логистике. Обеспечиваем доставку | без задержек по всем | направлениям',
      separator: '|',
      ptMobile: '6vw',
      ptW: '4vw',
      pt: '12.21vw',
      
    },
    {
      bgImage: 'bgCardDownMob.svg',
      value: '300+',
      text: 'Сотрудников и 6 супермаркетов | «Мусафир». | Растущая сеть и команда | профессионалов.',
      separator: '|',
      
    }
  ];

  const warehouses = [
    { name: 'Дагестан' },
    { name: 'Ингушетия' },
    { name: 'Астрахань' },
    { name: 'Мелитополь' },
    { name: 'Херсонской&nbsp;область', customClass: 'whitespace-nowrap' },
    { name: 'Крым' }
  ];

  return (
    <>
      <Header />
      <div className='manSection '>
        
        <div className=' mt-[4.84vw] ml-[2.4vw] flex items-center max-md:text-center  max-md:flex-col mt-[8vw] max-md:mt-[20vw]'>
          <span className=' max-md:text-[10.43vw] main_title'>Поставки продуктов и</span> 
          <div className='ml-[3.65vw]'>
            <span className='text-[1.67vw] tracking-wide leading-tight text-[#BBBBC7] max-md:hidden'>Широкий ассортимент, логистика <br></br> по всей стране и условия,<br></br> выгодные для опта.</span> 
          </div>
        </div>
        <div className='relative bottom-[2.5vw] ml-[2.4vw] flex items-center max-md:flex-col max-md:text-center'>
          <span className='main_title mr-[5.4vw] max-md:mr-[0.4vw]'>Напитков по всей России</span> 
          <div className='ml-[3.65vw] max-md:mt-[2.54vw] max-md:mb-[7.63vw] hidden max-md:block'>
            <span className='text-[1.67vw] tracking-wide text-[#BBBBC7] max-md:text-[3.82vw]'>Широкий ассортимент, логистика по всей <br></br> стране и условия, выгодные для опта.</span> 
          </div>
          <div className='flex justify-center px-[1.81vw] max-md:px-[3.56vw] max-sm:px-[5.02vw] py-[1.39vw] max-sm:py-[5.02vw] max-md:py-[3.82vw] bg-[#B47A4C] items-center rounded-[4.17vw] max-md:rounded-[8.91vw] cursor-pointer'>
            <span onClick={scrollToAbout} className='0.83vw text-white text-[2.08vw] mr-[0.83vw] max-md:mr-[1.53vw] max-md:text-[7.63vw] '>Подробнее</span>
            <img className='w-[3.33vw] max-sm:w-[9.24vw] max-md:w-[6.87vw] h-[3.33vw] max-sm:h-[9.24vw] max-md:h-[6.87vw]' alt='arrow' src='/img/icons/arrow.svg'></img>
          </div>
        </div>
        <img className='w-[93.8vw] max-md:w-[89.82vw] h-[38.47vw] max-md:h-[47.33vw] mb-[6.94vw] ml-[2.4vw] max-md:ml-[5.09vw] max-md:mt-[8.14vw]' alt='arrow' src='/img/main_block.png'></img>
        </div>

        <InfiniteRibbon />

        <div className='flex mr-[10.42vw] ml-[2.4vw] mt-[10.42vw] max-md:mt-[12.72vw] max-md:flex-col'>
          <span id="about" className='title mr-[8.37vw] relative bottom-[2.6vw] max-md:bottom-[0] max-md:mb-[2.54vw]  max-md:ml-[5.09vw] max-md:text-[10.43vw]'>О КОМПАНИИ</span>
          <div className=' max-md:ml-[5vw]'>
            <span className='text-[1.67vw] text-[#BBBBC7] relative left-[7.9vw] max-md:left-[0] max-md:text-[3.82vw]'>Сервисторг — это динамично  развивающаяся <br className='hidden max-md:block'></br> компания <br className='max-md:hidden'></br>
            в России,  специализирующаяся на оптовой и  розничной <br className='max-md:hidden'></br>
            торговле продуктами  питания и напитками. Компания <br className='max-md:hidden'></br>
            работает на рынке более 12  лет и входит в пятёрку <br className='max-md:hidden'></br>
            крупнейших  предприятий юга России. Её ежегодный<br className='max-md:hidden'></br>
            оборот стабильно растёт,  а клиентская база расширяется.</span>
            </div>
          

        </div>
        {/* cardsData */}
        <div className='flex mt-[4.17vw] max-md:hidden'>
          {cardsData.map((card, index) => (
            <div 
              key={index}
              style={{
                marginLeft: index === 0 ? '2.31vw' : '1.01vw',
                backgroundImage: `url(/img/${card.bgImage})`,
                paddingTop: card.pt
              }}
              className='bg-no-repeat bg-cover bg-center w-[22.8vw] h-[21.5vw] max-lg:h-auto max-lg:pt-auto text-center'
            >
              <span className='BNB-font text-[5.56vw]'>{card.value}</span>
              <div className='text-center'>
                <span className='OS-front text-[#BBBBC7] text-[1.04vw] font-medium leading-normal max-lg:leading-tight'>
                {card.text.split(card.separator).map((line, i) => (
                <Fragment key={i}>
                  {line}
                  {i < card.text.split(card.separator).length - 1 && <br className="mb-[-0.9vw]"/>}
                </Fragment>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* mobile */}
        <div className='hidden mt-[4.17vw] max-md:flex max-md:flex-col max-md:ml-[3.09vw]'>
          {cardsDataMob.map((card, index) => (
            <div 
              key={index}
              style={{ '--pt': card.pt, '--pt-mobile': card.ptMobile, '--pt-w': card.ptW,
                marginLeft: index === 0 ? '2.31vw' : '1.01vw',
                backgroundImage: `url(/img/${card.bgImage})`,
              }}
              className=' pt-[var(--pt)] max-[437px]:pt-[var(--pt-mobile)] max-[1024px]:pt-[var(--pt-w)] bg-no-repeat bg-cover bg-center w-[22.8vw] h-[21.5vw] max-md:pt-[] text-center max-md:w-[89.82vw] max-md:h-[56.74vw] max-md:mb-[3.82vw]'
            >
              <span className='BNB-font text-[5.56vw] max-md:text-[15.27vw]  max-md:mb-[1.53vw]'>{card.value}</span>
              <div className='text-center'>
                <span className='OS-front text-[#BBBBC7] text-[1.04vw] max-md:text-[2.8vw] max-md:leading-[-1vw] font-medium '>
                {card.text.split(card.separator).map((line, i) => (
                <Fragment key={i}>
                  {line}
                  {i < card.text.split(card.separator).length - 1 && <br className="mb-[-0.9vw] max-md:mb-[-3vw]"/>}
                </Fragment>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
           {/* cardsData */}
            <div className='flex mt-[10.05vw] max-md:mt-[15.27vw] ml-[2.31vw] items-center max-md:flex-col'>
              <div className='max-md:text-start '>
                <div className='main_title  mr-[-12.1vw] max-md:mr-[18.1vw] min-w-[68.89vw] max-md:min-w-auto max-md:text-[10.43vw] '>Логистика компании</div>
                <div className='max-md:mb-[5.09vw]'>
                  <span className='OS-front text-[#BBBBC7] text-[1.21vw] max-md:text-[3.82vw]'>20 транспортных единиц и собственная <br className='hidden max-md:block'></br> команда. <br className='max-md:hidden'></br> Логистика — это то, что мы  <br className='hidden max-md:block'></br> контролируем сами.</span>
                </div>
              </div>
              <div className='flex flex-col items-end max-md:items-start relative top-[3vw]'>
                <div className='flex mb-[0.9vw] max-md:mb-[3.05vw]'>
                  <div className='flex items-center text-[1.22vw] max-md:text-[2.8vw] text-[#BBBBC7] py-[0.75vw] max-md:py-[2.29vw] px-[1.21vw] max-md:px-[3.82vw] border-[0.05vw] border-white rounded-[1.91vw] max-md:rounded-[5.6vw] mr-[0.5vw] max-md:mr-[1.53vw]'><img className='mr-[0.35vw] max-md:mr-[1.53vw] max-md:mr-[1.53vw] w-[1.26vw] max-md:w-[3.82vw] h-[1.26vw] max-md:h-[3.82vw]' src='/img/icons/iocn_car.svg'></img> Отгрузка и доставка</div>
                  <div className='flex items-center text-[1.22vw] max-md:text-[2.8vw] text-[#BBBBC7] py-[0.75vw] max-md:py-[2.29vw] px-[1.21vw] max-md:px-[3.82vw] border-[0.05vw] border-white rounded-[1.91vw] max-md:rounded-[5.6vw]'><img className='mr-[0.35vw] max-md:mr-[1.53vw] w-[1.26vw] max-md:w-[3.82vw] h-[1.26vw] max-md:h-[3.82vw]' src='/img/icons/icon_calc.svg'></img> Комплектация и учёт</div>
                </div>
                <div className='flex max-md:mb-[7.63vw]'>
                  <div className='flex items-center text-[1.22vw] max-md:text-[2.8vw] text-[#BBBBC7] py-[0.75vw] max-md:py-[2.29vw] px-[1.21vw] max-md:px-[3.82vw] border-[0.05vw] border-white rounded-[1.91vw] max-md:rounded-[5.6vw] mr-[0.5vw] max-md:mr-[1.53vw]'><img className='mr-[0.35vw] max-md:mr-[1.53vw] w-[1.26vw] max-md:w-[3.82vw] h-[1.26vw] max-md:h-[3.82vw]' src='/img/icons/icon_box.svg'></img> Приём и хранение товара</div>
                  <div className='flex items-center text-[1.22vw] max-md:text-[2.8vw] text-[#BBBBC7] py-[0.75vw] max-md:py-[2.29vw] px-[1.21vw] max-md:px-[3.82vw] border-[0.05vw] border-white rounded-[1.91vw] max-md:rounded-[5.6vw]'><img className='mr-[0.35vw] max-md:mr-[1.53vw] w-[1.26vw] max-md:w-[3.82vw] h-[1.26vw] max-md:h-[3.82vw]' src='/img/icons/icon_screw.svg'></img> Контроль на всех этапах</div>
                </div>
              </div>
            </div>

            <div className='flex mt-[3.47vw] ml-[2.1vw] max-md:ml-[5.09vw] mb-[13.89vw] max-md:flex-col'>
              <img className='w-[30.5vw] max-md:w-[89.82vw] h-[28.61vw] max-md:h-[62.34vw] max-md:mb-[5.09vw] mr-[1.39vw]' src='/img/image_1.png'></img>
              <img className='w-[30.5vw] max-md:w-[89.82vw] h-[28.61vw] max-md:h-[62.34vw] max-md:mb-[5.09vw] mr-[1.39vw]' src='/img/image_2.png'></img>
              <img className='w-[30.5vw] max-md:w-[89.82vw] h-[28.61vw] max-md:h-[62.34vw] max-md:mb-[] ' src='/img/image_3.png'></img>
            </div>

            <div id='product' className='mb-[3.47vw] max-md:ml-[5.09vw]'>
              <span className='title text-[6.94vw] ml-[3.19vw] max-md:ml-[0] max-md:text-[10.43vw] max-md:leading-[10vw]'>Нам доверяют <br className='hidden max-md:block'></br> мировые бренды</span>
              <div className='ml-[3.19vw] max-md:ml-[0] max-md:mt-[3.82vw] max-md:mb-[8.14vw]'>
                <span className='OS-front text-[#BBBBC7] text-[1.67vw] max-md:text-[3.82vw]'>Сервисторг сотрудничает с мировыми производителями напитков, такими как: <br></br> Pepsico Holdings, Redbull, Borjomi, Lotte и другими.</span>
              </div>
            </div>

            <LogoSlider />

            <div className='mt-[13.89vw] max-md:ml-[5.09vw]'>
              <span className='title text-[6.94vw] ml-[3.19vw] max-md:ml-[0] max-md:text-[10.43vw]  max-md:leading-[10vw]'>Широкая  <br className='hidden max-md:block'></br> география</span>
              <div className='ml-[3.19vw] max-md:ml-[0] max-md:mt-[2.54vw] max-md:mb-[8.14vw]'>
                <span className='OS-front text-[1.67vw] text-[#BBBBC7] max-md:text-[3.82vw]  '>Компания начала свою деятельность в 2013 <br className='hidden max-md:block'></br> году с одного  оптового склада в <br className='max-md:hidden'></br> Грозном. С <br className='hidden max-md:block'></br> 2020 года компания открыла первый <br className='hidden max-md:block'></br> супермаркет  &ldquo;Мусафир&rdquo; в  <br className='max-md:hidden'></br> Чеченской <br className='hidden max-md:block'></br> Республике и за 3 года открыла ещё  5 <br className='hidden max-md:block'></br> супермаркетов.</span>
              </div>
            </div>

            <div className='planetBG w-full h-[51.18vw] mt-[3.89vw] pt-[3.47vw] max-md:hidden'> 
              <div className='OS-front text-[2.5vw] font-bold ml-[3.19vw] mb-[1.04vw]'>Наши склады</div>
              
              {warehouses.map((item, index) => (
                <div key={index} className='flex flex-col ml-[3.19vw]'>
                  <div className='bg-[#293A54] w-[15.63vw] rounded-[0.42vw] mb-[0.83vw]'>
                    <div className='bg-[#B47A4C] w-[0.59vw] h-[2.92vw] rounded-[1.04vw]'>
                      <div 
                        className={` text-[1.39vw] Jost-font ml-[1.35vw] pt-[0.5vw] ${item.customClass || ''}`}
                        dangerouslySetInnerHTML={{ __html: item.name }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* mobile */}

            <div className='hidden planetBGM w-full max-md:w-[100vw] h-[117.81vw] max-md:h-[] mt-[3.89vw] pt-[3.47vw] max-md:block'> 
              <div className='OS-front text-[2.5vw] max-md:text-[5.85vw] font-bold ml-[3.19vw] max-md:ml-[6.11vw] mb-[1.04vw]'>Наши склады</div>
              
              {warehouses.map((item, index) => (
                <div key={index} className='flex flex-col ml-[3.19vw] max-md:ml-[6.11vw]'>
                  <div className='bg-[#293A54] w-[15.63vw] max-md:w-[28.24vw] rounded-[0.42vw] max-md:rounded-[0.76vw] mb-[0.83vw]'>
                    <div className='bg-[#B47A4C] w-[0.59vw] max-md:w-[0.94vw] h-[2.92vw] max-md:h-[5.09vw] rounded-[1.04vw]'>
                      <div 
                        className={` text-[1.39vw] max-md:text-[2.54vw] Jost-font ml-[1.35vw] max-md:ml-[3.05vw] pt-[0.5vw] ${item.customClass || ''}`}
                        dangerouslySetInnerHTML={{ __html: item.name }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            

            <div className=' mt-[13.89vw] max-md:mt-[17.81vw]'>
              <span className='title text-[6.94vw] max-md:text-[10.43vw] ml-[3.19vw] max-md:mb-[2.54vw] '>История роста</span>
              <div className='ml-[3.19vw] mb-[2.6vw] max-md:mb-[8.14vw]'>
                <span className='text-[1.67vw] max-md:text-[3.82vw] text-[#BBBBC7] OS-front '>
                  С 2013 года мы работаем на рынке безалкогольных напитков. С самого начала <br></br> 
                  зарекомендовали себя как надёжный и проверенный партнёр в Чеченской <br></br> 
                  Республике. В 2015 году начали расширение в Республику Дагестан, в 2017 году <br></br> 
                  — в Республику Ингушетия, в 2018 году — на территорию Крыма, в 2020 году — в <br></br>
                  Астрахань, и в 2023 году — в Херсонскую область.
                </span>
              </div>

              <div className='flex ml-[3.19vw] max-md:ml-[5.09vw] mt-[1.39vw] mb-[13.89vw] max-md:flex-col'>
                <img src='/img/image_4.png' className='w-[22.36vw] max-md:w-[89.82vw] h-[25vw] max-md:h-[67.43vw] max-md:mb-[5.09vw] mr-[1.39vw]'></img>
                <img src='/img/image_5.png' className='w-[22.36vw] max-md:w-[89.82vw] h-[25vw] max-md:h-[67.43vw] max-md:mb-[5.09vw] mr-[1.39vw]'></img>
                <img src='/img/image_6.png' className='w-[22.36vw] max-md:w-[89.82vw] h-[25vw] max-md:h-[67.43vw] max-md:mb-[5.09vw] mr-[1.39vw]'></img>
                <img src='/img/image_7.png' className='w-[22.36vw] max-md:w-[89.82vw] h-[25vw] max-md:h-[67.43vw] '></img>
              </div>
            </div>


            <div className='bg-[#293A54] py-[2.43vw] max-md:py-[7.63vw]'>
              <div className='flex justify-between items-center max-md:items-start max-md:flex-col'>
                <div>
                  <span className='title text-[6.94vw] ml-[3.19vw]'>НАШИ ПЛАНЫ</span>
                  <div className='ml-[3.19vw] max-md:mb-[5.09vw]'>
                    <span className='text-[#DEDEE8] max-md:text-[#BBBBC7] text-[1.67vw] max-md:text-[3.82vw]'>Мыставим перед собой цель к 2030 году стать <br></br> компанией №1 в России по продаже <br></br> безалкогольных напитков и продуктов <br className='hidden max-md:block'></br> питания.</span>
                  </div>
                </div>
              <div className='mr-[3.19vw] max-md:ml-[5.09vw] max-md:mb-[7.63vw]'>
                <img src='/img/image_8.png' className='w-[40.97vw] max-md:w-[89.82vw] h-[23.47vw] max-md:h-[51.4vw]'></img>
              </div>
              </div>
            </div>

            <div className='mt-[13.89vw] max-md:mt-[17.81vw] max-md:mb-[5.09vw]'>
              <span className='title text-[6.94vw] ml-[3.19vw] max-md:text-[10.43vw]'>оптовые СКЛАДЫ</span>
              <div className='flex ml-[3.19vw] max-md:flex-col'>
                <div className='bg-[#293A54] w-[30.28vw] max-md:w-[89.82vw] max-md:h-[45.8vw] h-[19.1vw]  rounded-[2.08vw] max-md:rounded-[5.09vw] mr-[1.39vw] max-md:mb-[3.31vw]'>
                  <svg className='ml-[11.46vw] max-md:ml-[36.13vw] mt-[2.08vw] max-md:mt-[5.09vw] w-[7.36vw] max-md:w-[17.81vw] max-md:h-[21.88vw]' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 106 133" fill="none">
                    <path d="M57.9829 55.0739H51.641L50.9615 47.9897L48.6966 44.3333L41.6752 37.0206L34.8803 29.2509L29.4444 18.9674L28.5385 9.36942L26.047 0L20.1581 7.08419L21.5171 7.76976L16.9872 13.0258L20.1581 13.2543L20.8376 16.4536L16.7607 17.5962L17.2137 19.6529L21.5171 21.9381L20.1581 28.3368L27.1795 47.3041L30.8034 46.39L35.1068 43.1907L37.3718 45.0189L43.0342 51.8746L45.9786 50.732L47.1111 54.6168V58.2732L40.7692 61.4725L35.1068 61.9296L31.7094 64.6718L25.594 66.5V71.0704L28.0855 73.3557L23.3291 82.7251L28.5385 83.1821L29.4444 86.61L26.7265 90.9519L25.594 95.2938L19.7051 95.7509L19.0256 105.12L13.1368 107.634H9.28632L8.38034 109.919L13.8162 113.119L11.5513 114.49L12.6838 115.861L5.88889 119.289L5.2094 123.631L2.49145 124.316L3.39744 127.287L0 130.486L9.28632 133L11.5513 129.344L15.1752 126.144L17.2137 123.631H19.7051L21.2906 130.029L31.7094 130.486L30.1239 128.201V125.23L35.3333 127.287L36.6923 119.289L32.8419 116.318L35.3333 114.49L40.3162 116.318L42.8077 114.718L49.6026 118.146L61.6068 117.918L59.5684 114.718L60.9273 110.605L57.3034 106.72L58.6624 103.978L62.0598 106.263L68.8547 107.177L71.5726 104.435L70.6667 98.9502L66.1367 100.778L63.4188 96.4364V92.323L66.8162 91.866L67.4957 90.0378L70.6667 87.9811L72.7051 85.0103L75.8761 83.4107L79.7265 83.8677H86.7479L93.7692 88.6667L96.7137 80.2113V76.3265L103.056 73.5842L104.188 65.8144L101.923 61.244V58.7302H104.641L99.8846 46.6186L98.9786 41.3625L103.735 36.5636L101.244 32.4502L106 27.8797L104.188 24.2234L99.8846 27.1942L97.1667 26.5086L93.9957 29.7079L93.3162 33.5928L69.3077 28.7938L67.0427 41.8196L68.1752 47.3041V52.3316H58.4359L57.9829 55.0739Z" fill="#B47A4C"/>
                  </svg>
                  <div className='text-center mt-[0.21vw] mb-[0.56vw]'>
                    <span className='text-white text-[2.22vw] max-md:text-[5.09vw] font-bold OS-front '>Астрахань</span>
                  </div>
                  <div className='text-center'>
                    <span className='text-white text-[1.39vw] max-md:text-[3.31vw] font-normal OS-front '>Астраханская область — ул. Оптовая, 4</span>
                  </div>
                </div>
                {/*  */}
                <div className='bg-[#293A54] w-[30.28vw] h-[19.1vw] rounded-[2.08vw]  max-md:rounded-[5.09vw] max-md:w-[89.82vw] max-md:h-[45.8vw] max-md:mb-[3.31vw] mr-[1.39vw]'>
                <svg className='ml-[8.61vw] my-[2.08vw] w-[10.28vw] h-[8.54vw] max-md:ml-[29.26vw] max-md:mt-[7.38vw] max-md:w-[24.43vw] max-md:h-[20.36vw]' xmlns="http://www.w3.org/2000/svg" width="143" height="123" viewBox="0 0 143 123" fill="none">
                  <path d="M2.16116 10.5654L3.91807 14.8985C4.25586 15.7317 4.94946 16.3694 5.80795 16.6362L26.235 22.9842C26.6165 23.1028 27.0179 23.1439 27.4156 23.1053L33.4361 22.5198C33.7824 22.4861 34.1319 22.513 34.469 22.5991L47.1603 25.8412C47.426 25.9091 47.6812 26.0131 47.9186 26.1503L54.6916 30.0635C55.8245 30.718 56.1706 32.1925 55.4473 33.2828C54.8757 34.1442 54.9587 35.2831 55.649 36.0526L68.4505 50.3225C68.9522 50.8818 69.6454 51.2324 70.3932 51.3051L74.0336 51.6591C75.2921 51.7815 76.1739 52.9579 75.9384 54.2002C75.6873 55.525 76.7031 56.7514 78.0514 56.7514H82.3923C83.2406 56.7514 84.0305 57.1838 84.4877 57.8984L84.6137 58.0953C85.2847 59.144 84.9782 60.5381 83.9293 61.2088C83.5163 61.4729 83.2006 61.8645 83.0302 62.3242L79.2348 72.5609C79.025 73.1267 78.9907 73.7426 79.1364 74.3282L79.3764 75.2929C79.6564 76.4181 79.2628 77.604 78.3657 78.3385L74.4396 81.5529C73.9035 81.9918 73.232 82.2316 72.5391 82.2316H70.4016C69.6486 82.2316 68.923 81.9484 68.3692 81.4382L67.8902 80.9971C67.0512 80.2243 65.795 80.1187 64.8387 80.7404C63.6075 81.541 61.9545 81.1106 61.27 79.8113L61.0301 79.3562C59.9158 77.2412 56.8854 77.2464 55.7784 79.3652L54.8641 81.115C54.1287 82.5226 52.4237 83.1131 50.9752 82.462L47.584 80.9376C46.0521 80.249 44.2534 80.952 43.5945 82.4969L43.5129 82.6881C43.0334 83.8123 43.2839 85.115 44.146 85.9813L44.757 86.5951C45.0848 86.9246 45.3316 87.3257 45.478 87.7668L46.1856 89.8999C46.3319 90.341 46.5788 90.7421 46.9066 91.0715L47.2543 91.4209C48.014 92.1842 49.1245 92.4818 50.1641 92.2006L52.723 91.5083C53.8009 91.2167 54.9517 91.548 55.7096 92.3681L59.1522 96.0933C59.9543 96.9613 60.1721 98.2193 59.7084 99.3064L57.9384 103.456C57.4072 104.702 56.0406 105.367 54.7326 105.016C53.9832 104.815 53.1836 104.944 52.5352 105.37L48.4828 108.033C47.8876 108.424 47.4509 109.014 47.2508 109.697L47.1894 109.907C46.7487 111.413 47.5426 113.004 49.0108 113.557L49.2087 113.632C49.7865 113.849 50.2831 114.24 50.6306 114.75L52.7166 117.814C52.9648 118.178 53.2903 118.484 53.6698 118.708L55.9834 120.075C56.5782 120.427 57.3398 120.3 57.7883 119.774C58.1568 119.342 58.7472 119.171 59.2897 119.339L61.1574 119.916C61.3139 119.964 61.4741 120 61.6363 120.022L63.2655 120.245C64.9571 120.477 66.4642 119.162 66.4642 117.455V117.221C66.4642 115.712 67.744 114.521 69.2483 114.629L70.8956 114.747C71.8824 114.818 72.6421 113.891 72.3785 112.937C72.0961 111.916 72.9825 110.952 74.0239 111.148L74.8296 111.3C75.2358 111.377 75.607 111.581 75.8893 111.883L81.4402 117.82C82.1604 118.591 83.2322 118.926 84.2632 118.704L85.2944 118.482C85.6474 118.406 86.0116 118.398 86.3677 118.457C88.2013 118.765 89.8352 117.266 89.6877 115.413L89.5727 113.97C89.5362 113.51 89.3942 113.065 89.1579 112.67L88.1536 110.988C87.4122 109.746 87.9389 108.136 89.2707 107.572C90.3439 107.118 91.588 107.507 92.2115 108.492L97.2329 116.42C97.4653 116.787 97.7747 117.099 98.1396 117.335L99.909 118.478C100.493 118.856 101.191 119.018 101.882 118.938L104.183 118.671C105.439 118.526 106.15 117.157 105.547 116.046C105.465 115.896 105.406 115.734 105.37 115.567L105.06 114.112C104.854 113.15 104.191 112.35 103.284 111.97L102.943 111.827C102.311 111.562 101.788 111.089 101.462 110.486L98.0456 104.162C97.748 103.611 97.6483 102.975 97.7632 102.36C98.0451 100.849 99.5156 99.8665 101.019 100.185L101.167 100.216C102.1 100.413 102.874 101.058 103.237 101.939L105.16 106.609C105.334 107.03 105.601 107.406 105.941 107.708L111.417 112.576L118.794 117.672L125.497 121.859C126.556 122.52 127.937 122.333 128.782 121.413L128.945 121.235C129.625 120.496 129.737 119.398 129.223 118.536C128.894 117.986 128.349 117.6 127.721 117.474L126.854 117.3C125.854 117.099 125.024 116.403 124.652 115.454L122.252 109.333L121.012 105.344C120.483 103.645 121.753 101.921 123.532 101.921H125.557C125.896 101.921 126.171 101.646 126.171 101.307C126.171 100.911 126.541 100.618 126.926 100.71L129.285 101.267C129.808 101.391 130.357 101.345 130.853 101.135L133.131 100.171C133.884 99.8526 134.259 99.0038 133.989 98.2328C133.591 97.1006 134.577 95.9661 135.754 96.2025L141.707 97.3989C142.068 97.4714 142.434 97.3088 142.623 96.9932C142.84 96.6288 142.762 96.1605 142.438 95.8864L138.82 92.8246C138.687 92.7121 138.543 92.6126 138.391 92.5276L138.261 92.4551C137.253 91.8922 136.757 90.715 137.06 89.6006C137.176 89.1738 137.177 88.7241 137.064 88.2968L134.597 79.0029C134.513 78.6867 134.378 78.3864 134.197 78.1138L132.9 76.1589C132.308 75.2659 132.754 74.0546 133.784 73.7589C134.463 73.5638 134.931 72.9423 134.931 72.2353V69.9435C134.931 68.2867 136.275 66.9435 137.931 66.9435H138.156C139.813 66.9435 141.156 65.6004 141.156 63.9435V61.027C141.156 59.5474 139.546 58.6292 138.273 59.382L138.142 59.4595C137.589 59.7863 136.897 59.7668 136.363 59.4093C136.034 59.1888 135.637 59.0926 135.244 59.1378L131.217 59.6003C129.528 59.7942 128.145 58.2774 128.493 56.6134C128.63 55.9607 128.5 55.2804 128.131 54.7246L127.588 53.9071C127.13 53.2164 126.381 52.7732 125.555 52.7041L125.285 52.6815C124.543 52.6193 123.883 52.1878 123.527 51.5334C123.048 50.65 123.225 49.5543 123.958 48.8667L125.661 47.2699C125.986 46.9643 126.171 46.5376 126.171 46.0909C126.171 45.1982 126.895 44.4746 127.788 44.4746H128.916C130.259 44.4746 131.404 43.5034 131.624 42.179L131.878 40.6467C132.159 38.9504 130.96 37.3652 129.251 37.1744L128.001 37.0348C126.904 36.9123 126.003 36.1127 125.752 35.0382C125.462 33.7995 124.32 32.951 123.05 33.0308L120.47 33.1928C118.979 33.2864 117.647 32.2698 117.344 30.8078L116.917 28.7505C116.797 28.1704 117.03 27.574 117.511 27.2286C118.008 26.872 118.672 26.8531 119.188 27.1808L122.041 28.9911C122.48 29.27 122.99 29.4181 123.51 29.4181C124.993 29.4181 126.207 28.24 126.252 26.7581L126.619 14.5856C126.628 14.2836 126.682 13.9846 126.781 13.6989L127.712 10.9962C128.259 9.40936 127.397 7.68273 125.801 7.16523L122.307 6.03296C121.818 5.8743 121.296 5.84421 120.791 5.94559L115.798 6.94915L98.4331 8.01305C97.5683 8.06604 96.8941 8.78284 96.8941 9.64925C96.8941 10.4855 97.5235 11.1876 98.3547 11.2788L107.023 12.2289C108.491 12.3899 109.624 13.5957 109.693 15.0713L110.205 26.0524C110.241 26.8314 109.816 27.5589 109.119 27.909L108.997 27.97C108.367 28.2866 107.609 28.1984 107.069 27.7458C106.751 27.4793 106.349 27.3333 105.934 27.3333H102.653C101.648 27.3333 100.709 26.8297 100.154 25.9919L99.6604 25.2486L98.4855 23.6745C97.9192 22.9158 97.0281 22.4689 96.0814 22.4689H94.4368C93.1871 22.4689 92.1136 23.3565 91.8787 24.5838C91.5258 26.4277 89.3973 27.3039 87.8486 26.2429L81.259 21.7283C81.0786 21.6047 80.8852 21.5012 80.6822 21.4197L75.7628 19.4424C75.4071 19.2995 75.0273 19.226 74.644 19.226H69.6775C69.2315 19.226 68.791 19.1265 68.3882 18.9348L67.0695 18.3072C65.6786 17.6451 64.0124 18.1441 63.2143 19.4616L62.7033 20.3051C61.9571 21.5369 60.4039 22.0105 59.0974 21.4045C58.638 21.1915 58.1298 21.1058 57.626 21.1564L54.7061 21.4498C54.106 21.5101 53.5017 21.3882 52.972 21.0999L43.3903 15.8848C42.9502 15.6453 42.4571 15.5198 41.9561 15.5198H40.4907C40.1353 15.5198 39.7826 15.4566 39.4492 15.3332L34.1951 13.3881C31.6103 12.4313 31.5755 8.78794 34.1414 7.78177L35.495 7.25101C35.9593 7.06893 36.2648 6.62105 36.2648 6.12229C36.2648 5.52998 35.8368 5.02437 35.2527 4.92654L34.1166 4.73629C32.9919 4.54794 32.2079 3.5171 32.3267 2.38297C32.4601 1.10909 31.4612 0 30.1803 0H29.6886C28.4258 0 27.3453 0.907192 27.1269 2.15105L26.8856 3.52517C26.8381 3.79517 26.7179 4.04711 26.5379 4.25384L26.2933 4.53477C25.7496 5.15915 24.7569 5.07956 24.3196 4.37652C24.1451 4.09593 23.865 3.89728 23.5425 3.82527L22.4135 3.57318C21.1227 3.28494 19.8972 4.26697 19.8972 5.58961C19.8972 6.63112 19.122 7.5098 18.0886 7.63959L15.3872 7.9789C14.8028 8.05229 14.3645 8.54913 14.3645 9.13805C14.3645 9.90461 13.6387 10.4634 12.8976 10.2675L10.4382 9.61716C10.1375 9.53765 9.85102 9.41187 9.58898 9.24432L5.48389 6.61942C5.11095 6.38096 4.67754 6.25424 4.23488 6.25424H2.19362C0.315411 6.25424 -0.314934 8.76496 1.34054 9.65213C1.71234 9.85137 2.00266 10.1745 2.16116 10.5654Z" fill="#B47A4C"/>
                </svg>
                  <div className='text-center mt-[0.21vw] mb-[0.56vw]'>
                    <span className='text-white text-[2.22vw] max-md:text-[5.09vw] font-bold OS-front max-md:mb-[1.73vw]'>Грозный</span>
                  </div>
                  <div className='text-center'>
                    <span className='text-white text-[1.39vw] font-normal OS-front max-md:text-[3.31vw]'>Чеченская Республика — ул. Боевая, 17</span>
                  </div>
                </div>
                {/*  */}
                <div className='bg-[#293A54] w-[30.28vw] h-[19.1vw] rounded-[2.08vw]  max-md:rounded-[5.09vw] max-md:w-[89.82vw] max-md:h-[45.8vw] max-md:mb-[3.31vw]'>
                <svg className='ml-[11.94vw] max-md:ml-[37.4vw] mt-[2.08vw] max-md:mt-[3.82vw] max-md:mb-[1.32vw] w-[6.39vw] max-md:w-[15.27vw] max-md:h-[17.81vw]' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 92 107" fill="none">
                  <path d="M7.96701 19.1954C8.10026 19.5959 11.266 21.1004 13.4058 22.0617C13.8798 22.2747 14.4368 22.1107 14.7247 21.678C15.0701 21.1589 15.7842 21.0437 16.2754 21.4278L22.2174 26.0743C22.8045 26.5333 23.1617 27.2259 23.1955 27.9704L23.2228 28.5723C23.28 29.8325 22.1926 30.8428 20.94 30.6934C19.046 30.4675 17.9031 32.7304 19.2091 34.1206L23.305 38.4809C24.0277 39.2501 24.2929 40.3426 24.0034 41.3576L23.2389 44.0386C22.8507 45.4 21.5637 46.3047 20.1513 46.209L11.7295 45.6389C10.0002 45.5219 8.72967 43.9681 8.9583 42.25L8.98352 42.0605C9.1662 40.6879 8.3856 39.3685 7.09452 38.8678L6.09366 38.4796C4.59569 37.8986 2.90593 38.601 2.26109 40.0726L0.445365 44.2163C0.15797 44.8722 0.114655 45.6092 0.323246 46.2942L2.84181 54.5653C3.18956 55.7073 4.1813 56.5345 5.36719 56.6716L6.59709 56.8138C7.67713 56.9386 8.60509 57.6381 9.02258 58.6419L10.6985 62.6719C10.9972 63.39 11.6985 63.8579 12.4762 63.8579H12.7258C13.1915 63.8579 13.6286 64.083 13.8989 64.4623C14.2161 64.9071 14.7575 65.1343 15.2971 65.049L16.5805 64.8459C17.4897 64.7021 18.4147 64.9837 19.0895 65.6098L21.2824 67.6441C22.3561 68.6401 22.5537 70.2658 21.7498 71.4901L19.0976 75.5291C18.6517 76.2081 18.5003 77.039 18.6779 77.8317L20.3896 85.4713C20.4539 85.7583 20.5601 86.0342 20.7046 86.2903L30.4492 103.55C30.8692 104.294 31.5864 104.824 32.4209 105.006L41.0179 106.885C41.3647 106.961 41.7223 106.975 42.0739 106.926L57.4209 104.78C57.7092 104.74 57.9901 104.658 58.2548 104.537L63.5503 102.111C64.1622 101.831 64.8505 101.765 65.5047 101.923L67.7243 102.46C69.06 102.783 70.4443 102.157 71.0843 100.941L74.6633 94.1399C75.1198 93.2726 76.2024 92.9536 77.0563 93.4348C77.8775 93.8976 78.9179 93.6219 79.4022 92.8132L80.5089 90.9652C80.9766 90.1842 82.0115 89.969 82.7518 90.4988C83.457 91.0034 84.4386 90.835 84.9353 90.1242L90.6294 81.9742C91.4312 80.8266 91.3326 79.2769 90.3919 78.2401L88.6881 76.3624C88.3713 76.0132 87.9766 75.7436 87.5361 75.5755L82.8726 73.7955C81.3924 73.2306 80.6067 71.612 81.0785 70.0995L81.7076 68.0824C81.9785 67.214 81.8407 66.2695 81.333 65.5147L76.7664 58.7255C76.4335 58.2306 76.2557 57.6477 76.2557 57.0512V52.4033C76.2557 52.1848 76.2318 51.967 76.1845 51.7537L75.5501 48.8935C75.2881 47.7122 75.7614 46.4892 76.7502 45.792L78.6385 44.4607C79.6112 43.7749 80.0865 42.5791 79.85 41.4127L77.9358 31.9709C77.8294 31.4457 77.8655 30.9016 78.0405 30.3951L79.2316 26.9476C79.3949 26.4749 79.4374 25.969 79.3554 25.4757L78.7623 21.9105C78.7353 21.7478 78.7216 21.5832 78.7216 21.4183V18.4242C78.7216 17.0816 77.8295 15.9024 76.5375 15.5373L72.0138 14.259C71.5602 14.1308 71.1431 13.8974 70.7964 13.5779L67.0117 10.0894C66.7276 9.8274 66.3954 9.62283 66.0336 9.48689L60.8964 7.55673C60.6409 7.46075 60.3735 7.40007 60.1016 7.37638L56.6339 7.07427C56.3124 7.04625 55.9884 7.07031 55.6746 7.14551L51.1217 8.23633C49.2355 8.68823 47.4227 7.25846 47.4227 5.31889V3.35319C47.4227 1.78354 46.2127 0.479239 44.6475 0.361622L40.8874 0.0790801C40.3194 0.0363983 39.8351 0.48575 39.8351 1.05536C39.8351 1.23522 39.7855 1.41161 39.6918 1.56516L38.3658 3.73924C37.9942 4.34839 37.2846 4.66419 36.5833 4.53245C35.5832 4.34456 34.64 5.0631 34.5557 6.07726L34.5061 6.67327C34.4089 7.84279 33.4313 8.74245 32.2577 8.74245H31.0427C29.7286 8.74245 28.5674 9.59776 28.1777 10.8528L27.5492 12.877C26.9046 14.9526 24.3355 15.6754 22.7032 14.2403L18.4774 10.5248C17.5217 9.68459 16.1399 9.53866 15.0299 10.1607L8.47712 13.8328C6.96729 14.6789 6.4983 16.6161 7.38061 18.1051C7.68227 18.6142 7.91116 19.0275 7.96701 19.1954Z" fill="#B47A4C"/>
                </svg>
                  <div className='text-center mt-[0.21vw] mb-[0.56vw]'>
                    <span className='text-white text-[2.22vw] max-md:text-[5.09vw] font-bold OS-front max-md:mb-[1.73vw]'>Хасавюрт</span>
                  </div>
                  <div className='text-center'>
                    <span className='text-white text-[1.39vw] font-normal OS-front max-md:text-[3.31vw]'>Республика Дагестан — Аксайское <br></br> шоссе, 110</span>
                  </div>
                </div>
                {/*  */}
              </div>
              <div className='flex ml-[3.19vw] mt-[1.39vw] max-md:flex-col'>
                <div className='bg-[#293A54] w-[30.28vw] h-[19.1vw] rounded-[2.08vw]  max-md:rounded-[5.09vw] max-md:rounded-[5.09vw] mr-[1.39vw] max-md:w-[89.82vw] max-md:h-[45.8vw] max-md:mb-[3.31vw]'>
                <svg className='ml-[11.11vw] mt-[0.6vw] max-md:ml-[35.37vw]  max-md:mt-[1.98vw] w-[7.13vw] max-md:w-[19.34vw] max-md:h-[25.45vw]' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 117 154" fill="none">
                  <path d="M14.1488 56.7943L13.0605 62.2553L1.63256 63.0745V68.8085L3.26512 73.1773L0 83.2801L11.4279 89.2872L11.9721 84.3723H16.5977L15.5093 86.2837L17.686 87.3759L20.1349 85.4645L22.8558 86.8298L20.407 87.3759L20.9512 92.0177L26.9372 95.2943L30.7465 99.6631L12.5163 124.238L18.2302 126.422L18.7744 130.518L24.4884 132.975L22.8558 134.613L29.6581 146.901L28.2977 154L46.5279 140.894L47.3442 139.528L54.6907 136.798L59.3163 127.514L58.7721 122.872L56.5953 119.596L57.4116 117.138L60.6767 118.23L62.3093 114.408L66.9349 109.493L70.7442 108.128L76.4581 105.124L75.3698 102.94L76.4581 98.2979L80.8116 92.5638L84.6209 91.1986L85.4372 86.2837L88.7023 85.7376L91.9674 80.5496L89.2465 77L85.4372 76.4539L83.5326 70.1738L89.2465 66.3511L81.6279 64.9858L84.6209 64.1667L85.4372 62.2553L89.2465 60.344L85.4372 55.9752L93.8721 49.695L102.035 47.7837L105.572 43.6879L106.388 40.1383L111.558 31.4007L106.388 24.8475L109.109 25.9397L112.647 23.7553L112.102 21.844L115.367 21.0248L114.279 18.8404L117 18.0213L116.184 14.1986L111.558 7.91844L109.109 15.5638L105.572 13.3794L108.837 7.91844L105.572 6.28014L106.933 5.18794L102.307 1.36525L100.13 2.45745L95.7767 0L94.4163 0.819149L95.7767 5.18794L92.5116 7.91844L85.4372 2.45745L83.8046 4.09574L84.6209 7.09929L83.8046 9.01064L84.6209 10.6489L82.7163 14.1986L85.4372 17.2021L84.6209 19.9326V23.7553L81.6279 25.9397V30.5816L84.6209 32.2199L86.2535 33.8582L80.2674 35.4965L75.3698 33.3121L73.4651 39.3191L68.2953 41.7766L64.486 46.1454L63.1256 44.7801H58.7721L56.5953 42.3227L53.3302 43.6879L47.0721 46.9645V50.7872L42.7186 53.5177H31.8349L27.4814 47.7837H19.0465L18.5023 49.695H15.2372V53.5177L13.0605 54.6099L14.1488 56.7943Z" fill="#B47A4C"/>
                </svg>
                  <div className='text-center mt-[0.21vw] mb-[0.56vw]'>
                    <span className='text-white text-[2.22vw] font-bold OS-front  max-md:text-[5.09vw]'>Назрань</span>
                  </div>
                  <div className='text-center'>
                    <span className='text-white text-[1.39vw] font-normal OS-front max-md:text-[3.31vw]'>Республика Ингушетия — ул.Чеченская,1</span>
                  </div>
                </div>
                {/*  */}
                <div className='bg-[#293A54] w-[30.28vw] h-[19.1vw] rounded-[2.08vw]  max-md:rounded-[5.09vw] mr-[1.39vw] max-md:w-[89.82vw] max-md:h-[45.8vw] max-md:mb-[3.31vw]'>
                <svg  className='ml-[10.42vw] max-md:ml-[33.59vw] mt-[2.08vw] max-md:mt-[3.46vw] max-md:mb-[1.32vw] w-[8.13vw] max-md:w-[22.9vw] max-md:h-[22.9vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137 137" fill="none">
                  <path d="M0 81.9175L3.64213 80.7876L5.32311 72.8783L12.8875 68.6412L21.8528 66.3814L26.0552 56.4948V49.1505L28.8568 47.4557L33.0593 37.8515L36.1411 39.2639L40.9039 37.8515L36.7014 23.4454L40.0634 20.3381L42.5849 17.2309H48.1881L51.2699 10.734H56.593L60.2352 9.32165L58.8344 3.95464L72.002 1.69485V7.34433L83.7689 5.93196L85.1697 19.4907L92.1738 18.6433L100.859 12.1464L105.061 12.9938L106.742 9.03918L109.824 10.734L113.186 9.32165V2.82474L115.427 1.69485L119.35 7.90928L129.996 0L137 15.5361L132.237 17.5134L135.039 26.5526L132.237 27.6825L124.953 19.7732L117.108 22.8804L116.548 43.501L120.19 51.9753L118.229 56.7773L112.626 55.0825L109.824 57.3423H107.022L103.38 68.0763L98.3374 73.4433L100.859 75.1381L95.5358 77.1155L99.1779 80.7876L93.8548 83.8948L92.454 90.1093L94.6953 88.6969L96.9366 90.9567L95.5358 96.6062L99.4581 99.7134L105.902 112.142L102.26 118.639L103.1 122.029H100.299L96.9366 123.159L92.454 121.464L89.9325 129.091L84.8896 126.266L85.7301 120.899V117.792L87.411 117.227L88.8119 111.295V107.905L84.3292 114.685L83.4887 117.227L79.5665 121.181L81.2474 123.159L74.8037 128.526L69.4806 127.396L66.1186 122.594L65.2781 123.159L63.8773 117.227L62.1963 116.097L54.9121 119.769L56.0327 124.006L60.7955 123.159L59.3947 132.763L54.9121 136.435L46.7873 137L42.3047 131.068L42.5849 128.526L39.5031 127.113L37.8221 129.091L26.3354 119.769L26.6155 116.097L31.0982 105.928L29.9775 103.103L33.8998 95.1938L28.5767 90.9567L31.0982 87.0021H23.5337L22.9734 90.6742L16.2495 90.9567L12.6074 89.2619L10.6462 90.6742L3.64213 90.1093L2.52147 85.3072L0 81.9175Z" fill="#B47A4C"/>
                </svg>
                  <div className='text-center mt-[0.21vw] mb-[0.56vw]'>
                    <span className='text-white text-[2.22vw] font-bold OS-front max-md:text-[5.09vw]'>Симферополь</span>
                  </div>
                  <div className='text-center'>
                    <span className='text-white text-[1.39vw] font-normal OS-front max-md:text-[3.31vw]'>Республика Крым — ул. Ж. Дерюгиной, 4</span>
                  </div>
                </div>
                {/*  */}
                <div className='bg-[#293A54] w-[30.28vw] h-[19.1vw] rounded-[2.08vw]  max-md:rounded-[5.09vw] max-md:w-[89.82vw] max-md:h-[45.8vw]'>
                <svg className='ml-[10.07vw] max-md:ml-[32.82vw] mt-[0.9vw] max-lg:mt-[-1.9vw] mb-[-2vw] max-lg:mb-[-4vw]  max-md:mt-[2.47vw] w-[9.21vw] max-md:w-[24.17vw] max-md:h-[20.61vw]' xmlns="http://www.w3.org/2000/svg" width="147" height="125" viewBox="0 0 147 125" fill="none">
                  <path d="M35.407 33.8035L38.093 39.3969L36.1395 43.5311L27.3488 41.3424L17.5814 41.5856L9.03488 42.8016L0 45.963L3.4186 48.1518L7.0814 60.7977L9.76744 59.8249L12.9419 58.8521L12.4535 56.6634H14.407L17.093 59.8249L17.5814 61.7704L15.8721 62.7432L17.093 71.7412L18.314 72.4708L20.7558 79.037L27.1047 82.1984V85.6031L30.2791 87.3055L31.2558 90.2237L28.814 90.9533L28.0814 95.0875L24.1744 96.3035L22.7093 98.9786L28.3256 99.465L25.6395 106.031L28.814 109.193H34.186V112.597L41.7558 114.056L45.1744 123.541L49.3256 121.839L54.6977 125L58.1163 120.866L54.2093 111.138V98.9786L56.6512 104.815L59.093 112.597L63 115.759L69.3488 111.868L82.5349 102.626V102.383L95.4767 101.897L94.2558 112.597L98.407 107.977L104.756 99.2218L114.523 94.358L126 98.9786L129.419 91.4397L136.256 86.8191L134.547 84.144L140.163 80.2529L139.674 74.1731L134.547 73.4436L134.058 70.0389L128.198 66.3911L131.86 65.1751L130.395 58.3658H132.837L137.721 57.393L138.698 54.7179L141.872 55.6907L147 46.6926L139.674 46.4494L136.5 42.8016L132.837 39.8833L128.686 41.0992L126.733 36.2354L124.535 34.7763L125.023 31.858H121.116L118.674 24.0759L115.988 23.5895L115.256 19.9416L104.756 21.644L93.0349 20.428V17.2665L90.8372 12.8891L88.6395 7.05253L85.7093 4.13424L80.5814 5.35019L79.6047 4.13424L76.4302 3.64786L73.2558 0.486381L65.1977 3.64786L54.9419 0L52.2558 0.729572H43.9535L42.2442 2.6751L36.8721 3.64786V0.972763L33.6977 0.729572V3.64786L31.7442 8.02529L36.1395 10.4572L32.9651 14.5914L30.7674 16.0506V18.7257L34.186 20.428L34.6744 26.2646H37.3605V29.1829L35.407 33.8035Z" fill="#B47A4C"/>
                </svg>
                  <div className='text-center mt-[2.21vw] mb-[0.56vw]'>
                    <span className='text-white text-[2.22vw] font-bold OS-front max-md:text-[5.09vw]'>Запорожская обл</span>
                  </div>
                  <div className='text-center leading-[2vw]'>
                    <span className='text-white text-[1.39vw] font-normal OS-front max-md:text-[3.31vw] '>г. Мелитополь, с. Константиновка, ул. <br></br> Центральная, д. 244/2</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-[13.89vw] mb-[2.22vw] max-md:mb-[4.33vw] max-md:mt-[17.81vw]'>
              <span className='title text-[6.94vw] ml-[3.19vw]'>Супермаркеты</span>
            </div>
            <div className='max-md:flex max-md:flex-col'>
              
            </div>
            <div className='inline-flex items-center border-[#BBBBC7] border-[0.07vw] py-[0.97vw] px-[1.67vw]  ml-[3.19vw] rounded-[2.61vw] max-md:mb-[2.21vw] max-md:rounded-[5.98vw] max-md:py-[2.34vw] max-md:px-[3.77vw]'>
              <img className='mr-[0.49vw] max-md:mr-[0.89vw] max-md:w-[3.82vw] max-md:h-[3.82vw]' src='/img/icons/location.svg'></img>
              <span className='OS-front text-[1.32vw] max-md:text-[3.05vw]'>г.Грозный, Старопромысловское шоссе, 26В</span>
            </div>
            <br className='hidden max-md:block'></br>
            <div className='inline-flex items-center border-[#BBBBC7] border-[0.07vw] py-[0.97vw] px-[1.67vw]  ml-[1.04vw] max-md:ml-[3.39vw] max-md:mb-[2.21vw] rounded-[2.61vw] max-md:rounded-[5.98vw] max-md:py-[2.34vw] max-md:px-[3.77vw]'>
              <img className='mr-[0.49vw] max-md:mr-[0.89vw] max-md:w-[3.82vw] max-md:h-[3.82vw]' src='/img/icons/location.svg'></img>
              <span className='OS-front text-[1.32vw] max-md:text-[3.05vw]'>г.Грозный, ул. Боевая, 17</span>
            </div>
            <br className='hidden max-md:block'></br>
            <div className='inline-flex items-center border-[#BBBBC7] border-[0.07vw] py-[0.97vw] px-[1.67vw]  ml-[1.04vw] max-md:ml-[3.39vw] max-md:mb-[2.21vw] rounded-[2.61vw] max-md:rounded-[5.98vw] max-md:py-[2.34vw] max-md:px-[3.77vw]'>
              <img className='mr-[0.49vw] max-md:mr-[0.89vw] max-md:w-[3.82vw] max-md:h-[3.82vw]' src='/img/icons/location.svg'></img>
              <span className='OS-front text-[1.32vw] max-md:text-[3.05vw]'>г.Грозный, ул. Сайханова, 99</span>
            </div>
            <br className='hidden max-md:block '></br>

            <div className='inline-flex items-center border-[#BBBBC7] border-[0.07vw] py-[0.97vw] px-[1.67vw]  ml-[3.19vw] rounded-[2.61vw] max-md:rounded-[5.98vw] max-md:py-[2.34vw] max-md:px-[3.77vw] mt-[1.04vw] ml-[1.04vw]'>
              <img className='mr-[0.49vw] max-md:mr-[0.89vw] max-md:w-[3.82vw] max-md:h-[3.82vw]' src='/img/icons/location.svg'></img>
              <span className='OS-front text-[1.32vw] max-md:text-[3.05vw]'>г.Грозный, Бульвар Дудаева, 6Б</span>
            </div>
            <br className='hidden max-md:block'></br>

            <div className='inline-flex items-center border-[#BBBBC7] border-[0.07vw] py-[0.97vw] px-[1.67vw]  ml-[1.04vw] rounded-[2.61vw] max-md:rounded-[5.98vw] max-md:py-[2.34vw] max-md:px-[3.77vw] ml-[1.04vw] max-md:ml-[3.19vw] max-md:mt-[3.82vw]'>
              <img className='mr-[0.49vw] max-md:mr-[0.89vw] max-md:w-[3.82vw] max-md:h-[3.82vw]' src='/img/icons/location.svg'></img>
              <span className='OS-front text-[1.32vw] max-md:text-[3.05vw]'>с.Бердыкель, ул. Кадырова, 1</span>
            </div>
            
            

            <div className='flex items-center mt-[2.36vw] max-md:flex-col'>
              <div className='w-[54.03vw] h-[36.94vw]  bg-[#293A54] ml-[3.19vw] mr-[1.39vw]  rounded-[2.08vw]  max-md:ml-[0] max-md:mr-[0]  max-md:w-[100vw] max-md:h-[81.42vw]  max-md:rounded-[3.82vw]'>
                <div className='pt-[1.74vw]'>
                <iframe className='w-[50.56vw] max-md:w-[94.91vw] h-[32.85vw] max-md:h-[76.42vw]  rounded-[1.39vw] ml-[1.74vw] max-md:ml-[2.5vw] max-md:mt-[1.3vw]' src="https://yandex.ru/map-widget/v1/?um=constructor%3A04738fbb009a991219a364157be3145250bd01701819ff9e9130bc3e02c1b516&amp;source=constructor" width="500" height="400" frameBorder="0"></iframe>
                </div>
              </div>
              <img className='w-[38.19vw] max-md:w-[100vw] h-[36.32vw] max-md:h-[86.77vw] max-md:rounded-[3.82vw] max-md:mt-[2.54vw]' src='/img/image_9.png'></img>
            </div>
            
            <div className='mt-[13.89vw] max-mt-[17.81vw] mb-[3vw] max-md:mb-[3.09vw]'>
              <span id='contact' className='title text-[6.94vw] max-md:text-[10.43vw] ml-[3.19vw]  max-md:mb-[5.09vw]'>Наши данные</span>

              <div className='flex max-md:flex-col max-md:mt-[5.09vw]  '>

              <div className='flex  bg-[#293A54] w-[46.11vw] max-md:w-[100vw] h-[53.76vw] max-md:h-[114.38vw] max-sm:h-[138vw] ml-[3.19vw] max-md:ml-[0] max-md:mb-[5.09vw] rounded-[2.78vw] max-md:rounded-[6.01vw] max-md:pl-[5.09vw] max-md:pt-[5.09vw]'>
                <div className='pt-[2.08vw] pl-[2.08vw]'>
                  <span className='OS-front font-bold text-[2.78vw] max-md:text-[6.01vw] mb-[1.67vw]'>ООО &ldquo;СервисТорг&rdquo;</span>
                  <div className=' mt-[1.67vw] max-md:mt-[3.56vw]'>
                    <span className='OS-front font-semibold text-[1.67vw] max-md:text-[3.61vw]'>Полное название:</span>
                  </div>
                  <div className='mt-[0.56vw] max-md:mt-[1.53vw] max-md:mb-[4.33vw]'>
                    <span className='OS-front text-[1.39vw] max-md:text-[3vw]'>Общество с ограниченной ответственностью &ldquo;СервисТорг&rdquo; <br></br> (ООО &ldquo;СервисТорг&rdquo;)</span>
                  </div>

                  <div className=' mt-[2.08vw]'>
                    <span className='OS-front font-semibold text-[1.67vw] max-md:text-[3.61vw]'>Юридический адрес:</span>
                  </div>
                  <div className='mt-[0.56vw] max-md:mt-[1.53vw] max-md:mb-[4.33vw]'>
                    <span className='OS-front text-[1.39vw] max-md:text-[3vw]'>364029, Чеченская Республика, г. Грозный, район <br></br> Байсануровский, ул. Амира Абдуллахаджи Загаева, д. 66</span>
                  </div>

                  <div className=' mt-[2.08vw]'>
                    <span className='OS-front font-semibold text-[1.67vw] max-md:text-[3.61vw]'>Фактический адрес:</span>
                  </div>
                  <div className='mt-[0.56vw] max-md:mt-[1.53vw] max-md:mb-[4.33vw]'>
                    <span className='OS-front text-[1.39vw] max-md:text-[3vw]'>364018, Чеченская Республика, г. Грозный, ул. Боевая, 17</span>
                  </div>

                  <div className=' mt-[2.08vw]'>
                    <span className='OS-front font-semibold text-[1.67vw] max-md:text-[3.61vw]'>Основные данные:</span>
                  </div>
                  <div className='mt-[0.56vw] max-md:mt-[1.53vw] max-md:mb-[4.33vw]'>
                    <span className='OS-front text-[1.39vw] max-md:text-[3vw]'>
                    <span className='font-semibold'>Директор:</span> Дудаева Айшат Магомедовна  <br></br>
                    <span className='font-semibold'>Телефон: </span>+7-963-706-13-95 <br></br>
                    <span className='font-semibold'>ИНН:</span> 2015006425 <br></br>
                    <span className='font-semibold'>КПП:</span> 201501001 <br></br>
                    <span className='font-semibold'>ОГРН:</span> 1172036008000 <br></br>
                    <span className='font-semibold'>Дата постановки на учёт:</span> 25.12.2017
                    </span>
                  </div>

                </div>
              </div>

              {/*  */}

              <div className='flex  bg-[#B47A4C] w-[46.11vw] h-[53.76vw] ml-[1.39vw] rounded-[2.78vw]  max-md:ml-[0] max-md:mr-[0]  max-md:w-[100vw] max-md:h-[107.42vw]  max-sm:h-[135vw]   max-md:rounded-[3.82vw]'>
                <div className='pt-[2.08vw] pl-[2.08vw]'>
                  <span className='OS-front font-bold text-[2.78vw] mb-[1.67vw] max-md:text-[6.01vw] max-md:ml-[5.09vw]'>ООО &ldquo;Мусафир&rdquo;</span>
                  <div className=' mt-[1.67vw]'>
                    <span className='OS-front font-semibold  text-[1.67vw] max-md:ml-[5.09vw] max-md:text-[3.61vw]'>Полное название:</span>
                  </div>
                  <div className='mt-[0.56vw] max-md:mt-[1.53vw] max-md:mb-[4.33vw]  max-md:ml-[5.09vw]'>
                    <span className='OS-front text-[1.39vw] max-md:text-[3vw]'>Общество с ограниченной ответственностью &ldquo;Мусафир&rdquo; <br></br> (ООО &ldquo;Мусафир&rdquo;)</span>
                  </div>

                  <div className=' mt-[2.08vw]'>
                    <span className='OS-front font-semibold text-[1.67vw] max-md:ml-[5.09vw] max-md:text-[3.61vw]'>Юридический адрес:</span>
                  </div>
                  <div className='mt-[0.56vw] max-md:mt-[1.53vw] max-md:mb-[4.33vw] max-md:ml-[5.09vw]'>
                    <span className='OS-front text-[1.39vw] max-md:text-[3vw] '>364029, Чеченская Республика, г. Грозный, ул. Амира <br></br> Абдуллахаджи Загаева, д. 66</span>
                  </div>

                  <div className=' mt-[2.08vw]'>
                    <span className='OS-front font-semibold text-[1.67vw] max-md:ml-[5.09vw] max-md:text-[3.61vw]'>Фактический адрес:</span>
                  </div>
                  <div className='mt-[0.56vw] max-md:ml-[5.09vw]'>
                    <span className='OS-front text-[1.39vw] max-md:text-[3vw]'>364029, Чеченская Республика, г. Грозный, ул. Амира <br></br> Абдуллахаджи Загаева, д. 66</span>
                  </div>

                  <div className=' mt-[2.08vw]'>
                    <span className='OS-front font-semibold text-[1.67vw] max-md:ml-[5.09vw] max-md:text-[3.61vw]'>Основные данные:</span>
                  </div>
                  <div className='mt-[0.56vw] max-md:ml-[5.09vw]'>
                    <span className='OS-front text-[1.39vw] max-md:text-[3vw]'>
                    <span className='font-semibold'>Директор:</span> Дудаева Айшат Магомедовна  <br></br>
                    <span className='font-semibold'>Телефон: </span>+7-963-706-13-95 <br></br>
                    <span className='font-semibold'>ИНН:</span> 2015006425 <br></br>
                    <span className='font-semibold'>КПП:</span> 201501001 <br></br>
                    <span className='font-semibold'>ОГРН:</span> 1172036008000 <br></br>
                    <span className='font-semibold'>Дата постановки на учёт:</span> 25.12.2017
                    </span>
                  </div>

                </div>
              </div>
              </div>
            </div>

            <ApplicationForm />

            <div id="Form" className='w-full h-[22.15vw] bg-[#060F20] rounded-t-[2.08vw] flex items-end  z-[-1] max-md:hidden '>
              <div className='flex items-center ml-[3.19vw] mb-[2.22vw]'>
                <span className='text-[0.9vw] text-[#DEDEE8] OS-front max-md:text-[]'>ГРОПРОДУКТ © 2025</span>
                <div className='bg-[#DEDEE8] w-[0.1vw] h-[1.11vw] mx-[1.11vw]'></div>
                <span className='text-[0.9vw] text-[#DEDEE8] mr-[1.11vw] OS-front'>14129@inbox.ru</span>
                <span className='text-[0.9vw] text-[#DEDEE8] mr-[1.11vw] OS-front'>+7(963)706-00-06</span>
                <span className='text-[0.9vw] text-[#DEDEE8] OS-front'>+7(938)996-92-82</span>
              </div>
            </div>
            
            <div id="Form" className='w-full h-[22.15vw] bg-[#060F20] rounded-t-[2.08vw] flex items-end  z-[-1] hidden max-md:flex max-md:h-[45vw] max-md:pb-[8.14vw] max-md:pt-[15.27vw] max-md:pl-[5.09vw]'>
              <div className='flex flex-column items-center ml-[3.19vw] mb-[2.22vw] max-mb:mb-[8.14vw]'>
                <div className='flex flex-col '>
                <div className='inline-flex max-md:mb-[4.07vw]'>
                <span className='text-[0.9vw] text-[#DEDEE8] OS-front max-md:text-[3.31vw]'>ГРОПРОДУКТ © 2025</span>
                <div className='bg-[#DEDEE8] w-[0.1vw] h-[1.11vw] mx-[1.11vw] max-md:w-[0.25vw] max-md:h-[4.07vw]
                max-md:mx-[4.07vw]'></div>
                <span className='text-[0.9vw] text-[#DEDEE8] mr-[1.11vw] OS-front max-md:text-[3.31vw]'>14129@inbox.ru</span>
                </div>
                <div className='inline-flex'>
                <span className='text-[0.9vw] text-[#DEDEE8] mr-[1.11vw] OS-front max-md:text-[3.31vw]'>+7(963)706-00-06</span>
                <span className='text-[0.9vw] text-[#DEDEE8] OS-front  max-md:text-[3.31vw]'>+7(938)996-92-82</span>
                </div>
                </div>
               
              </div>
            </div>
    </>
  )
}