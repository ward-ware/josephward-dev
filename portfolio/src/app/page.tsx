import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-roboto-flex)]">
      <header className="row-start-1 flex items-center justify-between w-full max-w-3xl">
        <ThemeToggle />
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="text-4xl sm:text-5xl font-bold w-full text-center tracking-tight">
            I&#39;m Joseph Ward
          </h1>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="text-4xl sm:text-5xl font-semibold w-full text-center">
            ...and this is a website!
          </h1>
        </div>
        <div>
          <Button>Click me!</Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm text-right">
          Hello there.
        </p>
      </footer>
    </div>
  );
}
