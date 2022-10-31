<script>
  import { onMount } from "svelte";
  import { fade, slide, fly } from "svelte/transition";
  import { expoInOut, expoOut } from "svelte/easing";
  import Typewriter from "svelte-typewriter";
  import twitter from "../assets/twitter.svg";
  import youtube from "../assets/youtube.svg";
  import soundcloud from "../assets/soundcloud.svg";
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
      id="works"
      class="bg-[#6edcff] h-80 rounded-lg rotate-0 mx-auto max-w-lg"
    >
      <div>
        <div class="text-white text-lg font-800 p-5">
          <p class="text-10 text-shadow-lg tracking-wide">Works</p>
          <p class="mx-10">
            This page is under constraction, more content should be here later.
          </p>
          <p>Follow me on:</p>
          <div class="grid grid-cols-3 gap-4 mx-30 self-center">
            <a href="https://youtube.com/aizcutei" target="_blank"
              ><img
                src={youtube}
                class="h8 w8 transition duration-200 ease-in-out hover:skew-y-12"
                alt="youtube"
              /></a
            >
            <a href="https://soundcloud.com/aizcutei" target="_blank"
              ><img
                src={soundcloud}
                class="h8 w8 transition duration-200 ease-in-out hover:scale-120 hover:-rotate-12"
                alt="soundcloud"
              /></a
            >
            <a href="https://twitter.com/aizcutei" target="_blank"
              ><img
                src={twitter}
                class="h8 w8 transition duration-200 ease-in-out hover:-scale-x-100"
                alt="twitter"
              /></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  #works {
    background: rgb(148, 227, 254);
    background: linear-gradient(
      45deg,
      rgba(148, 227, 254, 1) 37%,
      rgba(174, 187, 217, 1) 100%
    );

    box-shadow: 1px -1px 10px rgba(174, 187, 217, 1), -1px 1px 10px #aaffff;

    transition: 300ms;
  }
  #works:hover {
    box-shadow: 1px -1px 20px #7ec1d8, -1px 1px 20px #aaffff;
  }
</style>
