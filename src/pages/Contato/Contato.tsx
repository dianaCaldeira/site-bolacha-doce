import React, { useState, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import emailjs from '@emailjs/browser';
import './Contato.css';

const Contato: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [emailStatus, setEmailStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatar a mensagem para o WhatsApp
    const texto = `Olá, meu nome é ${nome}. ${mensagem} Meu email: ${email}. Meu celular: ${celular}`;
    
    // Número do WhatsApp (substitua pelo número real)
    const numeroWhatsapp = "5531971750654"; // Formato: país (55) + DDD (11) + número
    
    // Criar URL do WhatsApp
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`;
    
    // Abrir WhatsApp em nova janela
    window.open(urlWhatsapp, '_blank');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setLoading(true);
    setEmailStatus('Enviando...');
    
    // Substitua pelos seus IDs do EmailJS
    const serviceId = 'service_abc123'; // Substitua pelo seu Service ID
    const templateId = 'template_xyz789'; // Substitua pelo seu Template ID
    const publicKey = 'uVwXYZ123456'; // Substitua pela sua Public Key
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email enviado!', result.text);
        setEmailStatus('Mensagem enviada com sucesso!');
        // Limpar o formulário após o envio
        setNome('');
        setEmail('');
        setCelular('');
        setMensagem('');
        setTimeout(() => setEmailStatus(''), 5000); // Limpa a mensagem após 5 segundos
      })
      .catch((error) => {
        console.error('Erro ao enviar email:', error.text);
        setEmailStatus('Erro ao enviar a mensagem. Tente novamente.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="page-container">
      <Header />
      <div className="contato-content">
        <h1>Entre em Contato</h1>
        <p>Preencha o formulário abaixo e escolha como deseja enviar sua mensagem.</p>
        
        <div className="contato-form-container">
          <form ref={form} className="contato-form">
            <div className="form-group">
              <label htmlFor="user_name">Nome:</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                placeholder="Seu nome completo"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="user_email">Email:</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="seuemail@exemplo.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="user_phone">Celular:</label>
              <input
                type="tel"
                id="user_phone"
                name="user_phone"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                required
                placeholder="(00) 00000-0000"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensagem:</label>
              <textarea
                id="message"
                name="message"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
                placeholder="Escreva sua mensagem aqui..."
                rows={5}
              />
            </div>
            
            {emailStatus && (
              <div className={`status-message ${emailStatus.includes('sucesso') ? 'success' : emailStatus.includes('Erro') ? 'error' : ''}`}>
                {emailStatus}
              </div>
            )}
            
            <div className="form-buttons">
              <button type="button" className="submit-button whatsapp-button" onClick={handleWhatsAppSubmit}>
                Enviar via WhatsApp
              </button>
              <button 
                type="button" 
                className="submit-button email-button" 
                onClick={handleEmailSubmit}
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar via E-mail'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contato;