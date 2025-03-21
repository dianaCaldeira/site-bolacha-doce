import './Presentation.css';
import logoBolachaGif from '../../assets/gifs/logo_bolacha_2.gif';

const Presentation = () => {
  return (
    <section className="presentation">
      {/* Lado esquerdo: gif */}
      <div className="presentation-gif">
          <img src={logoBolachaGif} alt="Gif Logo" />
      </div>

      {/* Lado direito: conteúdo de texto */}
      <div className="presentation-content">
        <h2>Criamos convites e toda a identidade visual do seu evento</h2>
        <p>
          Casamento, bodas, aniversário ou evento especial. Pensamos em cada detalhe, mas também no seu orçamento.
          A partir de uma conversa, já dá para saber direitinho o que você quer: um convite personalizado e feito à mão ou
          um convite lindo e por um preço acessível.
        </p>
        <p>
          Enquanto escolhe, já fique sabendo: tudo vai sair do jeito que você sempre sonhou.
        </p>

        <button className="cta-button">Atendimento personalizado</button>
      </div>
    </section>
  );
};

export default Presentation;
