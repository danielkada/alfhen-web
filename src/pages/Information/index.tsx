import { useLocation, useNavigate } from 'react-router-dom';

import { TbArrowBack } from 'react-icons/tb';

import { ButtonContainer, Container } from './styles';

export default function Information() {
	const location = useLocation();
	const { book } = location.state;

	const navigate = useNavigate();

	return (
		<Container>
			<div className="header">
				<button type='button' onClick={() => navigate(-1)}>
					<TbArrowBack color='#E22D2D' size={26} />
					<span>Voltar</span>
				</button>

			</div>

			<div className="book">
				<h3>Informações</h3>

				<div className="img">
					<img src={book?.img} alt="Cover" />
					<p className='description'>
            Harry não é mais um garoto. Aos 15 anos, continua sofrendo a rejeição dos Dursdley, sua estranhíssima família no
            mundo   dos trouxas, ou seja, todos os que não são bruxos. Também continua contando com Rony Weasley e Hermione
            Granger, seus melhores amigos em Hogwarts, para levar adiante suas investigações e aventuras. Mas o bruxinho começa
            a sentir e descobrir coisas novas, como o primeiro amor e a sexualidade. Nos volumes anteriores, J. K. Rowling mostrou
            como Harry foi transformado em celebridade no mundo da magia por ter derrotado, ainda bebê, Voldemort, o todo-poderoso
            bruxo das trevas que assassinou seus pais. Neste quinto livro da saga, o protagonista, numa crise típica da adolescência, tem
            ataques de mau humor com a perseguição da imprensa, que o segue por todos os lugares e chega a inventar declarações que
            nunca deu. Harry vai enfrentar as investidas de Voldemort sem a proteção de Dumbledore, já que o diretor de Hogwarts é
             afastado da escola. E vai ser sem a ajuda de seu protetor que o jovem herói enfrentará descobertas sobre a personalidade
            controversa de seu pai, Tiago Potter, e a morte de alguém muito próximo.
					</p>
				</div>

				<div className="book-information">
					<div className="informations">
						<div className="text-container">
							<p>Nome: </p>
							<span>{book.name}</span>
						</div>
						<div className="text-container">
							<p>Autors: </p>
							<span>{book.name}</span>
						</div>
						<div className="text-container">
							<p>Editora: </p>
							<span>{book.name}</span>
						</div>
						<div className="text-container">
							<p>Número de Páginas: </p>
							<span>{book.name}</span>
						</div>
					</div>

					<div className="number-of-pages">
						<span>Página atual: </span>
						<input type={'number'} />
						<span> /704</span>
					</div>
				</div>

				<ButtonContainer>
					<button type='submit'>
            Adicionar livro
					</button>
				</ButtonContainer>


			</div>
		</Container>
	);
}
