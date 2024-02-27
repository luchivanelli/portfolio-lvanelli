<script>
    import img1 from '../assets/html.png'
    import img2 from '../assets/css.png'
    import img3 from '../assets/sass.png'
    import img4 from '../assets/bootstrapcss.png'
    import img5 from '../assets/tailwindcss.png'
    import img6 from '../assets/js.png'
    import img7 from '../assets/react.png'
    import img8 from '../assets/svelte.png'
    import img9 from '../assets/git.png'
    import img10 from '../assets/github.png'

    import Skill from './Skill.svelte'
    import Certificates from './Certificates.svelte'

    const skills = [
        [img1, 'HTML'], 
        [img2, 'CSS'], 
        [img3, 'Sass'], 
        [img4, 'Bootstrap'], 
        [img6, 'JavaScript'], 
        [img5, 'Tailwind'], 
        [img7, 'React'], 
        [img8, 'Svelte'], 
        [img9, 'Git'], 
        [img10, 'GitHub']]

        const handleModal = ()=> {
            const modal = document.getElementById("certificates")
            modal.classList.toggle('flex')
            modal.classList.toggle('hidden')
        }
</script>

<section class="mt-16" id="skills">
    <h2 class="text-center text-2xl font-semibold lg:text-3xl dark:text-white">My skills</h2>
    <p class="mx-auto text-center text-gray-600 lg:text-lg dark:text-gray-400">These are the technologies I work with</p>
    <div class="grid grid-cols-5 gap-4 p-6 skills mx-auto lg:gap-y-6">
        {#each skills as skill}
            <Skill img={skill[0]} name={skill[1]}/>
        {/each}
    </div>
    <div class="p-3 text-center mx-auto tracking-wide lg:text-lg">
        <p class="mx-auto dark:text-white">Throughout my apprenticeship I obtained some <b>certificates</b>. To see them <button class="text-violeta font-semibold hover:underline" on:click={handleModal}>click here</button></p>
    </div>
    <Certificates on:cerrar={handleModal}/>
</section>

<style>
    .skills {
        max-width: 900px;
    }

    p {
        max-width: 500px;
    }
</style>