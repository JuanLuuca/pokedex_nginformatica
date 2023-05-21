import { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import { loginApi } from "../../services/api";
import { toast } from "react-toastify";

export function Resgister() {
    const [theme, setTheme] = useState("light");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function handleCreateLogin(event: FormEvent) {
        event.preventDefault();

        const userRegister = {
            email: email,
            password: password
        }

        try {
            if(password == confirmPassword) {
                await loginApi.post('/register', userRegister);
                toast.success('Usuário criado com sucesso!');
                return;
            } else {
                toast.error('As senhas precisam ser iguais!');
                return;
            }
        } catch (error) {
            return toast.error('O email já existe por favor insira outro');
        }
    }
        
    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
          } else {
            setTheme('light')
          }
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
    }, [theme])

    function handleThemeSwitch() {
        setTheme(theme == "dark" ? "light" : "dark")
    }

    return (
        <section className="bg-gray-50 dark:bg-blue-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="flex items-center justify-center">
                    <img alt="Pokedex" src="https://ik.imagekit.io/hwyksvj4iv/pokedex_N_WgWrJK0s.png" className="w-40 h-16" />
                </div>
                    <form onSubmit={handleCreateLogin} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu email</label>
                            <input type="email" id="email" onChange={(event) => setEmail(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                            <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Senha</label>
                            <input type="password" id="password" onChange={(event) => setConfirmPassword(event.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Criar Conta</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Já tem sua conta? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Entrar</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}