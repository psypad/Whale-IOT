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
        href="./"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        Home
      </a>
      <a
        href="./ActiveDevices"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        Active devices
      </a>
      <a
        data-sveltekit-reload
        href="./AddDevices"
        class="text-foreground hover:text-foreground transition-colors"
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
    <p>Add devices goes here</p>
    
  </main>
</div>
