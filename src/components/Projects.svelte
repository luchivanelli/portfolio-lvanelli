<script>
    import Project from "./Project.svelte";

     let projects = [
        {name: 'LVanelli', skills: 'Svelte, Tailwind', description: 'My portfolio, made with the intention of being able to show my knowledge and skills', deploy: 'https://portfolio-lvanelli.vercel.app/', repository: 'https://github.com/luchivanelli/portfolio-lvanelli'},
        {name: 'Arroyo Seco es de Boca', skills: 'React, Formik, Bootstrap', description: 'Responsive page made to inform about the institution', deploy: 'https://luchivanelli.github.io/arroyosecoesdeboca/', repository: 'https://github.com/luchivanelli/arroyosecoesdeboca'},
        {name: 'Friends Calculator', skills: 'React, Formik, react-router, Sass', description: 'Personal project carried out to put algorithms into practice', deploy: 'https://luchivanelli.github.io/calculator/', repository: 'https://github.com/luchivanelli/calculator'},
        {name: 'Caballos en Libertad', skills: 'HTML, CSS, Javascript', description: 'Project carried out in internships. Teamwork using Trello', deploy: 'https://manuel14mds.github.io/viewinkua/', repository: 'https://github.com/luchivanelli/information-technology-it-workspace/tree/main/projects/caballos-en-libertad'},
        {name: 'Infoplayer', skills: 'React - Bootstrap - API (thesportsdb)', description: 'Responsive page with soccer API integration', deploy: 'https://luchivanelli.github.io/infoplayer/', repository: 'https://github.com/luchivanelli/infoplayer'},
        {name: 'PIA', skills: 'HTML, CSS', description: 'Responsive landing page for Workana client. Layout with design made in Figma (not my own)', deploy: 'https://luchivanelli.github.io/LandingPagePIA/', repository: 'https://github.com/luchivanelli/LandingPagePIA'}
    ]
</script>

<section class="mt-16" id="projects">
    <h2 class="text-center text-2xl font-semibold lg:text-3xl dark:text-white">Projects</h2>
    <p class="mx-auto text-center text-gray-600 lg:text-lg dark:text-gray-400">Somethings I developed so far</p>
    <div class="projects mx-auto grid grid-cols-2 gap-x-4 gap-y-8 py-6 px-3 md:grid-cols-3 lg:gap-x-10">
        {#each projects as project}
            <Project 
            name={project.name} 
            skills={project.skills}
            description={project.description}
            deploy={project.deploy}
            repository={project.repository}
            />
        {/each}
    </div>
</section>

<style>
    .projects {
        max-width: 850px;
    }
</style>