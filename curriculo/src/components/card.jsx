import { Carousel } from "./carousel/carousel";
import { AboutMe } from "./aboutMe";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



export default function Card() {
	const navigate = useNavigate()
	
	const handleClick = () => {
		navigate('/passwordGameScreen') // Corrigido typo aqui também
	}
	return(
		<div className='h-screen'>
			<h1 className='flex justify-center text-6xl'>Curriculo</h1>
		<div className='flex justify-center'>
		<div className='bg-[var(--gray-800)] flex justify-center w-[70%] flex-col rounded-lg gap-2 p-2'>
			<b className='flex justify-center text-4xl'>Sobre Mim</b>
			<AboutMe />
			<h1 className='flex justify-center text-4xl'>Portifólio</h1>
			<Carousel />
			<div className='flex justify-center'>
			<button onClick={handleClick} className='h-16 w-32 bg-[var(--green-300)] rounded-lg hover:bg-[var(--gray-900)] hover:border-2 hover:border-[var(--green-500)] transition duration-100 text-[var(--gray-900)] hover:text-[var(--green-500)] cursor-pointer'>Jogo da Senha</button>
			</div>
		</div>
		</div>
		</div>
	);
}