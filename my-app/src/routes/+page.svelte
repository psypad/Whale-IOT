<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import * as Form from "$lib/components/ui/form";

  let i = 0;
  let deviceId = "";
  let MACaddress = "";
  let count = $state(0);
  let deviceName = "";
  


  const frameworks = [
    {
      value: "sveltekit",
      label: "SvelteKit"
    },
    {
      value: "next",
      label: "Next.js"
    },
    {
      value: "astro",
      label: "Astro"
    },
    {
      value: "nuxt",
      label: "Nuxt.js"
    }
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





</script>


<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" >Welcome to SvelteKit</h1>
<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    The Joke Tax Chronicles
</h1>


<Button onclick={greet}>click me</Button>


<h2>inc button</h2>

<p>value of inc {i}</p>

<Button onclick={inc}> incrementor </Button>

<Button onclick={() => count++}>
  clicks: {count}
</Button>

<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" >Device manager</h1>

<h2>active nodes</h2>

<p>add active nodes here</p>

<h2>add device</h2>

<form on:submit={handleSubmit}>
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


<p>add device tabel goes here</p>

<h2>upload firmware</h2>

<Button onclick={inc}> upload firmware </Button>

<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>


<Card.Root class="w-[350px]">
    <Card.Header>
      <Card.Title>Create project</Card.Title>
      <Card.Description>Deploy your new project in one-click.</Card.Description>
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
                  <Select.Item value={framework.value} label={framework.label}
                    >{framework.label}</Select.Item
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

<style>

  h1 {
    color: orangered;
  }

  h2 {
    color: orangered;
  }
</style>
