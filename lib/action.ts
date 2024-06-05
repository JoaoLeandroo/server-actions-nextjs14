"use server"
import {redirect} from "next/navigation"
import prisma from "./db";
import { z } from "zod"

const PersonSchema = z.object({
    name: z.string().min(3, {message: "Nome invalido."}),
    email: z.string().email({message: "Insira um email valido."}).transform(email => email.toLowerCase()),
    password: z.string().min(6, {message: "Informe uma senha com no minimo 6 digitos."}).max(32)
})


const CreatePerson = async (prevState: any, formData: FormData) => {

    const validatedFields = PersonSchema.safeParse(
        Object.fromEntries(formData.entries())
    );
    
      if(!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, password } = validatedFields.data

    const existingUser = await prisma.person.findUnique({
        where:  {email}
    })
    
    if(existingUser) {
        console.log("Esse usuario já existe!")
        return {
            Error: {
                email: ["Email já em uso."]
            }
        }
    }

    await prisma.person.create({
        data: {
            name: name,
            email: email,
            password: password,
        }
    })

    redirect("/login")
}

const LoginSchema = z.object({
    email: z.string().email({message: "Insira um email valido."}).transform(email => email.toLowerCase()),
    password: z.string().min(6, {message: "A senha deve ter no minimo 6 caracters."}),
})


const LoginUser = async (prevState: any, formData: FormData) => {
    const validatedFields = LoginSchema.safeParse(
        Object.fromEntries(formData.entries())
    );
    
      if(!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { email, password } = validatedFields.data

    const user = await prisma.person.findUnique({
        where: { email }
    })

    if(!user) {
        return {
            Error: {
                email: ["Email ou senha incorretos."],
                password: ["Email ou senha incorretos"]
            }
        }
    }

    if(user.password !== password) {
        return {
            Error: {
                password: ["Email ou senha incorretos."],
                email: ["Email ou senha incorretos."]
            }
        }
    }

    redirect("/dashboard")

}


export { CreatePerson, LoginUser }