<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import * as Form from "$lib/components/ui/form";
  import * as Accordion from "$lib/components/ui/accordion";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import { Progress } from "$lib/components/ui/progress";

  let i = 0;
  let deviceId = "";
  let MACaddress = "";
  let count = $state(0);
  let deviceName = "";

  const frameworks = [
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "next",
      label: "Next.js",
    },
    {
      value: "astro",
      label: "Astro",
    },
    {
      value: "nuxt",
      label: "Nuxt.js",
    },
  ];

  function greet() {
    alert("Welcome to Svelte!");
  }

  function inc() {
    i += 1;
  }

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log("device ID:", deviceId);
    console.log("Device Mac Address:", MACaddress);
  }

  let showAlert = $state(false);

  function handleClick() {
    showAlert = true;

    // Optional: auto-hide after 5 seconds
    setTimeout(() => {
      showAlert = false;
    }, 5000);
  }

  let blocks = $state<{ id: number; message: string }[]>([]);
  let counter = $state(1);

  function addBlock() {
    blocks = [...blocks, { id: counter, message: `This is block #${counter}` }];
    counter++;
  }

  function removeBlock(id: number) {
    blocks = blocks.filter((block) => block.id !== id);
  }
</script>

<section class="mx-auto shrink-0 p-6">
  <section>
    <div class="mb-2">
      <h1
        class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      >
        Device manager
      </h1>
    </div>
  </section>

  <section class="grid-cols-2 items-center">
    <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <Button on:click={handleClick}>Show Alert</Button>

      {#if showAlert == true}
        <Alert.Root
          variant="destructive"
          class="mt-4 border-destructive bg-destructive/10 text-destructive rounded-lg p-4"
        >
          <Alert.Title class="font-semibold text-lg">Error</Alert.Title>
          <Alert.Description>
            Your session has expired. Please login again.
          </Alert.Description>
        </Alert.Root>
      {/if}

      <Button onclick={greet}>click me</Button>
    </div>

    <div>
      <Button onclick={() => count++}>
        clicks: {count}
      </Button>

      <Alert.Root variant="destructive" class="lmao">
        <Alert.Title>Error</Alert.Title>
        <Alert.Description
          >Your session has expired. Please login again.</Alert.Description
        >
      </Alert.Root>
    </div>
  </section>

  <section>
    <div class="d">
      <h2>active nodes</h2>

      <p>add active nodes here</p>

      <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div
          class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
        >
          <Card.Root
            data-x-chunk-name="dashboard-05-chunk-1"
            data-x-chunk-description="A stats card showing this week's total sales in USD, the percentage difference from last week, and a progress bar."
          >
            <Card.Header class="pb-2">
              <Card.Description>Node 1</Card.Description>
              <Card.Title class="text-4xl">ESP8266</Card.Title>
            </Card.Header>
            <Card.Content>
              <div class="text-muted-foreground text-xs">Charge</div>
            </Card.Content>
            <Card.Footer>
              <Progress value={25} aria-label="25% increase" />
            </Card.Footer>
          </Card.Root>
          <Card.Root
            data-x-chunk-name="dashboard-05-chunk-2"
            data-x-chunk-description="A stats card showing this month's total sales in USD, the percentage difference from last month, and a progress bar."
          >
            <Card.Header class="pb-2">
              <Card.Description>Node 2</Card.Description>
              <Card.Title class="text-3xl">Audrino UNO</Card.Title>
            </Card.Header>
            <Card.Content>
              <div class="text-muted-foreground text-xs">Charge</div>
            </Card.Content>
            <Card.Footer>
              <Progress value={12} aria-label="12% increase" />
            </Card.Footer>
          </Card.Root>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="Device-add">
      <h2>add device</h2>

      <form onsubmit={handleSubmit}>
        <label>
          Device ID:
          <input type="text" bind:value={deviceId} />
        </label>

        <label>
          MAC address:
          <input type="text" bind:value={MACaddress} />
        </label>

        <Button type="submit">Submit</Button>
      </form>
    </div>
    <div class="grid-cols-3 mx-auto">
      <p>add device tabel goes here</p>
      <button onclick={addBlock}> Add device </button>
    </div>

    <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      {#each blocks as block (block.id)}
        <!--<span>{block.message}</span> -->
        <Card.Root
          data-x-chunk-name="dashboard-05-chunk-1"
          data-x-chunk-description="A stats card showing this week's total sales in USD, the percentage difference from last week, and a progress bar."
        >
          <Card.Header class="pb-2">
            <Card.Description>Node 1</Card.Description>
            <Card.Title class="text-4xl text-zinc-900">ESP8266</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-muted-foreground text-xs">Charge</div>
          </Card.Content>
          <Card.Footer>
            <Progress value={25} aria-label="25% increase" />
            <button
              onclick={() => removeBlock(block.id)}
              class="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded ml-4"
            >
              Remove
            </button>
          </Card.Footer>
        </Card.Root>
      {/each}
    </div>
  </section>
  <section>
    <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <h2>upload firmware</h2>

      <Button onclick={inc}>upload firmware</Button>

      <Card.Root class="w-[350px]">
        <Card.Header>
          <Card.Title>Create project</Card.Title>
          <Card.Description
            >Deploy your new project in one-click.</Card.Description
          >
        </Card.Header>
        <Card.Content>
          <form>
            <div class="grid w-full items-center gap-4">
              <div class="flex flex-col space-y-1.5">
                <Label for="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label for="framework">Framework</Label>
                <Select.Root>
                  <Select.Trigger id="framework">
                    <Select.Value placeholder="Select" />
                  </Select.Trigger>
                  <Select.Content>
                    {#each frameworks as framework}
                      <Select.Item
                        value={framework.value}
                        label={framework.label}>{framework.label}</Select.Item
                      >
                    {/each}
                  </Select.Content>
                </Select.Root>
              </div>
            </div>
          </form>
        </Card.Content>
        <Card.Footer class="flex justify-between">
          <Button>Cancel</Button>
          <Button>Deploy</Button>
        </Card.Footer>
      </Card.Root>
    </div>

    <p>
      Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read
      the documentation
    </p>
  </section>
</section>

<style>
</style>
