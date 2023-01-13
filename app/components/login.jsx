import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/Auth'
export default function Login() {


    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const { login } = useContext(AuthContext);

    function usernameChangeHandler(e) {
        SetUsername(e.target.value);
        console.log(e.target.value)
    }

    function passwordChangeHandler(e) {
        SetPassword(e.target.value);
        console.log(e.target.value)


    }

    function submitHandler(e) {
        e.preventDefault();
        // call login function fron context
        login({
            username,
            password
        });
        console.log(username)

    }

    return (


        <div class="relative flex h-full w-full">
            <div class="h-screen w-1/2 bg-[#EFE2B2] dark:bg-[#808080]">
                <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2 text-[#808080] dark:text-white">
                    <div >
                        <p class="text-2xl">Login</p>
                        <p>please login to continue</p>
                    </div>
                    <div class="my-6">
                        <button class="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-[#808080] hover:bg-gray-200 sm:p-2"><img src="https://freesvg.org/img/1534129544.png" class="mr-2 w-6 object-fill" />Sign in with Google</button>
                    </div>
                    <div>
                        <fieldset class="border-t border-solid border-gray-600">
                            <legend class="mx-auto px-2 text-center text-sm">Or login via our secure system</legend>
                        </fieldset>
                    </div>
                    <div class="mt-10">
                        <form onSubmit={submitHandler} >
                            <div>
                                <label class="mb-2.5 block font-extrabold" for="text">Email</label>
                                <input onChange={usernameChangeHandler} type="text" id="text" class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-[#808080] placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="mail@user.com" />
                            </div>
                            <div class="mt-4">
                                <label class="mb-2.5 block font-extrabold" for="email">Password</label>
                                <input onChange={passwordChangeHandler} type="password" id="email" class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-[#808080] placeholder-indigo-900 shadow" />
                            </div>
                            <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">

                                <div><input type="checkbox" id="remember" /><label for="remember" class="mx-2 text-sm">Remember me</label></div>

                                <div>
                                    <a href="#" class="text-sm hover:text-gray-200">Forgot password</a>
                                </div>
                            </div>
                            <div class="my-10">
                                <button class="w-full rounded-full bg-[#270D0B] dark:bg-black p-5 hover:bg-orange-800">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="h-screen w-1/2 dark:bg-[#808080]">
  </div>
        </div>

    )
}