import { Plus } from "lucide-react"
import { Button } from "./ui/button"
import { DialogTrigger } from "./ui/dialog"
import { InOrbitIcon } from "./ui/in-orbit-icon";

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
                            Cadastrar meta    
                    </Button>  
                </DialogTrigger>        
            </div>  

        <div className="flex flex-col gap-3"></div>   
        </div>
    )
    
}