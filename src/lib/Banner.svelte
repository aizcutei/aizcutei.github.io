<script>
  import { onMount } from "svelte";
  import { fade, slide, fly } from "svelte/transition";
  import { expoInOut, expoOut } from "svelte/easing";
  import Typewriter from "svelte-typewriter";
  let visible = false;

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 1000);
  });
</script>

{#if visible}
  <div
    class="bg-[#6edcff] h-20 md:h-30 lg:h-40 xl:h-50 flex place-items-center lg:place-content-center my-10 trnasition duration-500 ease-in-out"
    transition:slide={{ duration: 500, easing: expoInOut }}
  >
    <div class="max-w-1280px">
      <div
        class="px-1 text-left font-800 text-6 md:text-8 lg:text-10 xl:text-14 lg:w-1024px transition duration-300 ease-in-out"
      >
        <Typewriter
          mode="loop"
          interval="50"
          delay="500"
          keepCursorOnFinish="true"
          wordInterval="1500"
        >
          <p>
            <span id="id" class="text-white font-mono">aizcutei</span>
            <span id="id" class="text-white font-mono">is this real?</span>
          </p>
        </Typewriter>
      </div>
    </div>
  </div>
{/if}

<style>
  #id {
    text-shadow: 0 0 30px whitesmoke, 0 0 10px whitesmoke;
    transition: 100ms;
  }
  #id:hover {
    text-shadow: 0 0 30px white, 0 0 10px white;
  }
</style>
