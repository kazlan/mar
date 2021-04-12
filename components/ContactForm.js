import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mleaeark");
  if (state.succeeded) {
      return <div className="relative leading-relaxed font-light mb-5 py-20 text-2xl text-green-600">
            <p>Gracias por tu mensaje.<br></br> ¡En breve nos pondremos en contacto contigo!</p>
        </div>
  }
  return (
      <form onSubmit={handleSubmit}>
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contacta con nosotros</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Envíanos un mensaje y enseguida estamos contigo</p>
        <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="relative mb-4">
            <label htmlFor="mensaje" className="leading-7 text-sm text-gray-600">Mensaje</label>
            <textarea id="mensaje" name="mensaje" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            <ValidationError prefix="mensaje" field="mensaje" errors={state.errors} />
        </div>
        <input type="hidden" name="_language" value="es" />
        <button type="submit" disabled={state.submitting} className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Enviar</button>
    </form>
  );
}
