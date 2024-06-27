import Image from "next/image";
import Arrow from "@/images/Arrow";
import Economy from '@/images/Economy';
import Reputation from '@/images/Reputation';
import Proton from "@/images/tecno.png";
import FeaturesCards from "@/components/FeaturesCards";
import HyperLink from "@/components/HyperLink";
import SectionCardsJob from "@/components/SectionCardsJob";




export default async function Home() {

  

  return (
    <main className="flex min-h-screen mx-auto container mt-14 flex-col lg:max-w-6xl md:max-w-2xl items-center justify-between ">
      <section className="flex w-[100%] mb-44 justify-between items-center min-h-[60dvh] relative" >
        <div>
          <h1 className=" text-[#4F4F4F] leading-normal text-[4rem] max-w-[8em] font-semibold">
            Programadores y <span className="text-[#0070B9]">estudiantes</span>
          </h1>
          <p className="font-semibold text-[#939393] text-[2rem]">Piensa, codifica, revoluciona</p>
          <HyperLink text="Únete ya" url='./page.tsx'   />
          <Arrow className="absolute lg:block hidden  left-[10rem] top-[23rem]" />
        </div>
        <Image src={Proton} alt="Mujer aprendiendo." width="420" height="420" />
      </section>
      <FeaturesCards/>
      <section className='flex  w-full flex-col mt-24 gap-28 '>
          <div className='flex items-center justify-between'>
            <div className=''>
              <h2 className='font-semibold   text-[4rem]  max-w-[22rem]'>Sistema de <span className='text-[#0070B9]'>Reputación</span></h2>
              <p className='text-[#939393] 		 font-medium w-[30rem]  text-[2rem]'>Gana puntos ayudando a la comunidad y mejora tu reputación.</p>
            </div>
            <Reputation/>
          </div>
          <div className='flex justify-between items-center   '>
            <Economy/>
            <div className='flex  flex-col 	'>
              <h2 className='font-semibold   text-[4rem]  max-w-[22rem]'>
                <span className='text-[#0070B9]'>Economía</span>
              </h2>
              <p className='text-[#939393] 		 font-medium w-[30rem]  text-[2rem]'>
               Gana dinero, elige tu trabajo, completa misiones, juega en el casino y compra en la tienda.
              </p>
            </div>
          </div>
      </section>
      <section>
              <h2 className='font-semibold   text-[2.5rem] '>
                <span className='text-[#0070B9]'>Ofertas de empleo</span>
              </h2>
        <SectionCardsJob limits={3} pages={false}/>
      </section>
    </main>
  );
}


