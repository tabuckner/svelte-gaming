<script lang="ts">
  import Title from "../lib/title.svelte";
  import "../styles/globals.css";
</script>

<header>
  <Title title="Ninja Gaming Guides" />
</header>
<main>
  <slot><!-- optional fallback --></slot>
</main>
<footer>
  <p>Copyright 2022 Taylor Buckner</p>
</footer>

<style>
  header {
    display: flex;
    justify-content: center;
  }
  main {
    max-width: 960px;
    margin: 24px auto;
  }
  footer {
    text-align: center;
  }
</style>
