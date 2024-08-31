import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src="/kortex-logo.svg" alt="Kortex" className="h-8" />
          <span className="text-sm font-semibold">Beta</span>
        </div>
        <nav className="space-x-4">
          <a href="#product">Product</a>
          <a href="#support">Support</a>
        </nav>
        <Button variant="secondary">Get Early Access</Button>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-sm mb-4">Where Your Best Writing Happens</h2>
        <h1 className="text-6xl font-bold mb-4">
          A Second Brain For <span className="text-gray-500">ADHD</span> humans.
        </h1>
        <p className="text-xl mb-8">Capture, connect, and organize your ideas in one place.</p>
        <Button size="lg">Get Early Access</Button>

        <Card className="mt-16 bg-zinc-900 text-left p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">How to become a synthesizer:</h3>
          <p className="text-gray-400 mb-4">
            A synthesizer is a new career path for polymaths, autodidacts, and self-improvers. Turn your ideas into income with internet leverage.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <span>Operate the command palette with</span>
            <kbd className="px-2 py-1 bg-gray-700 rounded">⌘</kbd>
            <kbd className="px-2 py-1 bg-gray-700 rounded">K</kbd>
          </div>
          <Input placeholder="Select or type a command..." className="bg-zinc-800 border-none" />
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Connections</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>The One Person Business Model</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </li>
              {/* Add more list items for other connections */}
            </ul>
          </div>
        </Card>
      </main>
    </div>
  );
}
