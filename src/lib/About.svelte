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
  <div class="m-10" transition:slide={{ duration: 500, easing: expoInOut }}>
    <div
      id="about"
      class="bg-[#6edcff] h-60 rounded-lg rotate-0 mx-auto max-w-lg"
    >
      <Typewriter mode="cascade">
        <div class="text-white text-lg font-800 p-5">
          <p>Hi, I am aizcutei.</p>
          <p>DEV PRODUCE TRANSLATE</p>
          <p>You can find me in by</p>
          <p>i_AT_aizcutei.com</p>
        </div>
      </Typewriter>
    </div>
  </div>
{/if}

<style>
  #about {
    background: rgb(148, 227, 254);
    background: linear-gradient(
      45deg,
      rgba(148, 227, 254, 1) 37%,
      rgba(174, 187, 217, 1) 100%
    );

    box-shadow: 1px -1px 10px rgba(174, 187, 217, 1), -1px 1px 10px #aaffff;

    transition: 500ms ease-in-out;
  }
  #about:hover {
    box-shadow: 1px -1px 20px #7ec1d8, -1px 1px 20px #aaffff;
  }
</style>
