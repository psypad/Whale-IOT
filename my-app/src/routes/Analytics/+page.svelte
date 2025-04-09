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
          href="./ActiveDevices"
          class="text-muted-foreground hover:text-foreground transition-colors"
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
          class="text-foreground hover:text-foreground transition-colors"
        >
          Analytics
        </a>
      </nav>
    </header>
  
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <h1 class ="text-2xl font-bold">Analytics</h1>
        <p>seamlessly manage your Iot devices from a centralised dashboard with a sleek and post modern design  </p>
        <div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card.Root class="xl:col-span-2">
              <Card.Header class="flex flex-row items-center">
                <div class="grid gap-2">
                  <Card.Title>Transactions</Card.Title>
                  <Card.Description
                    >Recent transactions from your store.</Card.Description
                  >
                </div>
                <Button href="##" size="sm" class="ml-auto gap-1">
                  View All
                  <ArrowUpRight class="h-4 w-4" />
                </Button>
              </Card.Header>
              <Card.Content>
                <Table.Root>
                  <Table.Header>
                    <Table.Row>
                      <Table.Head>Customer</Table.Head>
                      <Table.Head class="xl:table.-column hidden">Type</Table.Head>
                      <Table.Head class="xl:table.-column hidden">Status</Table.Head>
                      <Table.Head class="xl:table.-column hidden">Date</Table.Head>
                      <Table.Head class="text-right">Amount</Table.Head>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <div class="font-medium">Liam Johnson</div>
                        <div class="text-muted-foreground hidden text-sm md:inline">
                          liam@example.com
                        </div>
                      </Table.Cell>
                      <Table.Cell class="xl:table.-column hidden">Sale</Table.Cell>
                      <Table.Cell class="xl:table.-column hidden">
                        <Badge class="text-xs" variant="outline">Approved</Badge>
                      </Table.Cell>
                      <Table.Cell
                        class="md:table.-cell xl:table.-column hidden lg:hidden"
                      >
                        2023-06-23
                      </Table.Cell>
                      <Table.Cell class="text-right">$250.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <div class="font-medium">Olivia Smith</div>
                        <div class="text-muted-foreground hidden text-sm md:inline">
                          olivia@example.com
                        </div>
                      </Table.Cell>
                      <Table.Cell class="xl:table.-column hidden">Refund</Table.Cell>
                      <Table.Cell class="xl:table.-column hidden">
                        <Badge class="text-xs" variant="outline">Declined</Badge>
                      </Table.Cell>
                      <Table.Cell
                        class="md:table.-cell xl:table.-column hidden lg:hidden"
                      >
                        2023-06-24
                      </Table.Cell>
                      <Table.Cell class="text-right">$150.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <div class="font-medium">Noah Williams</div>
                        <div class="text-muted-foreground hidden text-sm md:inline">
                          noah@example.com
                        </div>
                      </Table.Cell>
                      <Table.Cell class="xl:table.-column hidden">
                        Subscription
                      </Table.Cell>
                      <Table.Cell class="xl:table.-column hidden">
                        <Badge class="text-xs" variant="outline">Approved</Badge>
                      </Table.Cell>
                      <Table.Cell
                        class="md:table.-cell xl:table.-column hidden lg:hidden"
                      >
                        2023-06-25
                      </Table.Cell>
                      <Table.Cell class="text-right">$350.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <div class="font-medium">Emma Brown</div>
                        <div class="text-muted-foreground hidden text-sm md:inline">
                          emma@example.com
                        </div>
                      </Table.Cell>
                      <Table.Cell class="xl:table.-column hidden">Sale</Table.Cell>
                      <Table.Cell class="xl:table.-column hidden">
                        <Badge class="text-xs" variant="outline">Approved</Badge>
                      </Table.Cell>
                      <Table.Cell
                        class="md:table.-cell xl:table.-column hidden lg:hidden"
                      >
                        2023-06-26
                      </Table.Cell>
                      <Table.Cell class="text-right">$450.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <div class="font-medium">Liam Johnson</div>
                        <div class="text-muted-foreground hidden text-sm md:inline">
                          liam@example.com
                        </div>
                      </Table.Cell>
                      <Table.Cell class="xl:table.-column hidden">Sale</Table.Cell>
                      <Table.Cell class="xl:table.-column hidden">
                        <Badge class="text-xs" variant="outline">Approved</Badge>
                      </Table.Cell>
                      <Table.Cell
                        class="md:table.-cell xl:table.-column hidden lg:hidden"
                      >
                        2023-06-27
                      </Table.Cell>
                      <Table.Cell class="text-right">$550.00</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Card.Content>
            </Card.Root>
            <Card.Root>
              <Card.Header>
                <Card.Title>Recent Sales</Card.Title>
              </Card.Header>
              <Card.Content class="grid gap-8">
                <div class="flex items-center gap-4">
                  <Avatar.Root class="hidden h-9 w-9 sm:flex">
                    <Avatar.Image src="/avatars/01.png" alt="Avatar" />
                    <Avatar.Fallback>OM</Avatar.Fallback>
                  </Avatar.Root>
                  <div class="grid gap-1">
                    <p class="text-sm font-medium leading-none">Olivia Martin</p>
                    <p class="text-muted-foreground text-sm">
                      olivia.martin@email.com
                    </p>
                  </div>
                  <div class="ml-auto font-medium">+$1,999.00</div>
                </div>
                <div class="flex items-center gap-4">
                  <Avatar.Root class="hidden h-9 w-9 sm:flex">
                    <Avatar.Image src="/avatars/02.png" alt="Avatar" />
                    <Avatar.Fallback>JL</Avatar.Fallback>
                  </Avatar.Root>
                  <div class="grid gap-1">
                    <p class="text-sm font-medium leading-none">Jackson Lee</p>
                    <p class="text-muted-foreground text-sm">jackson.lee@email.com</p>
                  </div>
                  <div class="ml-auto font-medium">+$39.00</div>
                </div>
                <div class="flex items-center gap-4">
                  <Avatar.Root class="hidden h-9 w-9 sm:flex">
                    <Avatar.Image src="/avatars/03.png" alt="Avatar" />
                    <Avatar.Fallback>IN</Avatar.Fallback>
                  </Avatar.Root>
                  <div class="grid gap-1">
                    <p class="text-sm font-medium leading-none">Isabella Nguyen</p>
                    <p class="text-muted-foreground text-sm">
                      isabella.nguyen@email.com
                    </p>
                  </div>
                  <div class="ml-auto font-medium">+$299.00</div>
                </div>
                <div class="flex items-center gap-4">
                  <Avatar.Root class="hidden h-9 w-9 sm:flex">
                    <Avatar.Image src="/avatars/04.png" alt="Avatar" />
                    <Avatar.Fallback>WK</Avatar.Fallback>
                  </Avatar.Root>
                  <div class="grid gap-1">
                    <p class="text-sm font-medium leading-none">William Kim</p>
                    <p class="text-muted-foreground text-sm">will@email.com</p>
                  </div>
                  <div class="ml-auto font-medium">+$99.00</div>
                </div>
                <div class="flex items-center gap-4">
                  <Avatar.Root class="hidden h-9 w-9 sm:flex">
                    <Avatar.Image src="/avatars/05.png" alt="Avatar" />
                    <Avatar.Fallback>SD</Avatar.Fallback>
                  </Avatar.Root>
                  <div class="grid gap-1">
                    <p class="text-sm font-medium leading-none">Sofia Davis</p>
                    <p class="text-muted-foreground text-sm">sofia.davis@email.com</p>
                  </div>
                  <div class="ml-auto font-medium">+$39.00</div>
                </div>
              </Card.Content>
            </Card.Root>
          </div>
        
    
    </main>
  </div>
  