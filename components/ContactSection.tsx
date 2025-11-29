import React, { useState } from 'react';
import { Instagram, Send, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'colaboracion',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
        setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-gray-50 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <Send size={32} />
        </div>
        <h2 className="text-2xl font-bold text-villarreal-blue">¡Mensaje Enviado!</h2>
        <p className="text-gray-600 mt-2">Gracias por contactar con Mundo Groguet. Te responderemos pronto.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-villarreal-blue underline hover:text-villarreal-darkBlue"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div className="bg-villarreal-yellow p-8 rounded-2xl shadow-lg h-full flex flex-col justify-between relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl font-bold text-villarreal-blue mb-4">Contacta con nosotros</h2>
                <p className="text-villarreal-darkBlue mb-8 text-lg">
                  ¿Tienes una propuesta de colaboración? ¿Quieres enviar fotos de la afición? ¿O simplemente saludar?
                </p>
                
                <div className="space-y-4">
                   <a 
                     href="https://instagram.com" 
                     target="_blank" 
                     rel="noreferrer"
                     className="flex items-center space-x-3 text-villarreal-blue hover:text-white transition-colors p-3 bg-white/20 rounded-lg"
                    >
                     <Instagram size={24} />
                     <span className="font-semibold">Síguenos en Instagram</span>
                   </a>
                   <div className="flex items-center space-x-3 text-villarreal-blue p-3 bg-white/20 rounded-lg">
                     <Mail size={24} />
                     <span className="font-semibold">contacto@mundogroguet.com</span>
                   </div>
                </div>
             </div>
             {/* Decorative circle */}
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-300 rounded-full opacity-50 z-0"></div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Formulario de Colaboración</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-villarreal-yellow focus:border-transparent outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-villarreal-yellow focus:border-transparent outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-villarreal-yellow focus:border-transparent outline-none"
                >
                  <option value="colaboracion">Colaboración</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-villarreal-yellow focus:border-transparent outline-none"
                  placeholder="¿Qué tienes en mente?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-villarreal-blue text-white font-bold py-3 rounded-lg hover:bg-villarreal-darkBlue transition-colors shadow-md"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;