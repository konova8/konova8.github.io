<script>
  let count = 3
  const increment = () => {
    count += 1
  }
  const decrement = () => {
    count -= 1
  }
</script>

<button on:click={increment}>
  Increment count
</button>

<button on:click={decrement}>
  Decrement count
</button>

<p>Count: {count}</p>