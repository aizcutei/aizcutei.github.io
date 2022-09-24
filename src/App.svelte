<script>
  import Avatar from "./assets/avatar.svg";
  import { Router, Route, Link } from "svelte-navigator";
  import Banner from "./lib/Banner.svelte";
  import About from "./lib/About.svelte";
  import Projects from "./lib/Projects.svelte";
  import Works from "./lib/works.svelte";

  function handleMousemove(event) {}
</script>

<Router>
  <header>
    <div />
  </header>
  <main>
    <Route path="/">
      <Banner />
    </Route>

    <Route path="/about">
      <About />
    </Route>

    <Route path="/projects">
      <Projects />
    </Route>

    <Route path="/works">
      <Works />
    </Route>

    <nav>
      <Link to="/" class="px-4 text-blue font-500 decoration-none">Home</Link>
      <Link to="about" class="px-4 text-blue font-500 decoration-none"
        >About</Link
      >
      <Link to="projects" class="px-4 text-blue font-500 decoration-none"
        >Projects</Link
      >
      <Link to="works" class="px-4 text-blue font-500 decoration-none"
        >Works</Link
      >
    </nav>
  </main>
</Router>
<img
  src={Avatar}
  alt="Avatar"
  class="absolute right-0 bottom-0 h-8 w-8 object-cover hover:h-12 hover:w-12 op90"
  on:click={() => {
    window.open("https://www.github.com/aizcutei");
  }}
/>

<style>
</style>
