import { div } from 'framer-motion/client';
import eu from '../assets/eu.jpg';


export function AboutMe() {
	return(

		<div className='flex justify-center gap-4'>
			<div>
		<img src={eu} alt="" className='h-32 w-32 rounded-md border-2 border-[var(--green-500)]'/>
			</div>
			<div className='w-[70%] p-4'>
		<p>Olá! Me chamo João e sou estudante na área de tecnologia, com grande interesse em desenvolvimento web.
			 Tenho me dedicado a aprender e praticar tecnologias modernas da área, buscando criar interfaces funcionais
			  e bem estruturadas. Este site que você está navegando foi desenvolvido por mim utilizando <span>React </span> 	
			    junto com <span>Tailwind CSS</span>, ferramentas que gosto muito pela eficiência e flexibilidade que oferecem
			    no desenvolvimento de interfaces modernas.</p>
			</div>
		</div>
	)
}