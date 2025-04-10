<script lang="ts">
  import Package2 from "lucide-svelte/icons/package-2";

  import * as Card from "$lib/components/ui/card/index.js";

  import { chartType, myData, myOptions } from "./settings";

  import Select from "./Select.svelte";
  import Chart from "./Chart.svelte";

  let type = chartType;
  let data = myData;
  let options = myOptions;

  $: config = {
    type,
    data,
    options,
  };
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
        href="./ActiveDevices"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        Devices
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
        class="text-foreground hover:text-foreground transition-colors"
      >
        Analytics
      </a>
    </nav>
  </header>

  <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
    <h1 class="text-2xl font-bold">Analytics</h1>

    <div class="flex flex-col">
      <Card.Root class="xl:col-span-2">
        <Card.Header class="flex flex-row items-center">
          <div class="flex flex-col gap-1">
            <Select bind:type />
          </div>
        </Card.Header>
        <Card.Content class="max-h-screen max-w-screen grid mx-auto">
          <Chart {config} />
        </Card.Content>
      </Card.Root>
    </div>
  </main>
</div>
