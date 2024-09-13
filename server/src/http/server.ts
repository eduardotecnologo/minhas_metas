import fastfy from "fastify"
import { serializerCompiler, 
         validatorCompiler, 
         type ZodTypeProvider } from "fastify-type-provider-zod";

import { createGoal } from "../usecases/create-goal";
import { getWeekPendingGoals } from "../usecases/get-week-pending-goals";
import { createGoalCompletion } from "../usecases/create-goal-completion";
import z from 'zod';
import fastifyCors from '@fastify/cors';

const app = fastfy().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors,{
    origin: '*',
});

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get('/pending-goals', async () => {
    
    const { pendingGoals } = await getWeekPendingGoals();
    return { pendingGoals };
});

app.post('/goals',{
    schema:{
        body:z.object({
            title: z.string(),
            desiredWeeklyFrequency: z.number(),
        }),
    }
},

   async request => {
    const { title, desiredWeeklyFrequency } = request.body;
       
    await createGoal({
        title,
        desiredWeeklyFrequency,
    })
})

app.post('/completions', {
    schema: {
        body: z.object({
            goalId: z.string(),
        }),
    }
},
async request => {
    const { goalId } = request.body;

    await createGoalCompletion({
        goalId,
    })
}
)

app.listen({
    port: 3333,
}).then(() =>{
    console.log('Http Server running');
});