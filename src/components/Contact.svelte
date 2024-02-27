<section class="mt-16 bg-gradient-to-r from-violeta via-azul to-celeste flex flex-col justify-center items-center p-6 lg:flex-row" id="contact">
    <form action="https://formsubmit.co/lucianavanelli13@gmail.com" method="POST" class="border-b-2 pb-10 lg:border-b-0 lg:border-r-2 lg:py-4 lg:px-10">
        <h2 class="text-center pb-2 text-white text-2xl font-semibold lg:text-3xl">Contact me and let's work together</h2>
        <div class="p-2">
            <label for="name" class="p-2 text-white font-semibold tracking-wide text-lg">Full name:</label>
            <input type="text" name="name" class="p-2 w-full border-white text-white border-2 bg-transparent focus:ring-0 rounded-lg">
        </div>
        <div class="p-2">
            <label for="email" class="p-2 text-white font-semibold tracking-wide text-lg">Email:</label>
            <input type="email" name="email" class="p-2 w-full border-white text-white border-2 bg-transparent focus:ring-0 rounded-lg">
        </div>
        <div class="p-2">
            <label for="message" class="p-2 text-white font-semibold tracking-wide text-lg">Message:</label>
            <textarea name="message" id="" rows="5" class="p-2 resize-none w-full border-white text-white border-2 bg-transparent focus:ring-0 rounded-lg"></textarea>
        </div>
        <input type="submit" value="Send message" class="text-center mx-auto m-4 py-2 px-4 border-2 border-white flex rounded-2xl text-white font-semibold tracking-wide hover:bg-white hover:text-azul transition-colors cursor-pointer">
    </form>
    <div class="pt-10 flex gap-5 text-white text-lg lg:pt-0 lg:px-10 lg:flex-col">
        <div class="flex gap-2 items-center hover:-translate-y-1 hover:underline underline-offset-2 lg:text-xl">
            <a href='mailto:lucianavanelli13@gmail.com' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="34" height="34" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg></a>
        </div>
        <div class="flex gap-2 items-center hover:-translate-y-1 hover:underline underline-offset-2 lg:text-xl">
            <a href="https://github.com/luchivanelli"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="34" height="34" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></a>
        </div>
        <div class="flex gap-2 items-center hover:-translate-y-1 hover:underline underline-offset-2 lg:text-xl">
            <a href="https://www.linkedin.com/in/luciana-vanelli/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="34" height="34" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg></a>
        </div>
    </div>
    <p class="text-azul bg-white p-2 font-medium text-center w-full mt-6 max-w-96 rounded-lg lg:hidden">Designed and developed by <br>Luciana Vanelli © 2024</p>
</section>
<p class="text-azul bg-gradient-to-r from-violeta via-azul to-celeste text-transparent bg-clip-text py-2 px-4 text-lg font-bold text-center w-full rounded-lg hidden lg:flex justify-end">Designed and developed by Luciana Vanelli © 2024</p>

<style>
    input:focus, textarea:focus {
        outline: none;
        border: transparent;
        background-color: white;
        color: black;
    }
    form {
        max-width: 600px;
    }
</style>