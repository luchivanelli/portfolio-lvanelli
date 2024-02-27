<script>
    import { createEventDispatcher } from "svelte";
    import img1 from '../assets/cert1.png'
    import img2 from '../assets/cert2.png'
    import img3 from '../assets/cert3.png'
    import img4 from '../assets/cert4.png'
    import img5 from '../assets/cert5.png'
    import img6 from '../assets/cert6.png'
    import img7 from '../assets/cert7.png'
    import img8 from '../assets/cert8.png'

    let dispatch = createEventDispatcher();

    const functionDispatch = () => {
        dispatch('cerrar');
    };

    const certificates = [img1, img2, img3, img4, img5, img6, img7, img8]
</script>

<section id="certificates" class="hidden justify-center bg-modal fixed h-full top-0 right-0 left-0 bottom-0 w-full">
    <div class="grid place-content-center h-full">
        <div class="bg-white relative pt-10 pb-3 rounded-xl border-4 border-black">
            <button on:click={functionDispatch} class="border-2 rounded-full border-black p-1 absolute right-0 m-2 -mt-8">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 30 30">
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
            </button>
            <div class="grid grid-cols-2 gap-2 p-2 lg:grid-cols-4 lg:p-4">
                {#each certificates as cert}
                    <div class="border-2 border-black w-40 lg:w-52">
                        <img src={cert} alt="" class="object-cover w-full h-full">
                    </div>
                {/each}
            </div>
            <a href="https://drive.google.com/drive/folders/1yZ3sYJ9OwhllHBgLWpRxFmeLxV0f4uwq?usp=drive_link" target="_blank" class="text-center inline-block w-full mt-2 underline font-medium">View more</a>
        </div>
    </div>
</section>