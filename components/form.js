import React from "react"
import { useForm } from "react-hook-form"

export default function Form(){
    const { register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data, errors);

    return (    
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contacta con nosotros</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Envíanos un mensaje y enseguida estamos contigo</p>
                <div className="relative mb-4">
                    <label htmlFor="nombre" className="leading-7 text-sm text-gray-600">Nombre</label>
                    <input {...register("nombre", {required: true, maxLength: 80}) } type="text" id="nombre" name="nombre" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input {...register('email', {required: true, maxLength: 50, pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/})} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="mensaje" className="leading-7 text-sm text-gray-600">Mensaje</label>
                    <textarea {...register('mensaje', {required: true})} id="mensaje" name="mensaje" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Enviar</button>
                <p id="errorLog" className="text-xs text-gray-500 mt-3 hidden">Posibles errores en envío de form.</p>
            </form>       
        </div>
    )
}