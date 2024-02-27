<script>
    import foto from '../assets/foto.jpg'
</script>

<section class="flex flex-col justify-center items-center m-16 gap-5" id="home">
    <div class="lg:flex gap-6 items-center">
        <h2 class="text-3xl font-semibold lg:text-end lg:text-5xl dark:text-white">Hello! 👋 <br> My name is <b class="font-bold tracking-wide">Luciana</b></h2>
        <h1 class="text-3xl m-0 bg-gradient-to-r from-violeta via-azul to-celeste text-transparent bg-clip-text font-extrabold lg:text-5xl lg:border-l-2 border-violeta lg:pl-5">Frontend <br> Web Developer</h1>
    </div>
    <div class="lg:hidden">
        <div class="w-44 h-44 grid place-content-center rounded-full bg-gradient-to-l from-violeta via-azul to-celeste">
            <img src={foto} alt="foto" class="rounded-full">
        </div>
    </div>
</section>

<style>
    img {
        width: 166px;
        height: 166px;
    }
</style>