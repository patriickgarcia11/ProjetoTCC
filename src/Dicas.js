import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg, CardSubtitle } from 'reactstrap';

import { Midia } from './styles';
import foto1 from './Photos/1.jpg';
import foto2 from './Photos/2.jpg';
import foto3 from './Photos/3.jpg';
import foto4 from './Photos/4.jpg';
import foto5 from './Photos/5.jpg';
import foto6 from './Photos/6.jpg';


const Dicas = (props) => {
  return (
    <section>
      <Midia>
    <Row>
      <Col sm={{ size: 4, order: 2, offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src={foto1} />
          <CardTitle></CardTitle>
          <CardText> Ao estabelecer contato próximo com uma pessoa infectada ou que demonstra sintomas de tosse, espirro e etc. O vírus também dura, em média, 24h em objetos que foram contaminados 
            como copos, lenços, botões de elevador, corrimão do ônibus, maçaneta da porta. Por isso, é importante sempre higienizar as mãos antes de levá-las à boca, nariz ou olhos.</CardText>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Fonte: https://www.gov.br/saude/pt-br</CardSubtitle>
        </Card>
      </Col>
      <Col sm={{ size: 4, order: 2, offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src={foto2} />
          <CardTitle></CardTitle>
          <CardText> 
          - Higienize as mãos antes de consumir alimentos e sempre que tossir, espirrar ou entrar em contato com pessoas com sintomas respiratórios. Utilize álcool gel para limpar as mãos.<br/>
          – Utilize lenço descartável para higiene nasal e jogue no lixo imediatamente após o uso. Cubra o nariz e a boca quando espirrar ou tossir!<br/>
          – Evite tocar em mucosas dos olhos, nariz e boca.<br/>
          – Não compartilhe objetos de uso pessoal, como talheres, pratos, copos ou garrafas.<br/>
          – Procure manter os ambientes bem ventilados.
          </CardText>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Fonte: https://www.gov.br/saude/pt-br</CardSubtitle>
        </Card>
      </Col>

      <Col sm={{ size: 4, order: 2, offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src={foto3} />
          <CardTitle></CardTitle>
          <CardText> 
          Os sintomas iniciais da infecção pelo coronavírus são semelhantes aos causados por outros vírus, como o H1N1. Entre eles: Febre, tosse e dificuldade para respirar. Ao sentir os sintomas, 
          procure um médico ou um posto de saúde.
          </CardText>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Fonte: https://www.gov.br/saude/pt-br</CardSubtitle>
        </Card>
      </Col>
      <Col sm={{ size: 4, order: 2, offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src={foto4} />
          <CardTitle></CardTitle>
          <CardText> 
          Em média, as pessoas começam a desenvolver sintomas a partir de 5 dias de contágio. Pesquisadores aconselham as pessoas que podem estar infectadas a se isolar voluntariamente por 14 dias. 
          Mas é preciso saber que é possível que uma pessoa passe os dias de isolamento sem desenvolver sintomas, mas ainda assim estar infectada
          </CardText>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Fonte: https://www.gov.br/saude/pt-br</CardSubtitle>
        </Card>
      </Col>
    </Row>

    
    <Row>
      <Col sm={{ size: 4, order: 2, offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src={foto5} />
          <CardTitle></CardTitle>
          <CardText> 
          Os estudos apontam que o vírus pode sobreviver em gotículas por até três horas após ser expelido no ar. Quando depositado sobre papelão o vírus pode sobreviver por  até 24 horas, e de dois a três 
          dias sobre superfícies de plástico e aço inoxidável, incluindo maçanetas de portas, bancadas e outras superfícies duras.
          </CardText>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Fonte: https://www.gov.br/saude/pt-br</CardSubtitle>
        </Card>
      </Col>
      <Col sm={{ size: 4, order: 2, offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src={foto6} />
          <CardTitle></CardTitle>
          <CardText> 
          Ligue para o “Disque Coronavírus" das 7h às 19h pelos telefones (11) 4637-8425. É um canal de atendimento à comunidade no combate ao novo coronavírus, voltada à comunidade 
          interna e externa, disponível para esclarecer acerca dos procedimentos a serem adotados individualmente ou em relação a pessoas próximas em caso de qualquer suspeita. O principal objetivo é 
          impedir o pânico generalizado, evitando a superlotação  do sistema de saúde. O mais importante é ficar atento aos sintomas e fazer o auto-isolamento, se possível.
          </CardText>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Fonte: https://www.gov.br/saude/pt-br</CardSubtitle>
        </Card>
      </Col>
    </Row>
    </Midia>
    </section>

    
  );
};


export default Dicas;