import { DialogTrigger } from '@radix-ui/react-dialog';
import logo from '../assets/in-orbit-logo.svg';
import letsStart from '../assets/rocket-launch-illustration.svg';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';

export function EmptyGoals(){
    return(
        <div className="h-screen flex flex-col items-center justify-center gap-8">
            <img src={logo} alt="Logo minhas metas" />
            <img src={letsStart} alt="imagem minhas metas" />
            <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
                Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
                mesmo?</p>

            <DialogTrigger asChild>
                <Button>
                <Plus className='size-4'/> 
                </Button>
            </DialogTrigger>
    </div>
    )
}