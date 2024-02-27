<script>
    import foto from '../assets/foto.jpg'
</script>

<section class="mt-16">
    <h2 class="px-4 tracking-wide text-2xl font-semibold border-b-2 border-azul inline-block lg:text-3xl dark:text-white">A little about me</h2>
    <div class="lg:flex justify-between items-center w-full">
        <div class="text py-4 px-6 flex flex-col gap-2 tracking-wide lg:border-r-2 border-azul lg:text-lg dark:text-white">
            <p>I studied Systems Engineering for 2 years at the National Technological University of Rosario. I started to focus on the world of development and study on my own.</p>
            <p>I am a self-taught person eager to grow and acquire new skills. I take courses to improve myself and expand my skills.</p>
        </div>
        <div class="hidden lg:inline-block mx-auto">
            <div class="w-48 h-48 grid place-content-center rounded-full bg-gradient-to-l from-violeta via-azul to-celeste">
                <img src={foto} alt="foto" class="rounded-full">
            </div>
        </div>
    </div>
</section>

<style>
    .text {
        max-width: 800px;
    }
    img {
        width: 180px;
        height: 180px;
    }
</style>