/*** What Is Containers Architecture? ***/

/** How an Operating System Works? **/
// An operating system manages the hardware of the computer.
// The operating system is responsible for managing software application which end-users and other applications interact with.
// The operating system has a number of responsibilities including: scheduling tasks, processes, allocating memory so that
// the application can run in isolation.
// It provides an abstraction layer on how applications communicate with the hardware resources.
// An operating system consists of a number of internal programs whereby programs themselves are merely instructions.
// There is one program that forms the core of an ID and is known as the kernel.

/** What is a Kernel? **/
// Kernel is the heart of the operating system.
// It's the most important program of an OS.

// The primary OS of a computer system is known as the Host OS.
// We can launch a number of additional OSs on a host OS, these are known as guest OS.

// Think of a kernel as a bridge connects software applications with the processing of data on the hardware.
// The importance of a kernel is demonstrated by the fact that it is located in its own area of memory.
// Therefore a kernel gets a dedicated area in the computer RAM memory.
// The area is isolated from other applications.
// The nature of the design prevents user applications to corrupt or interrupt with kernel of an operating system.
// User applications run within User Space and Kernel is executed within Kernel Space.
// When a computer boots up, kernel is one of the first computer programs to be loaded in the computer system.
// Additionally, kernel remains in memory until the computer system is switched off.

/** Hypervisor **/
//  Hypervisor sits in between computer system applications and physical hardware. As a result, if an application wants
//  to interact with a CPU, it will have to pass through the operating system and then the hypervisor.

/** Virtual Machines (VM) **/
// Virtual machines separate the software applications from the hardware of a computer system. We can clone a computer
// system by creating its virtual machine. VMs provide an abstraction layer and hide the complexities of underlying
// hardware components. VMs can be used to operate the physical hardware systems. They have been heavily used in the
// industry for over a decade now. A hypervisor process launches virtual machines.
// A virtual machine creates a virtual hardware system.

//    VM    |    VM
// Guest OS | Guest OS
//      Hypervisor
//       Host OS
//       Hardware

// Installing, deploying and replicating a VM is cheaper than buying a full set of infrastructure. We can deploy and
// install a custom application on a virtual machine. It requires a separate OS (known as guest OS) to run the application on a VM.

// As a consequence, the VMs have their own guest OS which include their own kernel, drivers and the binaries of the
// applications. Subsequently, the VM operates on a hypervisor which runs on the guest operating system. As a result,
// if an application wants to interact with a CPU, it will have to pass through the operating system and then the hypervisor.

// VMs introduce problems because not only they are a memory-hungry programs, they add duplication of application
// binaries between different virtual machines. Additionally it takes a longer time to boot up a VM.
// Virtual machines are heavy computer programs. They require server memory. Additionally, only a number of VMs can
// simultaneously run on a computer system.

// The degradation of VM boot-up time, installation, performance, maintenance and replication has introduced the birth
// of a new technique which is known as containerisation.

/** How does a container work? **/
// Virtual machines clone an operating system for themselves whereas containers can share an operating system.
// Firstly, containers do not require a guest OS. They are software programs. All applications within a container run
// in the User Space of the OS which is line with the design of a host OS whereby only kernel is given its dedicated space.
// This allows applications to communicate with the CPU without passing through the guest operating system and then the
// hypervisor. As a result, containers offer better performance.

// Container | Container
//   Container Engine
//      Host OS
//      Hardware

// Containers are light-weight computer programs.

