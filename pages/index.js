import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ContactForm from '../components/ContactForm'
import Carousel1 from '../components/Carousel'

export default function Home(){

  // Show on Scroll code
  React.useEffect(()=>{
    const callback = function (entries) {
      entries.forEach((entry) => {  
        if (entry.isIntersecting) {
          entry.target.classList.add("transition-all", "duration-1000", "ease-in", "opacity-100");
        } else {
          entry.target.classList.remove("animate-fadeIn");
        }
      });
    };
    
    const observer = new IntersectionObserver(callback);
    
    const targets = document.querySelectorAll(".js-show-on-scroll");
    targets.forEach(function (target) {
      target.classList.add("opacity-0");
      observer.observe(target);
    });
  },[])

  return (
    //
    <div>
      <Head>
        <meta charset="UTF-8"></meta>
        <title>Óptica Mar - Torrevieja</title>
      </Head>
      {/* Nav */}
      <section className="container mx-auto px-8"> 
        <nav className="flex flex-wrap min-w-20 items-center justify-between p-4">
          <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
            <a className="text-xl text-indigo-600 font-semibold font-heading" href="#">
              <Image src="/logotrans.png" className="img-fluid" alt="Optica mar" height={54} width={256}/>
            </a>
          </div>
            <div className="block lg:hidden">
              <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
              <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">Products</a>
              <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">Team</a>
              <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" href="#">Customers</a>
            </div>
          <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">Blog</a>
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">FAQ</a>
            <a className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" href="#">Contact</a>
          </div>
        </nav>
      </section>
      {/* Carousel */}
      <section>
        <div className="h-1/4 overflow-hidden">
          <Carousel1
          />
        </div>
      </section>

      {/*  hero */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">TU ÓPTICA EN TORREVIEJA</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">En Óptica Mar buscamos ofrecer a cada persona la mejor solución para sus necesidades. Por eso, a la hora de realizar la compra o analizar tu visión, además de aconsejarte, tratamos de informarte explicándote las distintas opciones disponibles, con sus ventajas e inconvenientes.</p>
          </div>
          <div className="flex mt-6 justify-center mb-10">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                 <img src="/sunglasses1.svg" alt="calidad"/>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Calidad</h2>
                <p className="leading-relaxed text-base">Tanto en lentes oftálmicas y de contacto como en las mejores colecciones de gafas.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <img src="/sunglasses2.svg" alt="profesionalidad"/>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Profesionalidad</h2>
                <p className="leading-relaxed text-base">Todo el equipo hace hincapie en la formación continua y en la atención al cliente.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <img src="sunglasses3.svg" alt="tecnologia" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">tecnología</h2>
                <p className="leading-relaxed text-base">Contamos siempre con la mejor maquinaria, tanto en taller de montaje como en gabinete de refracción.</p>
              </div>
            </div>
            {/* fourth leg */}
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <img src="sunglasses4.svg" alt="satisfaccion" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Satisfacción</h2>
                <p className="leading-relaxed text-base">Tú eres lo primero para nosotros. Tanto en salud como en moda nos esforzamos en satisfacerte.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
        </div>
      </section>

      {/*  Links 1 */}
      <section className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20 js-show-on-scroll">
        <div className="relative">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                    <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                        Graduación 3D
                    </p>
                    <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                      Medimos tu visión con el sistema más moderno
                    </h4>
                    <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                        Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
                    </p>
                    <div className="">
                      <button className="">Ver más...</button>
                    </div>
                    <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                    Live modifications
                                </span>
                            </div>
                        </li>
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                    Data tracker
                                </span>
                            </div>
                        </li>
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                    24/24 support
                                </span>
                            </div>
                        </li>
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                    Free tips to improve work time
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                    <div className="relative space-y-4">
                    <div className="flex items-end justify-center lg:justify-start space-x-4">
                            <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src="/mar3D-04.jpeg" alt="1"/>
                            <img className="rounded-lg shadow-lg w-40 md:w-64" width="260" src="/mar3D-03.jpeg" alt="2"/>
                        </div>
                        <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                            <img className="rounded-lg shadow-lg w-24 md:w-40" width="170" src="/mar3D-02.jpeg" alt="3"/>
                            <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src="/mar3D-01.jpeg" alt="4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/*  Links 2 */}
      <section className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20 js-show-on-scroll">
        <div className="relative">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-1 lg:max-w-2xl ml-auto">
                    <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                      Retinógrafo único en la región
                    </p>
                    <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                        La más alta tecnología a tu alcance.
                    </h4>
                    <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                        Build a simple and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
                    </p>
                    <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                    Live modifications
                                </span>
                            </div>
                        </li>
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                    Data tracker
                                </span>
                            </div>
                        </li>
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                    24/24 support
                                </span>
                            </div>
                        </li>
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                    Free tips to improve work time
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-10 lg:mx-4 relative relative-20 lg:mt-0 lg:col-start-2">
                    <div className="relative space-y-4">
                        <div className="flex items-end justify-center lg:justify-start space-x-4">
                            <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src="/retinog1.jpg" alt="1"/>
                            <img className="rounded-lg shadow-lg w-40 md:w-64" width="260" src="/retinog2.jpg" alt="2"/>
                        </div>
                        <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                            <img className="rounded-lg shadow-lg w-24 md:w-40" width="170" src="/retinog3.jpg" alt="3"/>
                            <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src="/retinog4.jpg" alt="4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/*  Links 3 */}
      <section className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20 js-show-on-scroll">
        <div className="relative">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                    <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                      Estamos con el deporte local
                    </p>
                    <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                      Vuestra salud siempre es lo primero
                    </h4>
                    <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                        Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
                    </p>
                    <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                    Live modifications
                                </span>
                            </div>
                        </li>
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                    Data tracker
                                </span>
                            </div>
                        </li>
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                    24/24 support
                                </span>
                            </div>
                        </li>
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                    Free tips to improve work time
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                    <div className="relative space-y-4">
                        <div className="flex items-end justify-center lg:justify-start space-x-4">
                            <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src="/remo-full.jpg" alt="1"/>
                            <img className="rounded-lg shadow-lg w-40 md:w-64" width="260" src="/remo1.jpg" alt="2"/>
                        </div>
                        <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                            <img className="rounded-lg shadow-lg w-24 md:w-40" width="170" src="/sporting.jpg" alt="3"/>
                            <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src="/chipo.jpg" alt="4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Nuestros servicios</h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 hidden">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div className="flex flex-wrap -m-4 js-show-on-scroll">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/servicios1.jpg" alt="gabinete"/>
                <h2 className="text-lg text-blue-500 font-medium title-font mb-4">Gabinete de refracción</h2>
                <p className="leading-relaxed text-base text-justify">Tenemos la última tecnología para realizar exámenes visuales completos con tonómetro, refractómetro y lámpara de hendidura que nos permiten buscar la mejor solución óptica en cada caso.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/servicios2.jpg" alt="contactologia"/>
                <h2 className="text-lg text-blue-500 font-medium title-font mb-4">Contactología</h2>
                <p className="leading-relaxed text-base text-justify">Especialistas en adaptación de todo tipo de lentes de contacto, blandas, permeables, tóricas y multifocales. Estudiaremos tu caso para ofrecerte siempre la solución más personalizada.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/servicios3.jpg" alt="taller"/>
                <h2 className="text-lg text-blue-500 font-medium title-font mb-4">Taller de montaje</h2>
                <p className="leading-relaxed text-base text-justify">Montajes exclusivos y personalizados realizados íntegramente en nuestro taller por profesionales cualificados, así se garantiza la perfecta adaptación y mantenimiento de nuestras gafas.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/servicios4.jpg" alt="salud ocular"/>
                <h2 className="text-lg text-blue-500 font-medium title-font mb-4">Salud ocular</h2>
                <p className="leading-relaxed text-base text-justify"> Deja tu visión en manos de nuestros especialistas y que no te mareen de un sitio a otro. </p>
                <ul className="list-disc">
                  <li>Diagnóstico diferencial completo</li>
                  <li>Retinoscopio propio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
        </div>
      </section>

      { /* Contacto */ }
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0Torrevieja+(Ramon%20Gallud%209)&amp;ie=UTF8&amp;t=&amp;z=18&amp;iwloc=B&amp;output=embed" style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">DIRECCIÓN</h2>
                <p className="mt-1">Ramón Gallud,9 Torrevieja</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-blue-500 leading-relaxed">info@opticamar.es</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">TELÉFONO</h2>
                <p className="leading-relaxed">96 570 88 59 </p>
              </div>
            </div>
          </div>

          <ContactForm />

        </div>
      </section>
      <footer className="text-gray-100 body-font">
        <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">ÓPTICA MAR</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 Jorge Mollón —
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@perseoh</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}
