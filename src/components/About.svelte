<script>
    import foto from '../assets/foto.jpg'
    import cv from '../assets/Luciana Vanelli.pdf'
</script>

<section class="mt-16">
    <h2 class="lg:hidden px-4 tracking-wide text-2xl font-semibold border-b-2 border-azul inline-block lg:text-3xl dark:text-white lg:w-90 lg:px-10 lg:translate-x-8">A little about me</h2>
    <div class="lg:flex justify-center gap-20 items-center w-full">
        <div class="text py-4 px-6 flex flex-col gap-2 tracking-wide lg:ml-4 lg:text-xl  dark:text-white">
            <h2 class="hidden lg:inline-block px-4 tracking-wide text-2xl font-semibold lg:text-3xl dark:text-white">A little about me</h2>
            <p>I studied Systems Engineering for 2 years at the National Technological University of Rosario. I started to focus on the world of development and study on my own.</p>
            <p>I am a self-taught person eager to grow and acquire new skills. I take courses to improve myself and expand my skills.</p>
            <p>To know more about me, <a href={cv} download target='_blank' class="text-azul lg:text-violeta font-semibold hover:underline underline-offset-2">download my CV</a></p>
        </div>
        <div class="hidden lg:inline ">
            <div class="w-52 h-52 grid place-content-center rounded-full bg-gradient-to-l from-violeta via-azul to-celeste">
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
        width: 200px;
        height: 200px;
    }
</style>