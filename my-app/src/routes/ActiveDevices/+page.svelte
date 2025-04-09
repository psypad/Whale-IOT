<script lang="ts">
  import Activity from "lucide-svelte/icons/activity";
  import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
  import CircleUser from "lucide-svelte/icons/circle-user";
  import CreditCard from "lucide-svelte/icons/credit-card";
  import DollarSign from "lucide-svelte/icons/dollar-sign";
  import Menu from "lucide-svelte/icons/menu";
  import Package2 from "lucide-svelte/icons/package-2";
  import Search from "lucide-svelte/icons/search";
  import Users from "lucide-svelte/icons/users";

  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
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

<div class="flex min-h-screen w-full flex-col">
  <header
    class="bg-background sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6"
  >
    <nav
      class="hidden flex-col gap-20 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
    >
      <a
        href="##"
        class="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 class="h-6 w-6" />
        <span class="sr-only">Acme Inc</span>
      </a>
      <a
        data-sveltekit-reload
        href="./"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        Home
      </a>
      <a
        data-sveltekit-reload
        href="./ActiveDevices"
        class="text-foreground hover:text-foreground transition-colors"
      >
        Active devices
      </a>
      <a
        data-sveltekit-reload
        href="./AddDevices"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        Add devices
      </a>
      <a
        href="./UploadFirmware"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        Upload Firmware
      </a>

      <a
        href="./Analytics"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        Analytics
      </a>
    </nav>
  </header>

  <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
    <div class="grid-cols-3 mx-auto">
      <Button onclick={addBlock} href="##" size="sm" class="ml-auto gap-1">
        Add device
      </Button>
    </div>

    <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {#each blocks as block (block.id)}
        <!--<span>{block.message}</span> -->
        <Card.Root
          data-x-chunk-name="dashboard-05-chunk-1"
          data-x-chunk-description="A stats card showing this week's total sales in USD, the percentage difference from last week, and a progress bar."
        >
          <Card.Header
            class="flex flex-row items-center justify-between space-y-0 pb-2"
          >
            <Card.Title class="text-lg font-medium">ESP8266</Card.Title>
          </Card.Header>
          <Card.Content class="grid grid-cols-2 content-evenly ">
            <div class=" gap-4">charge</div>
            <div class="gap-20">status: active</div>
          </Card.Content>
          <Card.Footer class="grid grid-cols-2">
            <Progress value={25} aria-label="25% increase" />
            <Button
              onclick={() => removeBlock(block.id)}
              href="##"
              size="sm"
              class="bg-red-600 hover:bg-red-700 text-white ml-auto gap-1"
            >
              Remove
            </Button>
          </Card.Footer>
        </Card.Root>
      {/each}
    </div>
  </main>
</div>
