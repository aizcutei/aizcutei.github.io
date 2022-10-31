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
      id="projects"
      class="bg-[#6edcff] h-80 rounded-lg rotate-0 ma max-w-lg items-center"
    >
      <div class="text-white text-lg font-800 p-5">
        <p class="text-10 text-shadow-lg tracking-wide">Projects</p>
        <ul>
          <li>
            <a
              href="https://music-theory.aizcutei.com"
              class="transition duration-200 text-white no-underline op80 text-shadow-sm hover:op100"
              >自由派音乐理论——中文翻译</a
            >
          </li>
          <li>
            <a
              href="https://github.com/aizcutei/pixelite"
              class="transition duration-200 text-white no-underline op80 text-shadow-sm hover:op100"
              >Pixelite: Make you image to pixel art.</a
            >
          </li>
          <li>
            <a
              href="https://github.com/aizcutei/Lyrecs"
              class="transition duration-200 text-white no-underline op80 text-shadow-sm hover:op100"
              ><span>Lyrecs: A lyric displayer for Apple Music.</span></a
            >
          </li>
          <li>
            <span
              class="transition duration-200 text-white no-underline op99 text-shadow-sm "
              >Working on more...</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
{/if}

<style>
  #projects {
    background: rgb(148, 227, 254);
    background: linear-gradient(
      45deg,
      rgba(148, 227, 254, 1) 37%,
      rgba(174, 187, 217, 1) 100%
    );

    box-shadow: 1px -1px 10px rgba(174, 187, 217, 1), -1px 1px 10px #aaffff;

    transition: 300ms;
  }
  #projects:hover {
    box-shadow: 1px -1px 20px #7ec1d8, -1px 1px 20px #aaffff;
  }
</style>
