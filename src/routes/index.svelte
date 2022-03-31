<script lang="ts">
  let title = "Ninja Gaming Guides";

  const updateTitle = () => {
    title = "Different Title";
  };
</script>

<div class="index">
  <h2>{title}</h2>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, ad. Rerum
    dicta sint veritatis magni deserunt quia repellat, voluptatem, inventore
    atque nam saepe in natus sapiente ab? Exercitationem, soluta qui!
  </p>

  <button on:click={updateTitle}>Change Title</button>

  <a href="/guides">Guides</a>
  <a href="/about">About</a>
</div>

<style>
  .index {
    text-align: center;
    display: block;
    margin: 24px auto;
  }
</style>
