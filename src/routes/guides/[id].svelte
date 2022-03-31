<script context="module">
  export async function load({ fetch, params }) {
    const id = params.id;
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const res = await fetch(`/guides/${id}.json`);
    const { guide } = await res.json();
    console.warn(guide);

    if (res.ok) {
      return {
        props: {
          guide,
        },
      };
    }

    return {
      status: 301,
      redirect: "/guides",
    };
  }
</script>

<script>
  export let guide;
</script>

<div class="guide">
  <h2>{guide.title}</h2>
  <p>{guide.body}</p>
</div>

<style>
  .guide {
    margin-top: 36px;
    padding: 8px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
  }
</style>
