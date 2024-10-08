import { CheckCircle2, Plus } from "lucide-react"
import { Button } from "./ui/button"
import { DialogTrigger } from "./ui/dialog"
import { InOrbitIcon } from "./ui/in-orbit-icon";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { OutlineButton } from "./ui/outline-button";

export function Summary(){
    return (
        <div className="py-10 ma-w-[480px] px-5 mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                <InOrbitIcon/>
                <span className="text-lg font-semibold">16 as 30 de Setembro</span>
               </div>
                <DialogTrigger>
                    <Button size="sm">
                        <Plus className="size-4"/>
                            Cadastrar meta!    
                    </Button>  
                </DialogTrigger>        
            </div>  

            <div className="flex flex-col gap-3">
                <Progress max={15} value={8}>
                    <ProgressIndicator style={{width:200}}/>
                </Progress>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>
                    Você completou{' '}
                    {/* <span className="text-zinc-100">{summary.completed}</span> de{' '}
                    <span className="text-zinc-100">{summary.total}</span> metas nessa */}
                    semana.
                </span>
                {/* <span>{completedPercentage}%</span> */}
                </div>
            </div>  
            <Separator /> 

            <div className="flex flex-wrap gap-3">
                 <OutlineButton>
                    <Plus className="size-4 text-zinc-600"/>
                    Meditar
                </OutlineButton>       
            </div>
            <div className="flex gap-3">
                 <OutlineButton>
                    <Plus className="size-4 text-zinc-600"/>
                    Meditar
                </OutlineButton>       
            </div>
            <div className="flex gap-3">
                 <OutlineButton>
                    <Plus className="size-4 text-zinc-600"/>
                    Meditar
                </OutlineButton>       
            </div>

            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-medium">Sua semana</h2>

                <div className="flex flex-col gap-4">
                    <h3 className="font-medium">
                    Domingo{' '}
                    <span className="text-zinc-400 text-xs">(10 de Agosto)</span>
                    </h3>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="size-4 text-pink-500"/>
                            <span className="text-sm text-zinc-400">
                            Você completou 
                            <span className="text-zinc-100">"Acordou cedo"</span> ás {' '}   
                            <span className="text-zinc-100">08:13h</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}