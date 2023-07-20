<script>
    import { app, db } from '$lib/firebase'
    import { doc, getDoc, setDoc } from 'firebase/firestore'

    async function submitEmail() {
        const docRef = doc(db, 'email', "emails")
        const docSnap = await getDoc(docRef)
        const emails = docSnap.data().emails
        emails.push(userEmail)
        await setDoc(docRef, { emails })
        alert('Thanks for signing up! We will be in touch soon.')
        userEmail = ''
        thankyou = true
    }

    let userEmail = ''
    let counter = 0
    function counterAndSpinner() {
        counter += 1

        if (counter === 20) {
            counter = 0
        }
    }

    let thankyou = true
</script>

{#if !thankyou}
<div class="w-full bg-slate-900">
    <div class="bg-slate-950 text w-full h-10 text-white flex items-center justify-center font-semibold tracking-wide">Opt in via email for early access</div>
    
    <div class="flex items-center ml-12 mt-2">
        <img alt="The project logo" src="./logo.png" class='w-20 h-20' draggable="false"/>
        <h2 class='text-white font-bold -ml-2 text-3xl'>WebFlame AI</h2>
    </div>

    <p class="text-white text-center px-10 font-bold text-4xl">Fan the flame of imagination.</p>
    <p class="text-white text-center px-10 italic text-2xl mt-4">AI Generated UI</p>

    <div class="w-full h-full flex justify-center">
        <button class="bg-black w-80 h-96 mt-4 rounded-lg items-end flex flex-col relative" on:click={counterAndSpinner} >
            {#if counter === 0}
                <img alt="kitty website design"src="./kitty.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 1}
                <img alt="volcano website design"src="./volcano.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 2}
            <img alt="mars website design"src="./mars.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 3}
            <img alt="sea website design"src="./sea.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 4}
            <img alt="jungle website design"src="./jungle.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 5}
            <img alt="glass website design"src="./glass.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 6}
            <img alt="planet website design"src="./planet.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 7}
            <img alt="synth website design"src="./synth.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 8}
            <img alt="factory website design"src="./factory.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 9}
            <img alt="mountain website design"src="./mountain.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 10}
            <img alt="robot website design"src="./robot.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 11}
            <img alt="dystopian website design"src="./dystopia.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 12}
            <img alt="blossom website design"src="./blossom.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 13}
            <img alt="steak website design"src="./steak.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 14}
            <img alt="car website design"src="./car.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 15}
            <img alt="dating website design"src="./dating.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 16}
            <img alt="saas website design"src="./saas.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 17}
            <img alt="anime website design"src="./anime.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 18}
            <img alt="atomic website design"src="./atomic.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            {#if counter === 19}
            <img alt="athletics website design"src="./athletics.png" class="w-full h-full rounded-tr-lg rounded-tl-lg border-2 border-white" />
            {/if}
            <button class="bg-white w-full h-16 rounded-br-lg rounded-bl-lg py-3 text-black text-center hover:bg-slate-100 duration-150 font-bold" >Inspire Me 👆</button>
            </button>

    </div>
    <div class="w-full h-full flex items-center justify-center flex-col">
        
        <form on:submit={submitEmail} class="flex flex-col">
            <input name="email" type="email"  bind:value={userEmail} placeholder="Enter Your Email For Early Access" class="rainbow-border bg-black w-80 h-16 rounded-lg py-3 text-white text-center hover:bg-slate-950 font-bold mt-16" />
            <button class="bg-white w-80 h-12 rounded-lg text-black text-center hover:bg-slate-100 duration-150 font-bold mt-4">Get Early Access</button>
        </form>
        <style>
            .rainbow-border {
                border: 2px solid;
                border-image: linear-gradient(to right, orange, indigo, violet) 1;
                animation: rainbow 10s linear infinite;
            }

            @keyframes rainbow {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }
        </style>

    </div>

</div>
{/if}

{#if thankyou}
<div class="w-full bg-slate-900 flex items-center justify-center flex-col">
    <div class="bg-slate-950 text w-full h-10 text-white flex items-center justify-center font-semibold tracking-wide">We'll be in touch soon!</div>
    <div class="text-white font-bold mt-20 text-3xl text-center px-6">Thank you for signing up for early access!! BUT WAIT</div>
    <p class="text-center px-6 text-white mt-2">If you're an eager fella... and want to receive <span class="font-bold">pre-alpha</span> access WITH exclusive updates from the devs,</p>
    <p class="text-center px-6 text-white mt-10">for just <span class="text-2xl">☕ ☕ ($9)</span> you can</p>
    <a href="https://buy.stripe.com/9AQ8yI0sMcsj5lm6oq">
    <button class="bg-slate-950 text-white font-bold mt-10 border-2 border-slate-300 py-4 px-4 rounded-lg hover:bg-slate-800 duration-150 text-2xl">Unlock Pre-Alpha Access</button>
    </a>
</div>
{/if}