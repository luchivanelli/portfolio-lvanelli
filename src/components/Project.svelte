<script>
    export let name, skills, description, deploy, repository 
    import card from '../assets/card.png'
</script>

<div class="h-full card mx-auto shadow-lg sh rounded-xl shadow-gray-800">
    <img src={card} alt="bg card">
    <div class="bg-gray-600 h-52 rounded-b-xl text-white p-3 flex flex-col items-center justify-between">
        <h3 class="text-xl font-semibold tracking-wide text-center">{name}</h3>
        <p class="hidden md:inline-block text-justify font-light">{description}</p>
        <p class="font-light"><b class="text-celeste">Tech stack:</b> {skills}</p>
        <div class="flex flex-col gap-1 md:flex-row justify-between w-full text-sm">
            <div class="flex justify-center items-center gap-0.5 hover:text-celeste transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                <a href={deploy} class="underline underline-offset-2" target="_blank">Live Preview</a>
            </div>
            <div class="flex justify-center items-center gap-0.5 hover:text-celeste transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                <a href={repository} class="underline underline-offset-2" target="_blank">View code</a>
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        max-width: 240px;
    }
</style>